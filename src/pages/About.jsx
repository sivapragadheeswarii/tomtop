import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Sparkles, UserCheck, MapPin, CheckCircle2, Award, ShieldCheck, Zap, HeartHandshake, Lightbulb, Clock, ChevronDown, Building2, Server, Phone, Mail, Globe, Navigation } from 'lucide-react';
import { companyInfo } from '../data/companyData';
import WhyChooseUs from '../components/WhyChooseUs';

const timelineEvents = [
  { year: "2014", title: "Company Foundation", desc: "Established in Madurai by Founder Anand Premkumar A as a custom web development studio." },
  { year: "2017", title: "Enterprise ERP Expansion", desc: "Expanded core capabilities into custom industrial ERP software and billing automation." },
  { year: "2020", title: "NVMe Cloud Migration", desc: "Launched high-speed NVMe cloud hosting with 99.9% uptime SLA for enterprise clients." },
  { year: "2024+", title: "Global Software Partner", desc: "Serving 120+ corporate clients with mobile apps, full-stack portals, and cloud microservices." }
];

const coreValues = [
  { icon: ShieldCheck, title: "Technical Integrity", desc: "We write clean, secure, and well-documented code adhering to strict security standards." },
  { icon: Lightbulb, title: "Client-Centric Innovation", desc: "We solve real business challenges with modern tech stacks that deliver measurable ROI." },
  { icon: HeartHandshake, title: "Transparent SLA", desc: "No hidden costs or vague deadlines. Clear sprint milestones and guaranteed 99.9% uptime." },
  { icon: Clock, title: "Continuous Excellence", desc: "24/7 technical monitoring, ongoing feature enhancements, and proactive support." }
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="bg-[#070A11] text-white min-h-screen">
      
      {/* 1. Header Hero Banner (Full Viewport Hero Banner) */}
      <section className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-16 overflow-hidden border-b border-white/10 bg-[#070A11]">
        {/* Background Overlay & Cybernetic Tech Mesh */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/about_hero_bg.png"
            alt="TOMTOP SOLUTIONS Corporate Innovation"
            className="w-full h-full object-cover object-center opacity-70 filter contrast-125 brightness-110 saturate-125 pointer-events-none"
          />
          {/* Overlay for optimal readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070A11]/85 via-[#0B1528]/60 to-[#070A11]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_65%_at_50%_45%,rgba(56,189,248,0.18),transparent)]" />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/15 rounded-full blur-[160px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center justify-center my-auto w-full">
          {/* Live Studio Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 bg-blue-950/80 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold text-[#38BDF8] mb-5 sm:mb-6 shadow-[0_0_20px_rgba(56,189,248,0.2)] backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38BDF8]"></span>
            </span>
            <span className="uppercase tracking-widest">About TOMTOP SOLUTIONS</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white max-w-4xl mx-auto drop-shadow-md"
          >
            Building Technology That Drives <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-cyan-200">
              Business Growth &amp; Scale
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-4 sm:mt-6 text-slate-300 text-xs sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed text-slate-200/90"
          >
            Headquartered in Madurai, TOMTOP SOLUTIONS provides high-performance web development, custom ERP software, mobile applications, and NVMe cloud hosting.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto"
          >
            <button
              onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })}
              className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#06B6D4] hover:from-[#2563EB] hover:to-[#38BDF8] text-white font-bold rounded-2xl shadow-[0_10px_30px_rgba(37,99,235,0.4)] flex items-center justify-center space-x-2 text-xs sm:text-sm group transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              <span>Explore Our Story</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <a
              href={`tel:${companyInfo.phone}`}
              className="hidden sm:flex w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-xl text-white font-semibold rounded-2xl transition-all text-center items-center justify-center space-x-2 text-xs sm:text-sm hover:border-[#38BDF8] active:scale-95"
            >
              <Phone className="w-4 h-4 text-[#38BDF8]" />
              <span>Contact Madurai HQ</span>
            </a>
          </motion.div>
        </div>

        {/* Animated Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 z-10 cursor-pointer"
        >
          <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest hidden sm:block">
            Scroll to Explore
          </span>
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center hover:border-[#38BDF8]">
            <ChevronDown className="w-4 h-4 text-[#38BDF8] animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* 2. Company Story & Profile */}
      <section className="py-14 sm:py-24 bg-gradient-to-b from-[#070A11] via-[#0B162C] to-[#070A11] border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf806_1px,transparent_1px),linear-gradient(to_bottom,#38bdf806_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7 p-5 sm:p-10 rounded-2xl sm:rounded-3xl bg-[#0B1F4D]/70 border border-white/15 backdrop-blur-2xl shadow-2xl flex flex-col justify-between"
            >
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <span className="text-[10px] sm:text-xs font-bold text-[#38BDF8] uppercase tracking-widest bg-blue-950/90 px-3 py-1 rounded-full border border-blue-500/30 inline-block mb-1">
                    Company Story
                  </span>
                </div>
                <h2 className="text-xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
                  Software Engineering Excellence Built on Trust
                </h2>
                <p className="text-slate-300 leading-relaxed text-xs sm:text-base">
                  TOMTOP SOLUTIONS was founded by <strong className="text-white font-semibold">Anand Premkumar A</strong> to provide enterprise-grade web, mobile, and software solutions for growing businesses.
                </p>
                <p className="text-slate-300 leading-relaxed text-xs sm:text-base">
                  Over the past decade, we have helped over 120+ corporate clients streamline their operations, automate billing workflows, and achieve scale with high-speed cloud infrastructure.
                </p>
              </div>

              <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-white/10">
                <div className="p-3.5 sm:p-4 bg-white/10 rounded-xl sm:rounded-2xl border border-white/10 flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#2563EB] text-white flex items-center justify-center font-bold shrink-0">
                    <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-200" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base">{companyInfo.founder}</h4>
                    <p className="text-[11px] sm:text-xs text-[#38BDF8] font-semibold">{companyInfo.title} • {companyInfo.name}</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="hidden lg:flex lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0B1F4D] via-[#1E3A8A] to-[#0D265C] border border-white/20 shadow-2xl flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-5">
                {/* Header */}
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#38BDF8]/15 flex items-center justify-center text-[#38BDF8] border border-[#38BDF8]/30 shrink-0 shadow-lg">
                    <Building2 className="w-5 h-5 text-cyan-300" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-white leading-tight">Technical HQ</h3>
                    <p className="text-xs text-[#38BDF8] font-medium">Madurai, Tamil Nadu, India</p>
                  </div>
                </div>

                {/* Address */}
                <p className="text-blue-100 text-xs sm:text-sm leading-relaxed border-l-2 border-[#38BDF8] pl-3 py-1 bg-white/5 rounded-r-xl">
                  {companyInfo.address}
                </p>

                {/* Operational Highlights Specs Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-2xl bg-white/8 border border-white/10 backdrop-blur-md">
                    <div className="flex items-center space-x-2 text-[#38BDF8] mb-1">
                      <Building2 className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">Facility</span>
                    </div>
                    <p className="text-xs font-bold text-white truncate">Engineering Studio</p>
                  </div>

                  <div className="p-3 rounded-2xl bg-white/8 border border-white/10 backdrop-blur-md">
                    <div className="flex items-center space-x-2 text-cyan-300 mb-1">
                      <Server className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">Servers</span>
                    </div>
                    <p className="text-xs font-bold text-white truncate">NVMe Cloud Hub</p>
                  </div>

                  <div className="p-3 rounded-2xl bg-white/8 border border-white/10 backdrop-blur-md">
                    <div className="flex items-center space-x-2 text-emerald-400 mb-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">Hours</span>
                    </div>
                    <p className="text-xs font-bold text-white truncate">Mon - Sat (9am - 7pm)</p>
                  </div>

                  <div className="p-3 rounded-2xl bg-white/8 border border-white/10 backdrop-blur-md">
                    <div className="flex items-center space-x-2 text-amber-300 mb-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">Support</span>
                    </div>
                    <p className="text-xs font-bold text-white truncate">24/7 SLA Monitoring</p>
                  </div>
                </div>

                {/* Interactive Live Map Preview Frame */}
                <div className="rounded-2xl border border-white/15 overflow-hidden shadow-lg relative h-36 bg-slate-900">
                  <iframe
                    title="Technical HQ Location"
                    src="https://maps.google.com/maps?q=Madurai,TamilNadu,India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0 filter grayscale contrast-125 brightness-90 opacity-80 hover:opacity-100 transition-opacity"
                    allowFullScreen=""
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between bg-[#070A11]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-[10px] text-white">
                    <span className="flex items-center space-x-1.5 font-medium">
                      <MapPin className="w-3 h-3 text-[#38BDF8]" />
                      <span>Madurai Live Center</span>
                    </span>
                    <a
                      href="https://maps.google.com/?q=Madurai,TamilNadu,India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#38BDF8] hover:text-white font-bold flex items-center space-x-1 transition-colors"
                    >
                      <Navigation className="w-3 h-3" />
                      <span>Directions</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact details */}
              <div className="space-y-2 border-t border-white/15 pt-4 mt-4 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-blue-200 flex items-center space-x-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>Phone:</span>
                  </span>
                  <a href={`tel:${companyInfo.phone}`} className="font-bold text-white hover:text-[#38BDF8] transition-colors">{companyInfo.phone}</a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-200 flex items-center space-x-1.5">
                    <Mail className="w-3.5 h-3.5 text-cyan-300" />
                    <span>Email:</span>
                  </span>
                  <a href={`mailto:${companyInfo.email}`} className="font-bold text-white hover:text-[#38BDF8] transition-colors truncate ml-2">{companyInfo.email}</a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-200 flex items-center space-x-1.5">
                    <Globe className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Website:</span>
                  </span>
                  <a href={`https://${companyInfo.website}`} target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-[#38BDF8] transition-colors">{companyInfo.website}</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. Company Timeline Section - Vertical Laser Track on Mobile, Stepper Grid on Desktop */}
      <section className="py-12 sm:py-24 bg-gradient-to-b from-[#070A11] via-[#0B162C] to-[#070A11] border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-blue-600/10 rounded-full blur-[200px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf806_1px,transparent_1px),linear-gradient(to_bottom,#38bdf806_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-20">
            <span className="text-[#38BDF8] font-bold text-[10px] sm:text-xs uppercase tracking-widest bg-blue-950/80 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full border border-blue-500/30 shadow-lg">
              EVOLUTION &amp; MILESTONES
            </span>
            <h2 className="text-2xl sm:text-5xl font-extrabold text-white mt-2.5 sm:mt-3 tracking-tight">
              Company Timeline
            </h2>
            <p className="mt-2 sm:mt-3 text-slate-400 text-xs sm:text-base">
              A decade of steady tech evolution, enterprise client trust, and engineering milestones.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Desktop Horizontal Glowing Connecting Line */}
            <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-[#38BDF8] via-[#2563EB] to-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.5)] z-0" />

            {/* Mobile Vertical Glowing Laser Track */}
            <div className="lg:hidden absolute left-5 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#38BDF8] via-[#2563EB] to-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.5)] z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10 space-y-2 sm:space-y-0">
              {timelineEvents.map((event, idx) => {
                const stepPills = ["MADURAI STUDIO", "INDUSTRIAL ERP", "NVMe CLOUD", "120+ CLIENTS"];
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="relative group pl-12 lg:pl-0 flex flex-col items-start"
                  >
                    {/* Glowing Stepper Node */}
                    <div className="absolute left-0 top-0 lg:static w-10 h-10 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-[#0B1A38] border-2 border-[#38BDF8] text-[#38BDF8] flex items-center justify-center font-mono font-extrabold text-xs lg:text-sm shadow-[0_0_20px_rgba(56,189,248,0.4)] group-hover:scale-110 group-hover:bg-[#2563EB] group-hover:text-white transition-all lg:mb-8 z-10 shrink-0">
                      0{idx + 1}
                    </div>

                    {/* Obsidian Stepper Glass Card */}
                    <div className="w-full p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0B1A38]/90 border border-white/15 backdrop-blur-2xl shadow-2xl flex flex-col justify-between group-hover:border-[#38BDF8]/60 transition-all h-full relative overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div>
                        <div className="flex items-center justify-between mb-2.5 sm:mb-4 gap-2">
                          <span className="text-xl sm:text-2xl font-black font-mono text-[#38BDF8]">
                            {event.year}
                          </span>
                          <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-widest text-cyan-300 bg-cyan-950/80 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-cyan-500/30 shrink-0">
                            {stepPills[idx]}
                          </span>
                        </div>

                        <h3 className="text-base sm:text-xl font-extrabold text-white group-hover:text-[#38BDF8] transition-colors mb-1.5 sm:mb-3">
                          {event.title}
                        </h3>

                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                          {event.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us (EXACT SAME COMPONENT AS HOME PAGE) */}
      <WhyChooseUs />

    </div>
  );
}
