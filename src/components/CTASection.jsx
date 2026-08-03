import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function CTASection({ onOpenQuote }) {
  return (
    <section className="py-20 bg-gradient-to-b from-[#070A11] via-[#0B162C] to-[#070A11] text-white relative overflow-hidden border-t border-white/10 text-center">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Main Title */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Ready to Transform Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-cyan-200">
              Business?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed font-normal">
            Let's build innovative, scalable digital solutions together.
          </p>

          {/* Clean Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenQuote()}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#06B6D4] hover:from-[#2563EB] hover:to-[#38BDF8] text-white font-extrabold text-sm rounded-xl shadow-xl flex items-center justify-center space-x-2.5 group transition-all transform hover:-translate-y-0.5"
            >
              <span>Get Free Proposal</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a
              href="https://wa.me/919677751745"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-xl flex items-center justify-center space-x-2.5 shadow-lg transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
