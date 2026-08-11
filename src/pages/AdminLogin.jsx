import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Mail, ArrowRight, Sparkles, Server } from 'lucide-react';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('admin@tomtopsolutions.com');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const ports = [5001, 5002, 5000];
    let loggedIn = false;

    for (const p of ports) {
      try {
        const response = await fetch(`http://localhost:${p}/api/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
        const data = await response.json();

        if (response.ok) {
          localStorage.setItem('tomtop_admin_token', data.token);
          localStorage.setItem('tomtop_admin_user', JSON.stringify(data));
          localStorage.setItem('tomtop_api_port', p.toString());
          navigate('/admin/dashboard');
          loggedIn = true;
          break;
        } else if (response.status === 401) {
          setError(data.message || 'Invalid credentials');
          loggedIn = true;
          break;
        }
      } catch (err) {
        // Try next port
      }
    }

    if (!loggedIn) {
      if (email === 'admin@tomtopsolutions.com' && password === 'admin123') {
        const mockAdmin = {
          _id: 'mock_admin_123',
          name: 'Tomtop Administrator',
          email: 'admin@tomtopsolutions.com',
          role: 'admin',
          token: 'mock_jwt_token_demo'
        };
        localStorage.setItem('tomtop_admin_token', mockAdmin.token);
        localStorage.setItem('tomtop_admin_user', JSON.stringify(mockAdmin));
        navigate('/admin/dashboard');
      } else {
        setError('Invalid credentials (Try: admin@tomtopsolutions.com / admin123)');
      }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E3A8A] to-[#0F172A] text-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Glow Rings */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 p-8 sm:p-10 rounded-3xl shadow-2xl relative z-10"
      >
        <div className="text-center space-y-3 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#2563EB] to-[#60A5FA] flex items-center justify-center mx-auto shadow-lg shadow-blue-500/30 border border-white/30">
            <ShieldCheck className="w-9 h-9 text-white" />
          </div>
          <span className="text-[10px] font-black tracking-widest text-blue-300 uppercase bg-blue-500/20 px-3 py-1 rounded-full border border-blue-400/30 inline-block">
            Tomtop Solutions Portal
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white">Admin Control Center</h1>
          <p className="text-xs text-blue-200">
            Sign in to manage projects, job postings, and incoming applications.
          </p>
        </div>

        {error && (
          <div className="mb-6 p-3.5 rounded-xl bg-rose-500/20 border border-rose-400/40 text-rose-200 text-xs font-semibold text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-[11px] font-bold text-blue-200 uppercase tracking-wider block mb-1.5">
              Admin Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-blue-300 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-xs font-semibold placeholder-blue-300/50 outline-none focus:border-blue-400 focus:bg-white/15 transition-all"
                placeholder="admin@tomtopsolutions.com"
              />
            </div>
          </div>

          <div>
            <label className="text-[11px] font-bold text-blue-200 uppercase tracking-wider block mb-1.5">
              Security Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-blue-300 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-xs font-semibold placeholder-blue-300/50 outline-none focus:border-blue-400 focus:bg-white/15 transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#60A5FA] text-white font-black text-xs sm:text-sm rounded-xl shadow-lg shadow-blue-600/30 flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-0.5 active:scale-95 disabled:opacity-50 mt-4"
          >
            <span>{loading ? 'Authenticating...' : 'Sign In to Dashboard'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-white/10 text-center text-[11px] text-blue-200/80 space-y-1">
          <p className="flex items-center justify-center gap-1">
            <Server className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            Backend: <strong className="text-white">Node.js + Express + MongoDB</strong>
          </p>
          <p className="text-[10px] text-blue-300/60">
            Default Credentials: admin@tomtopsolutions.com / admin123
          </p>
        </div>
      </motion.div>
    </div>
  );
}
