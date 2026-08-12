import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles, ArrowRight, ArrowUpRight, CheckCircle2, ChevronDown,
  Box, CreditCard, Factory, GraduationCap, ShieldCheck,
  Zap, MessageSquare, Laptop, Layers
} from 'lucide-react';
import { productsData } from '../data/companyData';

export default function Products() {
  const context = useOutletContext();
  const onOpenQuote = context?.onOpenQuote || (() => {});
  const [activeCardId, setActiveCardId] = useState(null);
  const [productsList, setProductsList] = useState(productsData);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const port = localStorage.getItem('tomtop_api_port') || '5001';
        const res = await fetch(`http://localhost:${port}/api/products`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            const formatted = data.map((p, idx) => ({
              id: p._id || p.id || `prod-${idx}`,
              name: p.name,
              category: p.category || 'Enterprise Software',
              shortDesc: p.shortDesc || p.description,
              features: Array.isArray(p.features) && p.features.length > 0
                ? p.features
                : ["Automated Business Workflow", "Real-Time Cloud Sync", "Role-Based Access Control", "24/7 SLA Technical Support"],
              image: p.image && p.image.trim() !== ''
                ? p.image
                : 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
            }));
            const unique = [];
            const seenNames = new Set();
            for (const item of formatted) {
              const clean = item.name.trim().toLowerCase();
              if (!seenNames.has(clean)) {
                seenNames.add(clean);
                unique.push(item);
              }
            }
            setProductsList(unique);
          }
        }
      } catch (err) {
        console.warn('Products API offline:', err);
      }
    };
    fetchProducts();
  }, []);

  const getProductIcon = (id) => {
    switch (id) {
      case 'clearbill':
        return CreditCard;
      case 'kts':
        return Factory;
      case 'gurudesk':
        return GraduationCap;
      default:
        return Box;
    }
  };

  return (
    <div className="bg-[#F0F7FF] text-[#111827] min-h-screen">
      
      {/* 1. HERO BANNER (Full 100dvh Viewport Constraint) */}
      <section className="relative h-[100dvh] min-h-[100dvh] sm:min-h-screen flex flex-col justify-between items-center pt-20 pb-4 sm:pt-36 sm:pb-12 lg:pt-40 lg:pb-24 overflow-hidden border-b border-blue-100 bg-gradient-to-b from-[#EBF3FF] via-[#F0F7FF] to-[#F8FAFC]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/products_hero_bg.png"
            alt="Modern business technology workspace with software products"
            className="w-full h-full object-cover object-center opacity-50 filter contrast-110 brightness-105 saturate-110 pointer-events-none transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F0F7FF]/30 via-[#F0F7FF]/65 to-[#F8FAFC] z-10 pointer-events-none" />
        </div>

        {/* Ambient Spotlight */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[700px] h-[250px] sm:h-[350px] bg-blue-500/10 blur-[90px] sm:blur-[120px] rounded-full pointer-events-none z-10" />

        {/* Hero Content Container (Centered Vertically) */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full text-center space-y-3 sm:space-y-8 my-auto">

          {/* Top Centered Pill Badge (Hidden on Mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden sm:inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-blue-200 shadow-md shadow-blue-900/5 text-[#1E3A8A] text-[10px] sm:text-xs font-black uppercase tracking-wide sm:tracking-wider max-w-[95%] mx-auto"
          >
            <Box className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
            <span className="truncate">Enterprise Software Applications</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.15] sm:leading-[1.1] text-[#0F172A] max-w-4xl mx-auto drop-shadow-xs px-1"
          >
            Purpose-Built <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6]">Software Platforms</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-slate-600 text-xs sm:text-lg max-w-xs xs:max-w-sm sm:max-w-2xl mx-auto font-medium leading-relaxed px-2"
          >
            Discover our suite of business applications engineered for billing automation, textile manufacturing ERP, and campus management.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3.5 pt-1 sm:pt-2 max-w-xs xs:max-w-sm sm:max-w-none mx-auto w-full"
          >
            <button
              onClick={() => onOpenQuote("Product Demo Inquiry")}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white font-black rounded-xl sm:rounded-2xl shadow-xl shadow-blue-600/25 flex items-center justify-center space-x-2 sm:space-x-2.5 text-xs sm:text-base group transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer border border-blue-300/30"
            >
              <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
              <span>Schedule a Live Demo</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <button
              onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })}
              className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-4 bg-white/95 hover:bg-blue-50 border border-blue-200 text-[#0F172A] font-bold rounded-xl sm:rounded-2xl transition-all flex items-center justify-center space-x-2 text-xs sm:text-base hover:border-[#3B82F6] hover:text-[#2563EB] active:scale-95 shadow-sm backdrop-blur-md"
            >
              <span>Explore Products</span>
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
          className="mt-auto pt-2 flex flex-col items-center space-y-1 relative z-20 cursor-pointer"
        >
          <span className="text-[9px] font-bold uppercase tracking-widest text-blue-700/70 hidden sm:block">Scroll</span>
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-blue-200 flex items-center justify-center hover:border-[#2563EB] shadow-sm">
            <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2563EB]" />
          </div>
        </motion.div>
      </section>

      {/* 2. HOVER REVEAL PRODUCT CARDS GRID */}
      <section className="py-8 sm:py-24 bg-white border-b border-blue-100 relative overflow-hidden text-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-16 px-2">
            <h2 className="text-xl sm:text-5xl font-black text-[#111827] tracking-tight">
              Our Flagship <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6]">Product Suite</span>
            </h2>
            <p className="mt-2 sm:mt-3 text-slate-600 text-xs sm:text-base">
              Hover or tap on any product box below to reveal its full capabilities and specifications.
            </p>
          </div>

          {/* ── MOBILE VIEW: PREMIUM HORIZONTAL SWIPE CAROUSEL (Mobile Only) ── */}
          <div className="block sm:hidden">
            {/* Horizontal Snap Scroll Container */}
            <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory pb-4 px-1 scrollbar-none touch-pan-x">
              {productsList.map((prod) => {
                const IconComp = getProductIcon(prod.id);

                return (
                  <div
                    key={`mobile-${prod.id}`}
                    className="w-[85vw] max-w-[320px] shrink-0 snap-center rounded-2xl border border-blue-200 bg-white shadow-xl overflow-hidden flex flex-col justify-between"
                  >
                    {/* Top Image Banner */}
                    <div className="relative h-40 overflow-hidden bg-slate-900">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-full h-full object-cover object-top filter brightness-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between">
                        <span className="text-[9px] font-extrabold text-white uppercase tracking-widest bg-blue-600/90 backdrop-blur-md px-2.5 py-0.5 rounded-full shadow-md border border-white/20">
                          {prod.category}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-slate-950/80 backdrop-blur-md text-white border border-white/20 flex items-center justify-center shadow-md">
                          <IconComp className="w-4 h-4 text-white" />
                        </div>
                      </div>

                      {/* Title Overlay */}
                      <div className="absolute bottom-3 left-3 right-3 z-10">
                        <h3 className="text-xl font-black text-white drop-shadow-md leading-tight">
                          {prod.name}
                        </h3>
                      </div>
                    </div>

                    {/* Bottom White Card Content */}
                    <div className="p-4 bg-white flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <p className="text-slate-600 text-xs leading-relaxed line-clamp-2 font-medium">
                          {prod.shortDesc}
                        </p>

                        {/* Capabilities Pills */}
                        <div className="mt-3 space-y-1.5">
                          <span className="text-[9px] font-black text-blue-600 uppercase tracking-wider block">
                            Key Capabilities:
                          </span>
                          <div className="grid grid-cols-1 gap-1.5">
                            {prod.features.slice(0, 2).map((feat, fIdx) => (
                              <div
                                key={fIdx}
                                className="flex items-center space-x-2 text-[11px] font-semibold text-[#111827] bg-[#F0F7FF] px-2.5 py-1 rounded-lg border border-blue-100"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                                <span className="truncate">{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Action CTA Button */}
                      <div className="pt-2 border-t border-slate-100">
                        <button
                          onClick={() => onOpenQuote(`${prod.name} Demo Request`)}
                          className="w-full py-2.5 px-4 bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#60A5FA] text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-2 shadow-md shadow-blue-500/20 active:scale-95 cursor-pointer"
                        >
                          <Laptop className="w-3.5 h-3.5 text-white" />
                          <span>Request Live Demo</span>
                          <ArrowRight className="w-3.5 h-3.5 text-white" />
                        </button>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile Scroll Prompt */}
            <div className="flex items-center justify-center gap-1.5 mt-2 text-[11px] font-semibold text-slate-500">
              <span>Swipe left or right to view products</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#2563EB] animate-pulse" />
            </div>
          </div>


          {/* ── DESKTOP VIEW: HOVER REVEAL CARDS GRID (Desktop/Tablet Only) ── */}
          <div className="hidden sm:grid grid-cols-1 md:grid-cols-3 gap-8">
            {productsList.map((prod) => {
              const IconComp = getProductIcon(prod.id);
              const isActive = activeCardId === prod.id;

              return (
                <div
                  key={prod.id}
                  onClick={() => setActiveCardId(isActive ? null : prod.id)}
                  className={`group relative h-[580px] rounded-3xl overflow-hidden border border-blue-200 bg-slate-900 shadow-xl hover:shadow-2xl hover:border-blue-400 transition-all duration-500 cursor-pointer ${
                    isActive ? 'ring-4 ring-blue-500/40 border-blue-500' : ''
                  }`}
                >
                  {/* Base Image Background */}
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 filter brightness-95"
                  />

                  {/* Top Bar Badge (Always Visible) */}
                  <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-md">
                      {prod.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-950/70 backdrop-blur-md text-white border border-white/20 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                    </div>
                  </div>

                  {/* Default Bottom Bar (Visible when NOT hovering) */}
                  <div className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-900/85 to-transparent p-6 pt-20 flex items-end justify-between transition-all duration-300 z-10 ${
                    isActive ? 'opacity-0' : 'group-hover:opacity-0'
                  }`}>
                    <div>
                      <h3 className="text-3xl font-extrabold text-white drop-shadow-md leading-tight">
                        {prod.name}
                      </h3>
                      <p className="text-slate-300 text-xs mt-1 font-medium line-clamp-1">
                        Hover or tap to reveal features ↗
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 flex items-center justify-center shrink-0">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Hover Revealed Details Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-b from-[#1E3A8A]/98 via-[#1D4ED8]/98 to-[#0F172A]/98 backdrop-blur-md p-6 text-white transition-all duration-500 flex flex-col justify-between z-30 overflow-y-auto ${
                    isActive
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0'
                  }`}>
                    <div className="space-y-3">
                      {/* Category & Title Header */}
                      <div className="flex items-center justify-between border-b border-white/20 pb-3">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 text-blue-200 px-2.5 py-0.5 rounded-full border border-white/30 inline-block">
                            {prod.category}
                          </span>
                          <h3 className="text-2xl font-black text-white mt-1 leading-tight">{prod.name}</h3>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center border border-white/20 shrink-0">
                          <IconComp className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-blue-100 text-xs leading-relaxed font-medium bg-white/5 p-2.5 rounded-xl border border-white/10">
                        {prod.shortDesc}
                      </p>

                      {/* Key Features List */}
                      <div className="space-y-1.5 pt-0.5">
                        <span className="text-[10px] font-black text-amber-300 uppercase tracking-wider block">
                          INCLUDED CAPABILITIES:
                        </span>
                        <div className="space-y-1.5">
                          {prod.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-center space-x-2 text-xs font-semibold text-white bg-white/10 backdrop-blur-sm px-2.5 py-1.5 rounded-lg border border-white/15">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                              <span className="truncate">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA Button inside card */}
                    <div className="pt-3 mt-3 border-t border-white/20 shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenQuote(`${prod.name} Demo Request`);
                        }}
                        className="w-full py-2.5 px-4 bg-white hover:bg-blue-50 text-[#1D4ED8] font-black rounded-xl shadow-lg flex items-center justify-center space-x-2 text-sm transition-all transform active:scale-95 cursor-pointer"
                      >
                        <Laptop className="w-4 h-4 text-[#1D4ED8]" />
                        <span>Request Demo for {prod.name}</span>
                        <ArrowRight className="w-4 h-4 text-[#1D4ED8]" />
                      </button>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
