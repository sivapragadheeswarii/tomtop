import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Compass, Sparkles, UserCheck, MapPin, CheckCircle2, Award, ShieldCheck, Zap, HeartHandshake, Lightbulb, Clock, ChevronDown, Building2, Server, Phone, Mail, Globe, Navigation, ArrowRight } from 'lucide-react';
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
  const context = useOutletContext();
  const onOpenQuote = context?.onOpenQuote || (() => {});
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
    <div className="bg-[#FAF5FF] text-[#111827] min-h-screen">
      
      {/* 1. Header Hero Banner (Natural Luxury Corporate Photography Theme) */}
      <section className="relative min-h-[85vh] sm:min-h-screen flex flex-col justify-center items-center pt-28 pb-16 overflow-hidden border-b border-purple-100 bg-[#FAF5FF]">
        {/* Background Image: Natural Photography (Modern Luxury Corporate Office Interior & Team Meeting) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/about_hero_bg.png"
            alt="Business leaders discussing technology strategy in modern glass office meeting room"
            className="w-full h-full object-cover object-center opacity-90 filter brightness-100 contrast-105 saturate-105 pointer-events-none transition-all duration-700"
          />
          {/* Neutral Soft Fade Overlay: Preserves true white & grey photography colors while keeping text readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/35 via-slate-900/15 to-[#FAF5FF] pointer-events-none" />
        </div>

        {/* Soft Radial Spotlight Behind Hero Text (Matched to Home Page) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-3xl h-[420px] bg-white/75 blur-[75px] rounded-full pointer-events-none z-10 hidden sm:block" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center flex flex-col items-center justify-center my-auto w-full">
          {/* Glassmorphism Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-white/95 border border-purple-300 px-4 py-1.5 rounded-full text-xs font-bold text-[#7C3AED] mb-4 shadow-md backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7C3AED]"></span>
            </span>
            <span className="uppercase tracking-widest text-[11px]">Engineering Tech Excellence</span>
          </motion.div>

          {/* Breadcrumb Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center space-x-2 text-xs font-semibold text-[#4B5563] mb-5 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-purple-200/80 shadow-sm"
          >
            <Link to="/" className="hover:text-[#7C3AED] transition-colors">Home</Link>
            <span className="text-purple-400">/</span>
            <span className="text-[#111827] font-bold">About Us</span>
          </motion.div>

          {/* Large Bold Heading: Matched to Home Page Style */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-3xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] text-[#111827] max-w-4xl mx-auto drop-shadow-sm"
          >
            Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#A855F7]">Digital Innovation</span> & Enterprise Scale
          </motion.h1>

          {/* Short Subtitle Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 sm:mt-6 text-[#374151] text-sm sm:text-xl max-w-2xl mx-auto font-medium leading-relaxed"
          >
            We engineer high-concurrency ERP systems, custom web portals, and cloud infrastructure for modern corporate enterprises.
          </motion.p>

          {/* Two CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto"
          >
            <button
              onClick={() => onOpenQuote()}
              className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#C084FC] hover:from-[#6D28D9] hover:to-[#7C3AED] text-white font-bold rounded-2xl shadow-xl shadow-purple-950/40 flex items-center justify-center space-x-2 text-sm group transition-all transform hover:-translate-y-0.5 active:scale-95 border border-purple-300/30"
            >
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>Request Free Proposal</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })}
              className="w-full sm:w-auto px-7 py-3.5 bg-white/95 hover:bg-white text-[#111827] hover:text-[#7C3AED] border border-purple-200 font-semibold rounded-2xl transition-all text-center flex items-center justify-center space-x-2 text-sm shadow-md backdrop-blur-md active:scale-95"
            >
              <span>Explore Our Story</span>
              <ChevronDown className="w-4 h-4 text-[#7C3AED]" />
            </button>
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
          <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-widest hidden sm:block">
            Scroll to Explore
          </span>
          <div className="w-8 h-8 rounded-full bg-white border border-purple-200 flex items-center justify-center shadow-sm hover:border-[#7C3AED]">
            <ChevronDown className="w-4 h-4 text-[#7C3AED] animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* 2. Company Story & Profile (White Section) */}
      <section className="py-14 sm:py-24 bg-white border-b border-purple-100 relative overflow-hidden text-[#111827]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-500/5 rounded-full blur-[180px] pointer-events-none" />

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
              className="lg:col-span-7 p-5 sm:p-10 rounded-2xl sm:rounded-3xl bg-white border border-purple-100 shadow-xl shadow-purple-900/5 flex flex-col justify-between"
            >
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <span className="text-[10px] sm:text-xs font-bold text-[#7C3AED] uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full border border-purple-200 inline-block mb-1">
                    Company Story
                  </span>
                </div>
                <h2 className="text-xl sm:text-4xl font-extrabold text-[#111827] tracking-tight leading-snug">
                  Software Engineering Excellence Built on Trust
                </h2>
                <p className="text-slate-600 leading-relaxed text-xs sm:text-base">
                  TOMTOP SOLUTIONS was founded by <strong className="text-[#111827] font-semibold">Anand Premkumar A</strong> to provide enterprise-grade web, mobile, and software solutions for growing businesses.
                </p>
                <p className="text-slate-600 leading-relaxed text-xs sm:text-base">
                  Over the past decade, we have helped over 120+ corporate clients streamline their operations, automate billing workflows, and achieve scale with high-speed cloud infrastructure.
                </p>
              </div>

              <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-purple-100">
                <div className="p-3.5 sm:p-4 bg-purple-50/70 rounded-xl sm:rounded-2xl border border-purple-100 flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-[#7C3AED] to-[#A855F7] text-white flex items-center justify-center font-bold shrink-0 shadow-md">
                    <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#111827] text-sm sm:text-base">{companyInfo.founder}</h4>
                    <p className="text-[11px] sm:text-xs text-[#7C3AED] font-semibold">{companyInfo.title} • {companyInfo.name}</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="hidden lg:flex lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white border border-purple-100 shadow-xl shadow-purple-900/5 flex-col justify-between relative overflow-hidden"
            >
              <div className="space-y-5">
                {/* Header */}
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 rounded-2xl bg-purple-50 flex items-center justify-center text-[#7C3AED] border border-purple-200 shrink-0 shadow-sm">
                    <Building2 className="w-5 h-5 text-[#7C3AED]" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-[#111827] leading-tight">Technical HQ</h3>
                    <p className="text-xs text-[#7C3AED] font-medium">Madurai, Tamil Nadu, India</p>
                  </div>
                </div>

                {/* Address */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed border-l-2 border-[#7C3AED] pl-3 py-1 bg-purple-50/50 rounded-r-xl">
                  {companyInfo.address}
                </p>

                {/* Operational Highlights Specs Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-2xl bg-purple-50/50 border border-purple-100">
                    <div className="flex items-center space-x-2 text-[#7C3AED] mb-1">
                      <Building2 className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Facility</span>
                    </div>
                    <p className="text-xs font-bold text-[#111827] truncate">Engineering Studio</p>
                  </div>

                  <div className="p-3 rounded-2xl bg-purple-50/50 border border-purple-100">
                    <div className="flex items-center space-x-2 text-[#7C3AED] mb-1">
                      <Server className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Servers</span>
                    </div>
                    <p className="text-xs font-bold text-[#111827] truncate">NVMe Cloud Hub</p>
                  </div>

                  <div className="p-3 rounded-2xl bg-purple-50/50 border border-purple-100">
                    <div className="flex items-center space-x-2 text-emerald-600 mb-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Hours</span>
                    </div>
                    <p className="text-xs font-bold text-[#111827] truncate">Mon - Sat (9am - 7pm)</p>
                  </div>

                  <div className="p-3 rounded-2xl bg-purple-50/50 border border-purple-100">
                    <div className="flex items-center space-x-2 text-amber-500 mb-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Support</span>
                    </div>
                    <p className="text-xs font-bold text-[#111827] truncate">24/7 SLA Monitoring</p>
                  </div>
                </div>

                {/* Interactive Live Map Preview Frame */}
                <div className="rounded-2xl border border-purple-200 overflow-hidden shadow-sm relative h-36 bg-purple-50">
                  <iframe
                    title="Technical HQ Location"
                    src="https://maps.google.com/maps?q=Madurai,TamilNadu,India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0 opacity-90 hover:opacity-100 transition-opacity"
                    allowFullScreen=""
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-purple-100 text-[10px] text-[#111827]">
                    <span className="flex items-center space-x-1.5 font-medium">
                      <MapPin className="w-3 h-3 text-[#7C3AED]" />
                      <span>Madurai Live Center</span>
                    </span>
                    <a
                      href="https://maps.google.com/?q=Madurai,TamilNadu,India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#7C3AED] hover:text-[#6D28D9] font-bold flex items-center space-x-1 transition-colors"
                    >
                      <Navigation className="w-3 h-3" />
                      <span>Directions</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact details */}
              <div className="space-y-2 border-t border-purple-100 pt-4 mt-4 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 flex items-center space-x-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#7C3AED]" />
                    <span>Phone:</span>
                  </span>
                  <a href={`tel:${companyInfo.phone}`} className="font-bold text-[#111827] hover:text-[#7C3AED] transition-colors">{companyInfo.phone}</a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 flex items-center space-x-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#7C3AED]" />
                    <span>Email:</span>
                  </span>
                  <a href={`mailto:${companyInfo.email}`} className="font-bold text-[#111827] hover:text-[#7C3AED] transition-colors truncate ml-2">{companyInfo.email}</a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 flex items-center space-x-1.5">
                    <Globe className="w-3.5 h-3.5 text-[#7C3AED]" />
                    <span>Website:</span>
                  </span>
                  <a href={`https://${companyInfo.website}`} target="_blank" rel="noopener noreferrer" className="font-bold text-[#111827] hover:text-[#7C3AED] transition-colors">{companyInfo.website}</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. Company Timeline Section (#FAF5FF Background) */}
      <section className="py-12 sm:py-24 bg-[#FAF5FF] border-b border-purple-100 relative overflow-hidden text-[#111827]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-purple-500/5 rounded-full blur-[200px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-20">
            <span className="text-[#7C3AED] font-bold text-[10px] sm:text-xs uppercase tracking-widest bg-purple-100 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full border border-purple-200 shadow-sm">
              EVOLUTION &amp; MILESTONES
            </span>
            <h2 className="text-2xl sm:text-5xl font-extrabold text-[#111827] mt-2.5 sm:mt-3 tracking-tight">
              Company Timeline
            </h2>
            <p className="mt-2 sm:mt-3 text-slate-600 text-xs sm:text-base">
              A decade of steady tech evolution, enterprise client trust, and engineering milestones.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Desktop Horizontal Connecting Line */}
            <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#C084FC] shadow-sm z-0" />

            {/* Mobile Vertical Track */}
            <div className="lg:hidden absolute left-5 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#7C3AED] via-[#A855F7] to-[#C084FC] z-0" />

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
                    {/* Stepper Node */}
                    <div className="absolute left-0 top-0 lg:static w-10 h-10 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-white border-2 border-[#7C3AED] text-[#7C3AED] flex items-center justify-center font-mono font-extrabold text-xs lg:text-sm shadow-md group-hover:scale-110 group-hover:bg-[#7C3AED] group-hover:text-white transition-all lg:mb-8 z-10 shrink-0">
                      0{idx + 1}
                    </div>

                    {/* Stepper White Glass Card */}
                    <div className="w-full p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-purple-100 backdrop-blur-2xl shadow-lg shadow-purple-900/5 flex flex-col justify-between group-hover:border-[#C084FC] transition-all h-full relative overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C084FC] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div>
                        <div className="flex items-center justify-between mb-2.5 sm:mb-4 gap-2">
                          <span className="text-xl sm:text-2xl font-black font-mono text-[#7C3AED]">
                            {event.year}
                          </span>
                          <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-widest text-[#7C3AED] bg-purple-50 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-purple-200 shrink-0">
                            {stepPills[idx]}
                          </span>
                        </div>

                        <h3 className="text-base sm:text-xl font-extrabold text-[#111827] group-hover:text-[#7C3AED] transition-colors mb-1.5 sm:mb-3">
                          {event.title}
                        </h3>

                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
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

      {/* 5. Why Choose Us (White Section inside WhyChooseUs) */}
      <WhyChooseUs />

    </div>
  );
}
