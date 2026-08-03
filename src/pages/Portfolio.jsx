import React, { useState, useEffect, useRef } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles, ArrowRight, ArrowUpRight, CheckCircle2, ChevronDown,
  Building2, GraduationCap, ShoppingBag, Factory,
  Landmark, Hotel, Home, Truck, ShieldAlert, Cpu,
  Quote, TrendingUp, Award, Star
} from 'lucide-react';
import { portfolioProjects } from '../data/companyData';
import ProjectModal from '../components/ProjectModal';

// 4 Featured Case Studies with full enterprise details
const FEATURED_CASE_STUDIES = [
  {
    id: 1,
    title: "Enterprise Corporate Web Portal",
    category: "Corporate",
    badge: "Enterprise Case Study",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    tech: ["React JS", "Tailwind CSS", "Node.js", "AWS"],
    client: "Global Logistics Ltd",
    overview: "A luxury corporate web application built with interactive service showcases, automated quote calculators, and multi-language support.",
    challenge: "Legacy slow monolithic site with fragmented manual lead collection and slow mobile performance.",
    solution: "Architected a cloud-native React JS application with Node.js microservices, edge caching, and automated lead routing.",
    results: ["+45% Conversion Rate Increase", "99.9% Infrastructure Uptime SLA", "1.2s Global Page Load Speed"]
  },
  {
    id: 2,
    title: "Industrial ERP & Billing Suite",
    category: "Manufacturing",
    badge: "Industrial Case Study",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tech: ["React JS", "Express.js", "MongoDB", "Node.js"],
    client: "Apex Manufacturing",
    overview: "Comprehensive enterprise resource planning platform managing automated billing, supply chain inventory, and employee payroll.",
    challenge: "Manual paper invoices, disconnected warehouse data, and delayed monthly financial audit reporting.",
    solution: "Built a custom role-based cloud ERP system with real-time stock sync, automated GST billing, and audit logs.",
    results: ["60% Faster Billing Execution", "Zero Inventory Discrepancies", "Automated Tax & Audit Compliance"]
  },
  {
    id: 3,
    title: "Cross-Platform Delivery Mobile App",
    category: "Logistics",
    badge: "Mobile Case Study",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    tech: ["Flutter", "Firebase", "Node.js", "Google Maps API"],
    client: "Swift Express",
    overview: "Real-time delivery tracking application for iOS and Android with live GPS navigation, push alerts, and digital signature capture.",
    challenge: "Lack of driver tracking visibility, manual dispatch paperwork, and high customer status inquiry calls.",
    solution: "Engineered a Flutter cross-platform mobile app connected to Firebase live sockets and offline digital signature sync.",
    results: ["35% Reduction in Transit Delays", "100% Digital Proof of Delivery", "80% Fewer Support Status Calls"]
  },
  {
    id: 4,
    title: "Multi-Warehouse Inventory System",
    category: "Retail & Distribution",
    badge: "SaaS Case Study",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    tech: ["Node.js", "MongoDB", "React JS", "Tailwind CSS"],
    client: "Vanguard Distributors",
    overview: "Real-time stock control software with barcode scanning support, low-stock automated alerts, and multi-location syncing.",
    challenge: "Stockouts across multi-location fulfillment centers and high carrying costs due to manual tracking errors.",
    solution: "Implemented a multi-tenant inventory control platform featuring automated reorder triggers and predictive stock analytics.",
    results: ["$120,000 Saved in Holding Costs", "99.8% Inventory Tracking Accuracy", "Instant Multi-Location Sync"]
  }
];

// Industries We Serve
const INDUSTRIES = [
  { name: "Healthcare", icon: Building2, desc: "HIPAA-compliant EHR & hospital software" },
  { name: "Education", icon: GraduationCap, desc: "School & college campus portals" },
  { name: "Retail", icon: ShoppingBag, desc: "Omnichannel e-commerce & POS systems" },
  { name: "Manufacturing", icon: Factory, desc: "Industrial ERP & supply chain automation" },
  { name: "Finance", icon: Landmark, desc: "Secure billing, CRM & payment engines" },
  { name: "Hospitality", icon: Hotel, desc: "Hotel booking & property management" },
  { name: "Real Estate", icon: Home, desc: "Property listing & client management" },
  { name: "Logistics", icon: Truck, desc: "Fleet tracking & delivery mobile apps" },
  { name: "Government", icon: ShieldAlert, desc: "Secure institutional web portals" },
  { name: "Corporate", icon: Cpu, desc: "Enterprise intranet & workflow apps" }
];

// Tech Stack Cards
const TECH_STACK = [
  { name: "React JS", type: "Frontend Framework", icon: "⚛️" },
  { name: "Node JS", type: "Backend Runtime", icon: "🟢" },
  { name: "MongoDB", type: "Database Engine", icon: "🍃" },
  { name: "Express", type: "API Architecture", icon: "🚀" },
  { name: "Flutter", type: "Mobile Apps", icon: "📱" },
  { name: "AWS", type: "Cloud Infrastructure", icon: "☁️" },
  { name: "Firebase", type: "Real-Time Sockets", icon: "🔥" },
  { name: "Tailwind CSS", type: "UI Design System", icon: "🎨" }
];

// Client Success Stories & Testimonials (PAGE-SPECIFIC)
const CLIENT_TESTIMONIALS = [
  {
    quote: "TOMTOP SOLUTIONS built our industrial ERP system from scratch. Their cloud architecture cut our monthly billing overhead by 60% and unified our 4 regional warehouses.",
    clientName: "R. Balakrishnan",
    role: "Managing Director",
    company: "Apex Manufacturing Ltd",
    metric: "60% Billing Speedup"
  },
  {
    quote: "Our cross-platform delivery app engineered by TOMTOP operates smoothly across thousands of daily dispatches. Zero downtime and real-time tracking accuracy.",
    clientName: "S. Priya Nair",
    role: "Head of Operations",
    company: "Swift Express Logistics",
    metric: "35% Delay Reduction"
  },
  {
    quote: "The corporate portal delivered by Anand and his team exceeded our expectations. Lead conversions jumped +45% in the first quarter alone.",
    clientName: "M. Karthik",
    role: "VP of Digital Strategy",
    company: "Global Logistics Group",
    metric: "+45% Conversion Lift"
  }
];

const SUCCESS_METRICS = [
  { value: "$120K+", label: "Holding Costs Saved", desc: "Real-time automated multi-warehouse reordering." },
  { value: "99.9%", label: "Cloud SLA Uptime", desc: "High-performance NVMe cloud hosting architecture." },
  { value: "60%", label: "Faster Billing", desc: "Automated GST invoicing & paperless workflow." },
  { value: "120+", label: "Corporate Deployments", desc: "Custom software delivered across 10 industries." }
];

const INDUSTRY_CARDS = [
  { ...(() => { const i = INDUSTRIES[0]; return i; })(), img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80" },
  { ...(() => { const i = INDUSTRIES[1]; return i; })(), img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80" },
  { ...(() => { const i = INDUSTRIES[2]; return i; })(), img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80" },
  { ...(() => { const i = INDUSTRIES[3]; return i; })(), img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" },
  { ...(() => { const i = INDUSTRIES[4]; return i; })(), img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80" },
  { ...(() => { const i = INDUSTRIES[5]; return i; })(), img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80" },
  { ...(() => { const i = INDUSTRIES[6]; return i; })(), img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80" },
  { ...(() => { const i = INDUSTRIES[7]; return i; })(), img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80" },
  { ...(() => { const i = INDUSTRIES[8]; return i; })(), img: "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?auto=format&fit=crop&w=600&q=80" },
  { ...(() => { const i = INDUSTRIES[9]; return i; })(), img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" },
];

function IndustriesCarousel() {
  const VISIBLE = 4;
  const TOTAL = INDUSTRY_CARDS.length;
  const [activeIdx, setActiveIdx] = useState(0);
  const [activeCardIdx, setActiveCardIdx] = useState(null);
  const timerRef = useRef(null);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIdx(prev => (prev + VISIBLE) >= TOTAL ? 0 : prev + 1);
      setActiveCardIdx(null);
    }, 3000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const visibleCards = Array.from({ length: VISIBLE }, (_, i) =>
    INDUSTRY_CARDS[(activeIdx + i) % TOTAL]
  );

  const totalDots = TOTAL;

  return (
    <section className="py-12 sm:py-24 bg-gradient-to-b from-[#070A11] via-[#0B162C] to-[#070A11] border-b border-white/10 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-blue-600/10 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf806_1px,transparent_1px),linear-gradient(to_bottom,#38bdf806_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <span className="text-[#38BDF8] font-bold text-[10px] sm:text-xs uppercase tracking-widest bg-blue-950/80 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full border border-blue-500/30 shadow-lg inline-flex items-center gap-2 mb-3 sm:mb-4">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300 animate-pulse" />
            Domain Experience
          </span>
          <h2 className="text-xl sm:text-5xl font-extrabold text-white tracking-tight mt-1">
            Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-cyan-200">Serve</span>
          </h2>
          <p className="mt-2 sm:mt-3 text-slate-400 text-xs sm:text-base">
            Precision-engineered software for 10 specialized enterprise verticals.
          </p>
        </div>

        {/* 4-card single row with slide transition */}
        <div className="relative overflow-hidden">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5"
          >
            {visibleCards.map((ind, i) => {
              const IconComp = ind.icon;
              const isRevealed = activeCardIdx === i;

              return (
                <div
                  key={`${activeIdx}-${i}`}
                  onClick={() => setActiveCardIdx(isRevealed ? null : i)}
                  className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl border backdrop-blur-xl shadow-xl transition-all duration-500 cursor-pointer ${
                    isRevealed
                      ? 'border-[#38BDF8] shadow-[0_20px_60px_rgba(56,189,248,0.25)] bg-[#0B1A38]'
                      : 'border-white/15 bg-[#0B1A38]/90 hover:shadow-[0_20px_60px_rgba(56,189,248,0.25)] hover:border-[#38BDF8]/60'
                  }`}
                >
                  {/* Hover & Tap reveal background image */}
                  <div
                    className={`absolute inset-0 bg-cover bg-center transition-all duration-600 ${
                      isRevealed ? 'opacity-100 scale-105' : 'opacity-0 group-hover:opacity-100 group-hover:scale-105'
                    }`}
                    style={{ backgroundImage: `url(${ind.img})` }}
                  />

                  {/* Dark overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t transition-all duration-500 ${
                      isRevealed
                        ? 'from-[#070A11]/90 via-[#0B1A38]/60 to-[#0B1A38]/30'
                        : 'from-[#070A11]/95 via-[#070A11]/65 to-[#0B1A38]/40 group-hover:from-[#070A11]/85 group-hover:via-[#0B1A38]/50 group-hover:to-[#0B1A38]/20'
                    }`}
                  />

                  {/* Top cyan accent */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#38BDF8]/70 to-transparent transition-opacity duration-500 ${
                      isRevealed ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center justify-center text-center p-4 sm:p-7 h-full min-h-[200px] sm:min-h-[280px]">
                    {/* Icon circle */}
                    <div
                      className={`w-11 h-11 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#1D4ED8] to-[#2563EB] border-2 border-[#38BDF8]/40 flex items-center justify-center mb-3 sm:mb-5 transition-all duration-400 ${
                        isRevealed
                          ? 'scale-110 shadow-[0_0_40px_rgba(56,189,248,0.6)]'
                          : 'shadow-[0_0_25px_rgba(56,189,248,0.4)] group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(56,189,248,0.6)]'
                      }`}
                    >
                      <IconComp className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                    </div>

                    <h3
                      className={`text-xs sm:text-base font-extrabold transition-colors duration-300 mb-1 sm:mb-2 ${
                        isRevealed ? 'text-[#38BDF8]' : 'text-white group-hover:text-[#38BDF8]'
                      }`}
                    >
                      {ind.name}
                    </h3>

                    <p
                      className={`text-[10px] sm:text-xs leading-relaxed transition-colors duration-300 max-w-[140px] sm:max-w-[170px] ${
                        isRevealed ? 'text-slate-200' : 'text-slate-400 group-hover:text-slate-200'
                      }`}
                    >
                      {ind.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-10">
          {Array.from({ length: totalDots }).map((_, i) => (
            <button
              key={i}
              onClick={() => { setActiveIdx(i); startTimer(); }}
              className={`transition-all duration-300 rounded-full ${
                i === activeIdx
                  ? "w-6 sm:w-8 h-1.5 sm:h-2 bg-[#38BDF8] shadow-[0_0_8px_rgba(56,189,248,0.7)]"
                  : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default function Portfolio() {
  const { onOpenQuote } = useOutletContext();
  const [selectedProject, setSelectedProject] = useState(null);

  const recentProjects = portfolioProjects.slice(4, 10);
  const bentoSpans = [
    "lg:col-span-8 lg:row-span-1",
    "lg:col-span-4 lg:row-span-1",
    "lg:col-span-4 lg:row-span-1",
    "lg:col-span-8 lg:row-span-1",
    "lg:col-span-4 lg:row-span-1",
    "lg:col-span-8 lg:row-span-1"
  ];

  return (
    <div className="bg-[#070A11] text-white min-h-screen">

      {/* ─────────────────────────────────────────────────────
          SECTION 1 — HEADER & INTRO (Full-Screen Viewport Hero Banner)
      ───────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-16 overflow-hidden border-b border-white/10 bg-[#070A11]">
        {/* Generated High-Contrast Software Portfolio Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/portfolio_hero_bg.png"
            alt="Enterprise Software Portfolio"
            className="w-full h-full object-cover object-center opacity-75 filter contrast-125 brightness-110 saturate-125"
          />
          {/* Smooth Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070A11]/80 via-[#0B1528]/50 to-[#070A11]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_65%_at_50%_45%,rgba(147,51,234,0.25),transparent)]" />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] bg-blue-600/15 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center justify-center my-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 bg-blue-950/80 border border-blue-500/30 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold text-[#38BDF8] mb-4 sm:mb-6 shadow-xl backdrop-blur-md"
          >
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300 animate-pulse" />
            <span className="uppercase tracking-widest">Enterprise Software Showcase</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-7xl font-extrabold tracking-tight leading-snug sm:leading-[1.1] text-white max-w-4xl mx-auto"
          >
            Our Featured Work
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-3 sm:mt-5 text-slate-200/90 text-xs sm:text-xl max-w-2xl mx-auto font-normal leading-relaxed"
          >
            Real digital solutions built for businesses across multiple industries.
          </motion.p>
        </div>

        {/* Animated Clickable Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 z-10 cursor-pointer"
        >
          <span className="text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest hidden sm:block">
            Scroll to Explore Portfolio
          </span>
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center hover:border-[#38BDF8]">
            <ChevronDown className="w-4 h-4 text-[#38BDF8] animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* ─────────────────────────────────────────────────────
          SECTION 2 — 4 LARGE FEATURED CASE STUDY CARDS (ALTERNATING)
      ───────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-20 lg:py-28 bg-gradient-to-b from-[#070A11] via-[#0B162C] to-[#070A11] border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-blue-600/10 rounded-full blur-[200px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf806_1px,transparent_1px),linear-gradient(to_bottom,#38bdf806_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-20 relative z-10">
          
          {FEATURED_CASE_STUDIES.map((study, index) => {
            const isImageLeft = index % 2 === 0;

            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#0B1F4D]/60 rounded-2xl sm:rounded-[32px] border border-white/15 backdrop-blur-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-2xl hover:border-[#38BDF8] transition-all duration-500 group"
              >
                {/* Image Panel (16:9 Aspect) */}
                <div
                  className={`lg:col-span-6 relative overflow-hidden aspect-[16/9] lg:aspect-auto ${
                    isImageLeft ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070A11] via-transparent to-transparent opacity-60" />

                  <span className="absolute top-3.5 left-3.5 sm:top-6 sm:left-6 text-[10px] sm:text-xs font-bold px-2.5 py-1 sm:px-3.5 sm:py-1.5 bg-[#070A11]/90 backdrop-blur-md text-[#38BDF8] rounded-full border border-white/15 uppercase tracking-widest shadow-lg">
                    {study.badge}
                  </span>
                </div>

                {/* Content Panel */}
                <div
                  className={`lg:col-span-6 p-5 sm:p-12 flex flex-col justify-between space-y-4 sm:space-y-6 ${
                    isImageLeft ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">
                        Client: {study.client}
                      </span>
                      <span className="text-[10px] sm:text-xs font-bold text-[#38BDF8] px-2.5 py-0.5 sm:px-3 sm:py-1 bg-blue-500/20 rounded-full border border-blue-500/30">
                        {study.category}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug group-hover:text-[#38BDF8] transition-colors">
                      {study.title}
                    </h2>

                    <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
                      {study.overview}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                      {study.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 bg-white/10 text-slate-200 rounded-lg border border-white/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Challenge & Solution Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-white/10 text-xs">
                      <div className="space-y-1 p-3 sm:p-3.5 rounded-xl bg-white/5 border border-white/10">
                        <span className="font-bold text-amber-300 uppercase tracking-wider block text-[10px] sm:text-xs">
                          The Challenge
                        </span>
                        <p className="text-slate-300 text-xs leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      <div className="space-y-1 p-3 sm:p-3.5 rounded-xl bg-white/5 border border-white/10">
                        <span className="font-bold text-emerald-400 uppercase tracking-wider block text-[10px] sm:text-xs">
                          Our Solution
                        </span>
                        <p className="text-slate-300 text-xs leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Key Results */}
                  <div className="space-y-2 pt-1 sm:pt-2">
                    <span className="text-[10px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      Key Results Delivered
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 sm:gap-2">
                      {study.results.map((res, idx) => (
                        <div key={idx} className="flex items-center space-x-1.5 text-[10px] sm:text-xs font-bold text-emerald-300 p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
                          <span className="truncate">{res}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* View Case Study Button */}
                  <div className="pt-3 sm:pt-4 border-t border-white/10">
                    <button
                      onClick={() => onOpenQuote(study.title)}
                      className="w-full sm:w-auto px-5 py-3 sm:px-7 sm:py-3.5 bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#06B6D4] hover:from-[#2563EB] hover:to-[#38BDF8] text-white font-bold rounded-xl sm:rounded-2xl shadow-xl flex items-center justify-center space-x-2 text-xs sm:text-sm group/btn transition-all transform hover:-translate-y-0.5 active:scale-95"
                    >
                      <span>Request Case Study & Proposal</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────
          SECTION 3 — RECENT PROJECTS (BENTO GRID LAYOUT)
      ───────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-24 bg-gradient-to-b from-[#070A11] via-[#0B162C] to-[#070A11] border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-blue-600/10 rounded-full blur-[200px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf806_1px,transparent_1px),linear-gradient(to_bottom,#38bdf806_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
            <span className="text-[#38BDF8] font-bold text-[10px] sm:text-xs uppercase tracking-widest bg-blue-950 px-3.5 py-1 rounded-full border border-blue-500/30">
              Recent Engineering Works
            </span>
            <h2 className="text-xl sm:text-5xl font-extrabold text-white mt-2.5 sm:mt-3">
              Recent Projects
            </h2>
            <p className="mt-2 sm:mt-3 text-slate-400 text-xs sm:text-base">
              Explore our recent software, web, and mobile app deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8">
            {recentProjects.map((project, index) => {
              const spanClass = bentoSpans[index % bentoSpans.length];

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedProject(project)}
                  className={`${spanClass} bg-[#0B1F4D]/70 rounded-2xl sm:rounded-[28px] border border-white/15 backdrop-blur-2xl overflow-hidden group hover:border-[#38BDF8] hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-xl`}
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070A11] via-[#070A11]/40 to-transparent opacity-85 group-hover:opacity-60 transition-opacity" />

                    <span className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 text-[9px] sm:text-[10px] font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 bg-[#070A11]/90 backdrop-blur-md text-[#38BDF8] rounded-full border border-white/15 uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>

                  <div className="p-5 sm:p-8 space-y-2.5 sm:space-y-3">
                    <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-[#38BDF8] transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="text-[9px] sm:text-[10px] font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 bg-white/10 text-slate-200 rounded-md border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="px-5 py-3 sm:px-6 sm:py-4 border-t border-white/10 flex items-center justify-between bg-white/[0.02]">
                    <span className="text-[10px] sm:text-xs font-semibold text-slate-400">Client: {project.client}</span>
                    <button className="text-[10px] sm:text-xs font-bold text-[#38BDF8] group-hover:text-white flex items-center space-x-1 transition-colors">
                      <span>View Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────
          SECTION 4 — INDUSTRIES WE SERVE (AUTO-SLIDE CAROUSEL)
      ───────────────────────────────────────────────────── */}
      <IndustriesCarousel />



      {/* ─────────────────────────────────────────────────────
          SECTION 6 — CLIENT SUCCESS STORIES & PROJECT OUTCOMES (PAGE ENDING)
      ───────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-24 bg-gradient-to-b from-[#070A11] via-[#0B162C] to-[#070A11] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-blue-600/10 rounded-full blur-[200px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf806_1px,transparent_1px),linear-gradient(to_bottom,#38bdf806_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
            <span className="text-[#38BDF8] font-bold text-[10px] sm:text-xs uppercase tracking-widest bg-blue-950 px-3.5 py-1 rounded-full border border-blue-500/30">
              Proven ROI & Impact
            </span>
            <h2 className="text-xl sm:text-5xl font-extrabold text-white mt-2.5 sm:mt-3">
              Client Success Stories & Outcomes
            </h2>
            <p className="mt-2 sm:mt-3 text-slate-400 text-xs sm:text-base">
              Real metrics and executive testimonials from businesses transformed by TOMTOP software.
            </p>
          </div>

          {/* Project Outcomes Stats Grid */}
          <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-16">
            {SUCCESS_METRICS.map((met, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#0B1F4D]/60 border border-white/15 backdrop-blur-2xl text-center shadow-xl"
              >
                <span className="text-2xl sm:text-4xl font-extrabold text-[#38BDF8] font-mono block mb-1">
                  {met.value}
                </span>
                <h4 className="text-xs sm:text-base font-extrabold text-white mb-1 sm:mb-2">{met.label}</h4>
                <p className="text-slate-400 text-[10px] sm:text-xs leading-relaxed">{met.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
            {CLIENT_TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0B1F4D]/80 border border-white/15 backdrop-blur-2xl flex flex-col justify-between group hover:border-[#38BDF8] transition-all shadow-xl relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#38BDF8] opacity-60" />
                    <span className="text-[10px] sm:text-xs font-bold text-emerald-400 px-2.5 py-0.5 sm:px-3 sm:py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                      {t.metric}
                    </span>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-3.5 sm:pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h5 className="font-extrabold text-white text-xs sm:text-sm">{t.clientName}</h5>
                    <p className="text-[10px] sm:text-xs text-[#38BDF8] font-medium">{t.role} • {t.company}</p>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal Support */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenQuote={onOpenQuote}
      />

    </div>
  );
}
