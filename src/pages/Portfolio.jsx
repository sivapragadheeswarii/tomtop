import React, { useState, useEffect, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';
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
    title: "AI-Powered Predictive Enterprise ERP",
    category: "AI & ERP",
    badge: "AI Enterprise Case Study",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tech: ["Python", "TensorFlow", "React JS", "Node.js", "MongoDB"],
    client: "Global Manufacturing Corp",
    overview: "Next-gen enterprise cloud ERP software equipped with AI demand forecasting engines, automated GST invoicing, and real-time inventory sync.",
    challenge: "Manual stock allocation errors, delayed billing cycles, and inaccurate monthly sales forecasting.",
    solution: "Architected a custom cloud ERP integrated with TensorFlow predictive analytics for smart inventory reordering and automated tax invoicing.",
    results: ["99.4% Forecast Accuracy", "65% Faster Billing Cycles", "Zero Multi-Facility Stockouts"]
  },
  {
    id: 2,
    title: "Industrial ERP & Billing Suite",
    category: "ERP Application",
    badge: "Industrial ERP Case Study",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    tech: ["React JS", "Express.js", "MongoDB", "Node.js"],
    client: "Apex Manufacturing",
    overview: "Comprehensive enterprise resource planning platform managing paperless billing workflows, supply chain inventory, and employee payroll.",
    challenge: "Manual paper invoices, disconnected warehouse data, and delayed monthly financial audit reporting.",
    solution: "Built a custom role-based cloud ERP system with real-time stock sync, automated GST billing, and audit logs.",
    results: ["60% Faster Billing Execution", "Zero Inventory Discrepancies", "Automated Tax & Audit Compliance"]
  },
  {
    id: 3,
    title: "AI Vision Quality Control Inspection",
    category: "AI Application",
    badge: "AI Vision Case Study",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    tech: ["Python", "OpenCV", "PyTorch", "FastAPI", "React JS"],
    client: "Precision Tech Industries",
    overview: "Automated computer vision AI software for real-time assembly line defect detection, automated product scanning, and yield analytics.",
    challenge: "High manual quality inspection bottleneck slowing factory output and human oversight errors in defect identification.",
    solution: "Deployed high-speed OpenCV and PyTorch deep learning models integrated with a real-time React analytics dashboard.",
    results: ["99.8% Defect Detection Rate", "4x Faster Inspection Speed", "85% Reduction in Quality Costs"]
  },
  {
    id: 4,
    title: "Multi-Tenant SaaS Inventory ERP System",
    category: "Custom Software",
    badge: "Custom SaaS Case Study",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    tech: ["Node.js", "MongoDB", "React JS", "Redis", "AWS"],
    client: "Vanguard Distributors",
    overview: "Real-time multi-tenant stock control ERP software with RFID barcode scanning support, automated low-stock triggers, and logistics sync.",
    challenge: "Stockouts across multi-location fulfillment centers and high carrying costs due to manual tracking errors.",
    solution: "Implemented a custom SaaS inventory ERP platform featuring automated reorder triggers and predictive stock analytics.",
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
    <section className="py-12 sm:py-24 bg-white border-b border-purple-100 relative overflow-hidden text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <span className="text-[#7C3AED] font-bold text-[10px] sm:text-xs uppercase tracking-widest bg-purple-100 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full border border-purple-200 shadow-sm inline-flex items-center gap-2 mb-3 sm:mb-4">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-500 animate-pulse" />
            Domain Experience
          </span>
          <h2 className="text-xl sm:text-5xl font-extrabold text-[#111827] tracking-tight mt-1">
            Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#C084FC]">Serve</span>
          </h2>
          <p className="mt-2 sm:mt-3 text-slate-600 text-xs sm:text-base">
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
                  className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl border backdrop-blur-xl shadow-lg shadow-purple-900/5 transition-all duration-500 cursor-pointer ${
                    isRevealed
                      ? 'border-[#7C3AED] shadow-xl bg-purple-50'
                      : 'border-purple-100 bg-[#FAF5FF] hover:shadow-xl hover:border-[#C084FC]'
                  }`}
                >
                  {/* Hover & Tap reveal background image */}
                  <div
                    className={`absolute inset-0 bg-cover bg-center transition-all duration-600 ${
                      isRevealed ? 'opacity-90 scale-105' : 'opacity-0 group-hover:opacity-90 group-hover:scale-105'
                    }`}
                    style={{ backgroundImage: `url(${ind.img})` }}
                  />

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t transition-all duration-500 ${
                      isRevealed
                        ? 'from-[#111827]/90 via-[#111827]/60 to-[#111827]/30'
                        : 'from-[#FAF5FF] via-[#FAF5FF]/80 to-[#FAF5FF]/40 group-hover:from-[#111827]/90 group-hover:via-[#111827]/60 group-hover:to-[#111827]/30'
                    }`}
                  />

                  {/* Top accent */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent transition-opacity duration-500 ${
                      isRevealed ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center justify-center text-center p-4 sm:p-7 h-full min-h-[200px] sm:min-h-[280px]">
                    {/* Icon circle */}
                    <div
                      className={`w-11 h-11 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#A855F7] border-2 border-white flex items-center justify-center mb-3 sm:mb-5 transition-all duration-400 shadow-md ${
                        isRevealed
                          ? 'scale-110 shadow-lg shadow-purple-600/40'
                          : 'group-hover:scale-110 group-hover:shadow-lg'
                      }`}
                    >
                      <IconComp className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                    </div>

                    <h3
                      className={`text-xs sm:text-base font-extrabold transition-colors duration-300 mb-1 sm:mb-2 ${
                        isRevealed ? 'text-white' : 'text-[#111827] group-hover:text-white'
                      }`}
                    >
                      {ind.name}
                    </h3>

                    <p
                      className={`text-[10px] sm:text-xs leading-relaxed transition-colors duration-300 max-w-[140px] sm:max-w-[170px] ${
                        isRevealed ? 'text-purple-200' : 'text-slate-600 group-hover:text-purple-200'
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
                  ? "w-6 sm:w-8 h-1.5 sm:h-2 bg-[#7C3AED] shadow-sm"
                  : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-purple-200 hover:bg-purple-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default function Portfolio() {
  const context = useOutletContext();
  const onOpenQuote = context?.onOpenQuote || (() => {});
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
    <div className="bg-[#FAF5FF] text-[#111827] min-h-screen">

      {/* 1. SECTION 1 — HEADER & INTRO (Matched 1-to-1 with Contact Page Hero Fade) */}
      <section className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-12 sm:pt-28 sm:pb-16 overflow-hidden border-b border-purple-100 bg-gradient-to-b from-[#F3E8FF] via-[#FAF5FF] to-[#FAF5FF]">
        {/* Background Image: Matched Home Page Opacity & Filter */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/portfolio_hero_bg.png"
            alt="Laptop with dashboard UI, ERP software, analytics, mobile app mockups, project showcase"
            className="w-full h-full object-cover object-center opacity-65 filter contrast-115 brightness-105 saturate-120 pointer-events-none transition-all duration-700"
          />
          {/* Soft Violet Overlay Matched to Home Page */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF5FF]/20 via-[#FAF5FF]/40 to-[#FAF5FF] z-10 pointer-events-none" />
        </div>

        {/* Soft Radial Spotlight Behind Hero Text (Matched to Home Page) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-3xl h-[420px] bg-white/75 blur-[75px] rounded-full pointer-events-none z-10 hidden sm:block" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center flex flex-col items-center justify-center my-auto w-full">


          {/* Large Bold Heading: Compact on mobile */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight sm:leading-[1.18] text-[#111827] max-w-3xl mx-auto drop-shadow-sm"
          >
            Software Solutions <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4C1D95] via-[#6D28D9] to-[#7C3AED]">Engineered For Impact & Scale</span>
          </motion.h1>

          {/* Short Subtitle Paragraph: Concise on mobile */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-3 sm:mt-6 text-[#374151] text-xs sm:text-xl max-w-xl sm:max-w-2xl mx-auto font-medium leading-relaxed"
          >
            <span className="sm:hidden">Featured portfolio of industrial ERPs, mobile apps, and web applications.</span>
            <span className="hidden sm:inline">Explore our featured portfolio of industrial ERPs, cross-platform mobile apps, and high-concurrency corporate web applications.</span>
          </motion.p>

          {/* CTA Buttons: Primary CTA on mobile, secondary CTA on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-5 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto"
          >
            <button
              onClick={() => onOpenQuote()}
              className="w-full sm:w-auto px-6 py-3 sm:px-7 sm:py-3.5 bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#C084FC] hover:from-[#6D28D9] hover:to-[#7C3AED] text-white font-bold rounded-2xl shadow-xl shadow-purple-950/30 flex items-center justify-center space-x-2 text-xs sm:text-sm group transition-all transform hover:-translate-y-0.5 active:scale-95 border border-purple-300/30"
            >
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>Request Case Study & Proposal</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })}
              className="hidden sm:flex w-full sm:w-auto px-7 py-3.5 bg-white/95 hover:bg-white text-[#111827] hover:text-[#7C3AED] border border-purple-200 font-semibold rounded-2xl transition-all text-center items-center justify-center space-x-2 text-sm shadow-md backdrop-blur-md active:scale-95"
            >
              <span>Explore Case Studies</span>
              <ChevronDown className="w-4 h-4 text-[#7C3AED]" />
            </button>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 z-10 cursor-pointer"
        >
          <span className="text-[9px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest hidden sm:block">
            Scroll to Explore Portfolio
          </span>
          <div className="w-8 h-8 rounded-full bg-white border border-purple-200 flex items-center justify-center shadow-sm hover:border-[#7C3AED]">
            <ChevronDown className="w-4 h-4 text-[#7C3AED] animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* 2. SECTION 2 — 4 LARGE FEATURED CASE STUDY CARDS (White Section) */}
      <section className="py-12 sm:py-20 lg:py-28 bg-white border-b border-purple-100 relative overflow-hidden text-[#111827]">
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
                className="bg-white rounded-2xl sm:rounded-[32px] border border-purple-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-xl shadow-purple-900/5 hover:border-[#C084FC] transition-all duration-500 group"
              >
                {/* Image Panel */}
                <div
                  className={`lg:col-span-6 relative overflow-hidden aspect-[16/9] lg:aspect-auto ${
                    isImageLeft ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-95 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />

                  <span className="absolute top-3.5 left-3.5 sm:top-6 sm:left-6 text-[10px] sm:text-xs font-bold px-2.5 py-1 sm:px-3.5 sm:py-1.5 bg-white/90 backdrop-blur-md text-[#7C3AED] rounded-full border border-purple-200 uppercase tracking-widest shadow-md">
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
                      <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest font-mono">
                        Client: {study.client}
                      </span>
                      <span className="text-[10px] sm:text-xs font-bold text-[#7C3AED] px-2.5 py-0.5 sm:px-3 sm:py-1 bg-purple-50 rounded-full border border-purple-200">
                        {study.category}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-3xl font-extrabold text-[#111827] tracking-tight leading-snug group-hover:text-[#7C3AED] transition-colors">
                      {study.title}
                    </h2>

                    <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
                      {study.overview}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                      {study.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 bg-purple-50 text-[#7C3AED] rounded-lg border border-purple-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Challenge & Solution Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-purple-100 text-xs">
                      <div className="space-y-1 p-3 sm:p-3.5 rounded-xl bg-purple-50/50 border border-purple-100">
                        <span className="font-bold text-amber-600 uppercase tracking-wider block text-[10px] sm:text-xs">
                          The Challenge
                        </span>
                        <p className="text-slate-600 text-xs leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      <div className="space-y-1 p-3 sm:p-3.5 rounded-xl bg-purple-50/50 border border-purple-100">
                        <span className="font-bold text-emerald-600 uppercase tracking-wider block text-[10px] sm:text-xs">
                          Our Solution
                        </span>
                        <p className="text-slate-600 text-xs leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Key Results */}
                  <div className="space-y-2 pt-1 sm:pt-2">
                    <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider block">
                      Key Results Delivered
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 sm:gap-2">
                      {study.results.map((res, idx) => (
                        <div key={idx} className="flex items-center space-x-1.5 text-[10px] sm:text-xs font-bold text-emerald-700 p-2 rounded-lg bg-emerald-50 border border-emerald-200">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
                          <span className="truncate">{res}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* View Case Study Button */}
                  <div className="pt-3 sm:pt-4 border-t border-purple-100">
                    <button
                      onClick={() => onOpenQuote(study.title)}
                      className="w-full sm:w-auto px-5 py-3 sm:px-7 sm:py-3.5 bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#C084FC] hover:from-[#6D28D9] hover:to-[#7C3AED] text-white font-bold rounded-xl sm:rounded-2xl shadow-lg shadow-purple-600/30 flex items-center justify-center space-x-2 text-xs sm:text-sm group/btn transition-all transform hover:-translate-y-0.5 active:scale-95"
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

      {/* 3. SECTION 3 — RECENT PROJECTS (Soft Violet Background) */}
      <section className="py-12 sm:py-24 bg-[#FAF5FF] border-b border-purple-100 relative overflow-hidden text-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
            <span className="text-[#7C3AED] font-bold text-[10px] sm:text-xs uppercase tracking-widest bg-purple-100 px-3.5 py-1 rounded-full border border-purple-200 shadow-sm">
              Recent Engineering Works
            </span>
            <h2 className="text-xl sm:text-5xl font-extrabold text-[#111827] mt-2.5 sm:mt-3">
              Recent Projects
            </h2>
            <p className="mt-2 sm:mt-3 text-slate-600 text-xs sm:text-base">
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
                  whileHover={{ y: -6 }}
                  onClick={() => setSelectedProject(project)}
                  className={`${spanClass} bg-white rounded-2xl sm:rounded-[28px] border border-purple-100 overflow-hidden group hover:border-[#C084FC] hover:shadow-xl shadow-lg shadow-purple-900/5 transition-all duration-300 cursor-pointer flex flex-col justify-between`}
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-purple-50">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />

                    <span className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 text-[9px] sm:text-[10px] font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 bg-white/90 backdrop-blur-md text-[#7C3AED] rounded-full border border-purple-200 uppercase tracking-widest shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  <div className="p-5 sm:p-8 space-y-2.5 sm:space-y-3">
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#111827] group-hover:text-[#7C3AED] transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="text-[9px] sm:text-[10px] font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 bg-purple-50 text-[#7C3AED] rounded-md border border-purple-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="px-5 py-3 sm:px-6 sm:py-4 border-t border-purple-100 flex items-center justify-between bg-purple-50/50">
                    <span className="text-[10px] sm:text-xs font-semibold text-slate-500">Client: {project.client}</span>
                    <button className="text-[10px] sm:text-xs font-bold text-[#7C3AED] group-hover:text-[#6D28D9] flex items-center space-x-1 transition-colors">
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

      {/* 4. SECTION 4 — INDUSTRIES WE SERVE (AUTO-SLIDE CAROUSEL) */}
      <IndustriesCarousel />

      {/* 5. SECTION 6 — CLIENT SUCCESS STORIES & PROJECT OUTCOMES (Soft Violet Background) */}
      <section className="py-12 sm:py-24 bg-[#FAF5FF] border-b border-purple-100 relative overflow-hidden text-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
            <span className="text-[#7C3AED] font-bold text-[10px] sm:text-xs uppercase tracking-widest bg-purple-100 px-3.5 py-1 rounded-full border border-purple-200 shadow-sm">
              Proven ROI & Impact
            </span>
            <h2 className="text-xl sm:text-5xl font-extrabold text-[#111827] mt-2.5 sm:mt-3">
              Client Success Stories & Outcomes
            </h2>
            <p className="mt-2 sm:mt-3 text-slate-600 text-xs sm:text-base">
              Real metrics and executive testimonials from businesses transformed by TOMTOP software.
            </p>
          </div>

          {/* Project Outcomes Stats Grid */}
          <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-16">
            {SUCCESS_METRICS.map((met, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-purple-100 backdrop-blur-2xl text-center shadow-lg shadow-purple-900/5"
              >
                <span className="text-2xl sm:text-4xl font-extrabold text-[#7C3AED] font-mono block mb-1">
                  {met.value}
                </span>
                <h4 className="text-xs sm:text-base font-extrabold text-[#111827] mb-1 sm:mb-2">{met.label}</h4>
                <p className="text-slate-600 text-[10px] sm:text-xs leading-relaxed">{met.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
            {CLIENT_TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-purple-100 backdrop-blur-2xl flex flex-col justify-between group hover:border-[#C084FC] transition-all shadow-lg shadow-purple-900/5 relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#7C3AED] opacity-80" />
                    <span className="text-[10px] sm:text-xs font-bold text-emerald-700 px-2.5 py-0.5 sm:px-3 sm:py-1 bg-emerald-50 rounded-full border border-emerald-200">
                      {t.metric}
                    </span>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-3.5 sm:pt-4 border-t border-purple-100 flex items-center justify-between">
                  <div>
                    <h5 className="font-extrabold text-[#111827] text-xs sm:text-sm">{t.clientName}</h5>
                    <p className="text-[10px] sm:text-xs text-[#7C3AED] font-medium">{t.role} • {t.company}</p>
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
