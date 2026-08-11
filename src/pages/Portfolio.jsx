import React, { useState, useEffect, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles, ArrowRight, ArrowUpRight, CheckCircle2, ChevronDown,
  Building2, GraduationCap, ShoppingBag, Factory, Briefcase,
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
    title: "Omnichannel E-Commerce & Retail POS",
    category: "Web & POS Portal",
    badge: "Retail Tech Case Study",
    image: "https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&w=1200&q=80",
    tech: ["React JS", "Tailwind CSS", "Node.js", "MongoDB"],
    client: "Vogue Retail Chains",
    overview: "Scalable e-commerce web portal integrated with barcode POS terminal sync across 14 retail branches.",
    challenge: "Stock mismatch between online e-commerce shop and physical retail store outlets during flash sales.",
    solution: "Developed unified web store linked via WebSocket real-time API to point-of-sale inventory servers.",
    results: ["300% Online Revenue Surge", "Real-Time Stock Accuracy", "Sub-100ms Page Load SLAs"]
  },
  {
    id: 4,
    title: "Campus Management & Student Portal",
    category: "EdTech System",
    badge: "EdTech Case Study",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    tech: ["React JS", "Express.js", "MySQL", "AWS S3"],
    client: "St. Joseph Educational Group",
    overview: "Integrated school management system handling student admissions, online fee collection, attendance tracking, and parent mobile portals.",
    challenge: "Paper-based fee receipts, long admission queues, and inefficient parent notification system.",
    solution: "Created an all-in-one institutional web portal with integrated payment gateway and instant SMS alerts.",
    results: ["10,000+ Active Student Accounts", "98% Online Fee Collection Rate", "Zero Administrative Backlog"]
  }
];

// Industries We Serve
const INDUSTRIES = [
  { name: "Textile & Manufacturing", icon: Factory, desc: "Specialized inventory tracking, loom allocation, yarn batch control, and factory ERP solutions." },
  { name: "Educational Institutions", icon: GraduationCap, desc: "Comprehensive school and campus management portals, student record systems, and billing engines." },
  { name: "Cooperative Societies", icon: Building2, desc: "Secure financial audit systems, member registries, ledger management, and automated invoicing." },
  { name: "Small & Medium Enterprises (SMEs)", icon: TrendingUp, desc: "Agile, cost-effective digital portals, custom CRM workflows, and operational automation software." },
  { name: "Retail & Trading", icon: ShoppingBag, desc: "High-speed billing systems, barcode POS inventory, multi-location stock sync, and web portals." },
  { name: "Service Organizations", icon: Briefcase, desc: "Client portal platforms, resource scheduling tools, project governance engines, and SLA dashboards." }
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
    quote: "The corporate portal delivered by TOMTOP SOLUTIONS exceeded our expectations. Lead conversions jumped +45% in the first quarter alone.",
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
  { value: "120+", label: "Corporate Deployments", desc: "Custom software delivered across 6 industries." }
];

const INDUSTRY_CARDS = [
  { ...INDUSTRIES[0], img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" },
  { ...INDUSTRIES[1], img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80" },
  { ...INDUSTRIES[2], img: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=800&q=80" },
  { ...INDUSTRIES[3], img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" },
  { ...INDUSTRIES[4], img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80" },
  { ...INDUSTRIES[5], img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" }
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
      setActiveIdx(prev => (prev + 1) % TOTAL);
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
    <section className="py-12 sm:py-24 bg-white border-b border-blue-100 relative overflow-hidden text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <h2 className="text-xl sm:text-5xl font-extrabold text-[#111827] tracking-tight mt-1">
            Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#60A5FA]">Serve</span>
          </h2>
          <p className="mt-2 sm:mt-3 text-slate-600 text-xs sm:text-base">
            Precision-engineered software for 6 specialized enterprise verticals.
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
                  className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl border backdrop-blur-xl shadow-lg shadow-blue-900/5 transition-all duration-500 cursor-pointer ${
                    isRevealed
                      ? 'border-[#2563EB] shadow-xl bg-blue-50'
                      : 'border-blue-100 bg-[#F0F7FF] hover:shadow-xl hover:border-[#60A5FA]'
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
                        : 'from-[#F0F7FF] via-[#F0F7FF]/80 to-[#F0F7FF]/40 group-hover:from-[#111827]/90 group-hover:via-[#111827]/60 group-hover:to-[#111827]/30'
                    }`}
                  />

                  {/* Top accent */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#2563EB] to-transparent transition-opacity duration-500 ${
                      isRevealed ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center justify-center text-center p-4 sm:p-7 h-full min-h-[200px] sm:min-h-[280px]">
                    {/* Icon circle */}
                    <div
                      className={`w-11 h-11 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#2563EB] to-[#3B82F6] border-2 border-white flex items-center justify-center mb-3 sm:mb-5 transition-all duration-400 shadow-md ${
                        isRevealed
                          ? 'scale-110 shadow-lg shadow-blue-600/40'
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
                        isRevealed ? 'text-blue-200' : 'text-slate-600 group-hover:text-blue-200'
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
                  ? "w-6 sm:w-8 h-1.5 sm:h-2 bg-[#2563EB] shadow-sm"
                  : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-200 hover:bg-blue-300"
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
  const [dynamicProjects, setDynamicProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const port = localStorage.getItem('tomtop_api_port') || '5001';
        const res = await fetch(`http://localhost:${port}/api/projects`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            const formatted = data.map((p, idx) => ({
              id: p._id || `db-${idx}`,
              title: p.title,
              category: p.category || 'Software Solution',
              badge: 'Admin Featured Case Study',
              image: p.image && p.image.trim() !== '' ? p.image : null,
              tech: ['React JS', 'Node.js', 'MongoDB', 'Cloud ERP'],
              client: p.client || 'Enterprise Partner',
              overview: p.description,
              challenge: 'Scalability & real-time operational integration across enterprise departments.',
              solution: 'Architected a custom cloud solution tailored for real-time monitoring and reporting.',
              results: [p.results || 'High Efficiency', 'Automated Workflows', 'Zero Backlog']
            }));
            setDynamicProjects(formatted);
          }
        }
      } catch (err) {
        console.warn('Backend API offline for projects:', err);
      }
    };
    fetchProjects();
  }, []);

  const allFeaturedProjects = dynamicProjects.length > 0 ? dynamicProjects : FEATURED_CASE_STUDIES;
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
    <div className="bg-[#F0F7FF] text-[#111827] min-h-screen">

      {/* 1. SECTION 1 — HEADER & INTRO (Matched 1-to-1 with Contact Page Hero Fade) */}
      <section className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-12 sm:pt-28 sm:pb-16 overflow-hidden border-b border-blue-100 bg-gradient-to-b from-[#DBEAFE] via-[#F0F7FF] to-[#F0F7FF]">
        {/* Background Image: Modern tech workspace with digital product showcase */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/portfolio_hero_bg.png"
            alt="Modern software development workspace displaying business application dashboards and digital products"
            className="w-full h-full object-cover object-center opacity-60 filter contrast-105 brightness-105 saturate-110 pointer-events-none transition-all duration-700"
          />
          {/* Neutral soft overlay to keep text readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#F0F7FF]/30 via-[#F0F7FF]/50 to-[#F0F7FF] z-10 pointer-events-none" />
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
            Software Solutions <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#1D4ED8] to-[#2563EB]">Engineered For Impact & Scale</span>
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
              className="w-full sm:w-auto px-6 py-3 sm:px-7 sm:py-3.5 bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#60A5FA] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white font-bold rounded-2xl shadow-xl shadow-blue-950/30 flex items-center justify-center space-x-2 text-xs sm:text-sm group transition-all transform hover:-translate-y-0.5 active:scale-95 border border-blue-300/30"
            >
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>Request Case Study & Proposal</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })}
              className="hidden sm:flex w-full sm:w-auto px-7 py-3.5 bg-white/95 hover:bg-white text-[#111827] hover:text-[#2563EB] border border-blue-200 font-semibold rounded-2xl transition-all text-center items-center justify-center space-x-2 text-sm shadow-md backdrop-blur-md active:scale-95"
            >
              <span>Explore Case Studies</span>
              <ChevronDown className="w-4 h-4 text-[#2563EB]" />
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
          <div className="w-8 h-8 rounded-full bg-white border border-blue-200 flex items-center justify-center shadow-sm hover:border-[#2563EB]">
            <ChevronDown className="w-4 h-4 text-[#2563EB] animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* 2. SECTION 2 — COMPACT RECENT PROJECTS (Soft Blue Background) */}
      <section className="py-8 sm:py-16 bg-[#F0F7FF] border-b border-blue-100 relative overflow-hidden text-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-8 relative z-10">
          
          {/* Main Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-12 px-2">
            <h2 className="text-xl sm:text-5xl font-black text-[#111827] tracking-tight">
              Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6]">Projects</span>
            </h2>
            <p className="mt-1.5 sm:mt-2.5 text-slate-600 text-xs sm:text-base font-medium">
              Explore our recent software, web, and mobile app deployments.
            </p>
          </div>
          
          {/* ── 📱 MOBILE ONLY: ULTRA-PREMIUM EXECUTIVE CASE STUDY & RECENT WORK DECK ── */}
          <div className="block sm:hidden space-y-6">
            
            {/* 1. Featured Case Studies Horizontal Deck */}
            <div className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-[11px] font-black text-[#1E3A8A] uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#2563EB]" />
                  <span>Featured Case Studies</span>
                </span>
                <span className="text-[10px] text-[#2563EB] font-bold">Swipe →</span>
              </div>

              <div className="flex overflow-x-auto gap-3.5 snap-x snap-mandatory pb-3 px-1 scrollbar-none touch-pan-x">
                {allFeaturedProjects.map((study) => (
                  <div
                    key={`m-featured-${study.id}`}
                    className="w-[86vw] max-w-[320px] shrink-0 snap-center rounded-2xl border border-blue-400/30 bg-gradient-to-b from-[#0F172A] via-[#1E3A8A] to-[#0F172A] text-white p-4 shadow-xl flex flex-col justify-between"
                  >
                    {/* Top Image Banner */}
                    <div className="relative h-36 rounded-xl overflow-hidden bg-slate-950 mb-3">
                      {study.image ? (
                        <img
                          src={study.image}
                          alt={study.title}
                          className="w-full h-full object-cover filter brightness-90"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] flex items-center justify-center p-3">
                          <Briefcase className="w-8 h-8 text-blue-200" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                      <span className="absolute top-2.5 left-2.5 text-[8px] font-black uppercase tracking-widest bg-blue-600/90 text-white px-2.5 py-0.5 rounded-full border border-white/20 shadow-md">
                        {study.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="space-y-2 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[9px] font-mono text-blue-300 font-bold uppercase tracking-wider block">
                          Client: {study.client}
                        </span>
                        <h3 className="text-base font-black text-white leading-tight mt-0.5 line-clamp-1">
                          {study.title}
                        </h3>
                        <p className="text-blue-100/90 text-xs leading-relaxed line-clamp-2 mt-1 font-medium">
                          {study.overview}
                        </p>
                      </div>

                      {/* Key Results Badges */}
                      <div className="space-y-1 pt-1">
                        <span className="text-[8px] font-black text-amber-300 uppercase tracking-wider block">
                          Delivered Impact:
                        </span>
                        <div className="grid grid-cols-1 gap-1">
                          {study.results.slice(0, 2).map((res, rIdx) => (
                            <div
                              key={rIdx}
                              className="flex items-center space-x-1.5 text-[10px] font-bold text-emerald-300 bg-emerald-500/15 px-2 py-0.5 rounded-md border border-emerald-400/30"
                            >
                              <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                              <span className="truncate">{res}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-2 border-t border-white/15">
                        <button
                          onClick={() => onOpenQuote(study.title)}
                          className="w-full py-2.5 px-3 bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#60A5FA] text-white font-black rounded-xl text-xs flex items-center justify-center space-x-1.5 shadow-lg shadow-blue-900/50 active:scale-95 cursor-pointer"
                        >
                          <span>Request Case Study & Proposal</span>
                          <ArrowRight className="w-3.5 h-3.5 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Recent Projects Horizontal Swipe Deck */}
            <div className="space-y-2 pt-2 border-t border-blue-200/60">
              <div className="flex items-center justify-between px-1">
                <span className="text-[11px] font-black text-[#111827] uppercase tracking-wider">
                  More Recent Deployments
                </span>
                <span className="text-[10px] text-[#2563EB] font-bold">Swipe →</span>
              </div>

              <div className="flex overflow-x-auto gap-3 snap-x snap-mandatory pb-3 px-1 scrollbar-none touch-pan-x">
                {recentProjects.map((project) => (
                  <div
                    key={`m-recent-${project.id}`}
                    onClick={() => setSelectedProject(project)}
                    className="w-[78vw] max-w-[280px] shrink-0 snap-center bg-white rounded-2xl border border-blue-200 shadow-lg overflow-hidden flex flex-col justify-between cursor-pointer active:scale-95 transition-all"
                  >
                    <div className="relative h-32 overflow-hidden bg-blue-50">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
                      <span className="absolute top-2 left-2 text-[8px] font-extrabold px-2 py-0.5 bg-white/95 backdrop-blur-md text-[#2563EB] rounded-full border border-blue-200 uppercase tracking-widest shadow-xs">
                        {project.category}
                      </span>
                    </div>

                    <div className="p-3.5 space-y-2 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xs font-black text-[#111827] leading-snug line-clamp-1">
                          {project.title}
                        </h3>
                        <p className="text-slate-600 text-[11px] leading-relaxed line-clamp-2 mt-0.5 font-medium">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1 pt-0.5">
                        {project.tech.slice(0, 2).map((t, idx) => (
                          <span key={idx} className="text-[8px] font-bold px-2 py-0.5 bg-[#F0F7FF] text-[#2563EB] rounded-md border border-blue-100">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="px-3.5 py-2 border-t border-blue-100 flex items-center justify-between bg-[#F0F7FF]/60">
                      <span className="text-[9px] font-semibold text-slate-500 truncate max-w-[130px]">Client: {project.client}</span>
                      <span className="text-[9px] font-black text-[#2563EB] flex items-center space-x-0.5">
                        <span>Details</span>
                        <ArrowUpRight className="w-3 h-3 text-[#2563EB]" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>


          {/* ── 💻 DESKTOP ONLY: ORIGINAL FULL GRID & FEATURED CASE STUDIES ── */}
          <div className="hidden sm:block space-y-8">
            {allFeaturedProjects.map((study, index) => {
              const isImageLeft = index % 2 === 0;

              return (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, x: isImageLeft ? -30 : 30, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white rounded-3xl border border-blue-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-lg shadow-blue-900/5 hover:border-[#60A5FA] transition-all duration-300 group"
                >
                  {/* Image Panel */}
                  <div
                    className={`lg:col-span-5 relative overflow-hidden aspect-auto min-h-[220px] ${
                      isImageLeft ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    {study.image ? (
                      <>
                        <img
                          src={study.image}
                          alt={study.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out opacity-95 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                      </>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#1E3A8A] via-[#1D4ED8] to-[#2563EB] flex flex-col items-center justify-center p-6 text-center text-white relative">
                        <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-3 shadow-lg">
                          <Briefcase className="w-7 h-7 text-blue-200" />
                        </div>
                        <h4 className="text-lg font-black text-white leading-tight line-clamp-2 max-w-xs">{study.title}</h4>
                        <span className="text-[10px] font-bold text-blue-200 uppercase tracking-widest mt-1.5">{study.category}</span>
                      </div>
                    )}

                    <span className="absolute top-4 left-4 text-[10px] font-bold px-2.5 py-1 bg-white/90 backdrop-blur-md text-[#2563EB] rounded-full border border-blue-200 uppercase tracking-widest shadow-sm z-10">
                      {study.badge}
                    </span>
                  </div>

                  {/* Content Panel */}
                  <div
                    className={`lg:col-span-7 p-6 lg:p-7 flex flex-col justify-between space-y-4 ${
                      isImageLeft ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">
                          Client: {study.client}
                        </span>
                        <span className="text-[10px] font-bold text-[#2563EB] px-2.5 py-0.5 bg-blue-50 rounded-full border border-blue-200">
                          {study.category}
                        </span>
                      </div>

                      <h2 className="text-2xl font-extrabold text-[#111827] tracking-tight leading-snug group-hover:text-[#2563EB] transition-colors">
                        {study.title}
                      </h2>

                      <p className="text-slate-600 text-sm leading-relaxed">
                        {study.overview}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {study.tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-bold px-2.5 py-0.5 bg-blue-50 text-[#2563EB] rounded-md border border-blue-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Challenge & Solution Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-blue-100 text-xs">
                        <div className="space-y-0.5 p-3 rounded-xl bg-blue-50/50 border border-blue-100">
                          <span className="font-extrabold text-amber-600 uppercase tracking-wider block text-[10px]">
                            The Challenge
                          </span>
                          <p className="text-slate-600 text-[11px] leading-relaxed">
                            {study.challenge}
                          </p>
                        </div>

                        <div className="space-y-0.5 p-3 rounded-xl bg-blue-50/50 border border-blue-100">
                          <span className="font-extrabold text-emerald-600 uppercase tracking-wider block text-[10px]">
                            Our Solution
                          </span>
                          <p className="text-slate-600 text-[11px] leading-relaxed">
                            {study.solution}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Key Results */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                        Key Results Delivered
                      </span>
                      <div className="grid grid-cols-3 gap-1.5">
                        {study.results.map((res, idx) => (
                          <div key={idx} className="flex items-center space-x-1 text-[10px] font-bold text-emerald-700 p-1.5 rounded-lg bg-emerald-50 border border-emerald-200">
                            <CheckCircle2 className="w-3 h-3 shrink-0 text-emerald-600" />
                            <span className="truncate">{res}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* View Case Study Button */}
                    <div className="pt-2.5 border-t border-blue-100">
                      <button
                        onClick={() => onOpenQuote(study.title)}
                        className="w-auto px-5 py-2.5 bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#60A5FA] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white font-bold rounded-xl shadow-md flex items-center justify-center space-x-2 text-xs group/btn transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                      >
                        <span>Request Case Study & Proposal</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Desktop Recent Projects Grid */}
            <div className="pt-10 border-t border-blue-100">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {recentProjects.map((project, index) => {
                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ y: -6 }}
                      onClick={() => setSelectedProject(project)}
                      className="bg-white rounded-2xl border border-blue-100 overflow-hidden group hover:border-[#60A5FA] hover:shadow-xl shadow-md shadow-blue-900/5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden bg-blue-50">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />

                        <span className="absolute top-2.5 left-2.5 text-[9px] font-bold px-2 py-0.5 bg-white/90 backdrop-blur-md text-[#2563EB] rounded-full border border-blue-200 uppercase tracking-widest shadow-xs">
                          {project.category}
                        </span>
                      </div>

                      <div className="p-5 space-y-2">
                        <h3 className="text-base font-extrabold text-[#111827] group-hover:text-[#2563EB] transition-colors leading-snug line-clamp-1">
                          {project.title}
                        </h3>

                        <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-1 pt-0.5">
                          {project.tech.map((t, idx) => (
                            <span key={idx} className="text-[9px] font-bold px-2 py-0.5 bg-blue-50 text-[#2563EB] rounded-md border border-blue-200">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="px-4 py-2.5 border-t border-blue-100 flex items-center justify-between bg-blue-50/50">
                        <span className="text-[10px] font-semibold text-slate-500 truncate">Client: {project.client}</span>
                        <button className="text-[10px] font-bold text-[#2563EB] group-hover:text-[#1D4ED8] flex items-center space-x-1 transition-colors shrink-0">
                          <span>Details</span>
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 6 — CLIENT SUCCESS STORIES & PROJECT OUTCOMES (Soft Blue Background) */}
      <section className="py-12 sm:py-24 bg-[#F0F7FF] border-b border-blue-100 relative overflow-hidden text-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
            <h2 className="text-xl sm:text-5xl font-black text-[#111827]">
              Client Success Stories & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6]">Outcomes</span>
            </h2>
            <p className="mt-2 sm:mt-3 text-slate-600 text-xs sm:text-base">
              Real metrics and executive testimonials from businesses transformed by TOMTOP software.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
            {CLIENT_TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-blue-100 backdrop-blur-2xl flex flex-col justify-between group hover:border-[#60A5FA] transition-all shadow-lg shadow-blue-900/5 relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#2563EB] opacity-80" />
                    <span className="text-[10px] sm:text-xs font-bold text-emerald-700 px-2.5 py-0.5 sm:px-3 sm:py-1 bg-emerald-50 rounded-full border border-emerald-200">
                      {t.metric}
                    </span>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-3.5 sm:pt-4 border-t border-blue-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-[#111827] font-extrabold">{t.role} • {t.company}</p>
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
