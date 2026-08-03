import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, TrendingUp, Server, Clock, Headset, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const pillars = [
  {
    icon: Code2,
    title: "Bespoke Software Architecture",
    desc: "Custom microservices & high-concurrency portals with zero monolithic technical debt.",
    metric: "< 1ms Render",
    badge: "CUSTOM CODE"
  },
  {
    icon: Layout,
    title: "Human-Centric UI/UX Design",
    desc: "Editorial glassmorphism interfaces optimized for 60 FPS mobile-first responsiveness.",
    metric: "60 FPS UX",
    badge: "DESIGNS"
  },
  {
    icon: TrendingUp,
    title: "High-Concurrency Engineering",
    desc: "Scalable backend pipelines built for 10,000+ real-time concurrent user transactions.",
    metric: "10K+ Sockets",
    badge: "SCALABILITY"
  },
  {
    icon: Server,
    title: "Enterprise NVMe Cloud Clusters",
    desc: "Auto-scaling multi-region AWS cloud infrastructure backed by automated hourly backups.",
    metric: "99.99% SLA",
    badge: "NVMe CLOUD"
  },
  {
    icon: Clock,
    title: "Sub-15 Minute Emergency SLA",
    desc: "Continuous proactive DevOps monitoring with guaranteed 15-minute emergency response.",
    metric: "15m Response",
    badge: "24/7 SLA"
  },
  {
    icon: Headset,
    title: "Direct Senior Engineer Access",
    desc: "Transparent bi-weekly agile sprints with 100% client source code IP rights ownership.",
    metric: "100% Client IP",
    badge: "TRANSPARENCY"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-24 bg-gradient-to-b from-[#070A11] via-[#0B162C] to-[#070A11] relative overflow-hidden text-white border-b border-white/10">
      {/* Ambient Background Radial Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-blue-600/10 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf806_1px,transparent_1px),linear-gradient(to_bottom,#38bdf806_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-blue-950/90 border border-blue-500/30 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold text-[#38BDF8] mb-3 sm:mb-4 shadow-xl backdrop-blur-md"
          >
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300 animate-pulse" />
            <span className="uppercase tracking-widest">Enterprise Advantage</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            Why Partner With{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-cyan-200">
              TomTop Solutions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-2 sm:mt-4 text-slate-300 text-xs sm:text-lg leading-relaxed"
          >
            Sub-second performance, 99.99% cloud uptime, and direct senior engineer oversight.
          </motion.p>
        </div>

        {/* Crisp Executive 2-Column Minimalist List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6 max-w-6xl mx-auto">
          {pillars.map((item, idx) => {
            const IconComponent = item.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="group relative p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#0B1A38]/70 border border-white/10 hover:border-[#38BDF8]/50 hover:bg-[#0B1A38]/95 backdrop-blur-xl transition-all duration-300 shadow-xl flex items-start space-x-3.5 sm:space-x-5"
              >
                {/* Glowing Icon Orb */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#1D4ED8] via-[#2563EB] to-[#06B6D4] text-white flex items-center justify-center shadow-lg shrink-0 group-hover:scale-105 transition-transform">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1 gap-2">
                    <h3 className="text-sm sm:text-lg font-bold text-white group-hover:text-[#38BDF8] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <span className="hidden sm:inline-block text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 shrink-0">
                      {item.metric}
                    </span>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
