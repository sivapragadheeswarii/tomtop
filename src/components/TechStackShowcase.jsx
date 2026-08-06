import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Activity, CheckCircle2, ShieldCheck, Zap, Cpu, Server, Globe, Smartphone, Database, Cloud } from 'lucide-react';

const ROW_ONE_TECHS = [
  { name: 'React 18+ JS', category: 'Frontend Engine', symbol: '⚛️', metric: '< 1ms Render', tag: 'Virtual DOM' },
  { name: 'Node.js Microservices', category: 'Backend Gateway', symbol: '🟢', metric: '10K+ Sockets', tag: 'Event-Driven' },
  { name: 'Flutter Native Engine', category: 'Mobile UI', symbol: '📱', metric: '60 FPS Skia', tag: 'Cross Platform' },
  { name: 'AWS Cloud EC2 & S3', category: 'Cloud Infrastructure', symbol: '☁️', metric: '99.99% SLA', tag: 'Multi-Region' },
  { name: 'PostgreSQL & Mongo', category: 'Database Systems', symbol: '🐘', metric: '< 10ms Query', tag: 'ACID & Sharded' },
  { name: 'Redis Cache & Python', category: 'In-Memory & Ops', symbol: '⚡', metric: 'Sub-ms Key-Value', tag: 'Async Pipelines' },
  { name: 'Vite ESM Bundler', category: 'Dev Tooling', symbol: '⚡', metric: 'Instant HMR', tag: 'Native ESM' },
  { name: 'Express REST & GraphQL', category: 'API Middleware', symbol: '🚀', metric: 'High Throughput', tag: 'Zero Latency' },
  { name: 'Tailwind JIT Tokens', category: 'UI Glass Tokens', symbol: '🎨', metric: 'Zero-Runtime', tag: 'Glassmorphic' },
  { name: 'Python Async Workers', category: 'Data & AI Workflows', symbol: '🐍', metric: 'Real-Time Queue', tag: 'Background Jobs' }
];

const ROW_TWO_CAPABILITIES = [
  { title: 'Sub-Millisecond Virtual DOM Reconciliation', badge: 'FRONTEND SLA', icon: Globe },
  { title: '10,000+ Concurrent Websockets Handling', badge: 'MICROSERVICES', icon: Server },
  { title: '60 FPS Skia Graphics Engine Acceleration', badge: 'MOBILE NATIVE', icon: Smartphone },
  { title: '99.99% Guaranteed AWS Cloud SLA', badge: 'INFRASTRUCTURE', icon: Cloud },
  { title: 'Sub-10ms Indexed Relational & Document Queries', badge: 'DATABASE OPS', icon: Database },
  { title: 'Sub-Millisecond In-Memory Redis Key-Value Cache', badge: 'MEMORY CACHE', icon: Cpu },
  { title: 'ISO 27001 Security OAuth2 & JWT Gateways', badge: 'SECURITY AUDIT', icon: ShieldCheck }
];

export default function TechStackShowcase() {
  return (
    <section className="py-12 sm:py-28 bg-[#FAF5FF] border-b border-purple-100 relative overflow-hidden text-[#111827]">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[650px] bg-purple-500/10 rounded-full blur-[240px] pointer-events-none" />

      {/* Edge Gradient Fades for Infinite Marquee Smoothness */}
      <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-48 bg-gradient-to-r from-[#FAF5FF] to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-48 bg-gradient-to-l from-[#FAF5FF] to-transparent z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8 sm:mb-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-purple-100 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold text-[#7C3AED] mb-3 sm:mb-4 shadow-sm"
          >
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-500 animate-pulse" />
            <span className="uppercase tracking-widest">Kinetic Tech Ecosystem</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl sm:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight"
          >
            Technologies We{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#C084FC]">
              Engineer With
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-2.5 sm:mt-4 text-slate-600 text-xs sm:text-lg leading-relaxed"
          >
            A continuous, enterprise-grade technological flow powering high-availability systems with sub-second performance SLAs.
          </motion.p>
        </div>
      </div>

      {/* MARQUEE STREAM ROW 1: Frameworks & Stacks (Moving Left) */}
      <div className="relative overflow-hidden mb-5 sm:mb-8 py-2">
        <div className="flex w-max space-x-3.5 sm:space-x-6 animate-marquee hover:[animation-play-state:paused]">
          {[...ROW_ONE_TECHS, ...ROW_ONE_TECHS].map((tech, idx) => (
            <div
              key={idx}
              className="px-4 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl bg-white border border-purple-100 shadow-md shadow-purple-900/5 flex items-center space-x-3 sm:space-x-4 shrink-0 hover:border-[#C084FC] hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-lg sm:text-2xl shrink-0 group-hover:scale-105 transition-transform">
                {tech.symbol}
              </div>

              <div>
                <div className="flex items-center space-x-1.5 sm:space-x-2">
                  <h4 className="text-xs sm:text-base font-extrabold text-[#111827] group-hover:text-[#7C3AED] transition-colors">
                    {tech.name}
                  </h4>
                  <span className="text-[8px] sm:text-[10px] font-extrabold px-1.5 py-0.5 sm:px-2 sm:py-0.5 bg-purple-50 text-[#7C3AED] rounded-md border border-purple-200 uppercase tracking-wider">
                    {tech.tag}
                  </span>
                </div>
                
                <div className="flex items-center space-x-2 sm:space-x-3 text-[10px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1">
                  <span>{tech.category}</span>
                  <span className="w-1 h-1 rounded-full bg-purple-400" />
                  <span className="font-mono text-emerald-600 font-bold">{tech.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MARQUEE STREAM ROW 2: Architectural Capabilities (Moving Right) */}
      <div className="relative overflow-hidden mb-6 sm:mb-16 py-2">
        <div className="flex w-max space-x-3.5 sm:space-x-6 animate-marquee-reverse hover:[animation-play-state:paused]">
          {[...ROW_TWO_CAPABILITIES, ...ROW_TWO_CAPABILITIES].map((cap, idx) => {
            const IconComp = cap.icon;

            return (
              <div
                key={idx}
                className="px-4 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl bg-white border border-purple-100 shadow-sm flex items-center space-x-3 sm:space-x-4 shrink-0 hover:border-[#C084FC] hover:shadow-md transition-all duration-300 group cursor-pointer"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-purple-100 text-[#7C3AED] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>

                <div>
                  <span className="text-[8px] sm:text-[9px] font-extrabold font-mono text-[#7C3AED] uppercase tracking-widest block mb-0.5">
                    {cap.badge}
                  </span>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#111827] group-hover:text-[#7C3AED] transition-colors">
                    {cap.title}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* End of Tech Showcase Stream */}
    </section>
  );
}
