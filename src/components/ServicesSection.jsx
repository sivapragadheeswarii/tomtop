import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, Code2, ClipboardCheck, Users, GraduationCap, Server, ArrowRight, Sparkles, CheckCircle2, ExternalLink } from 'lucide-react';
import { servicesData } from '../data/companyData';

const iconMap = { Code2, Globe, ClipboardCheck, Users, GraduationCap, Server };
const GRADS = [
  ['#1D4ED8','#3B82F6'],['#1E40AF','#2563EB'],['#1848C8','#60A5FA'],
  ['#1e3a8a','#3B82F6'],['#2563EB','#60A5FA'],['#1D4ED8','#2563EB'],
];

const AUTOPLAY_DELAY = 4500;

export default function ServicesSection({ onOpenQuote, limit }) {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const services = limit ? servicesData.slice(0, limit) : servicesData;
  const svc = services[active];
  const ActiveIcon = iconMap[svc.iconName] || Globe;
  const [ca, cb] = GRADS[active % GRADS.length];

  const nextSlide = useCallback(() => {
    setActive((prev) => (prev + 1) % services.length);
  }, [services.length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_DELAY);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section 
      className="py-10 sm:py-20 bg-[#F0F7FF] relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%"><defs><pattern id="gr" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0L0 0 0 40" fill="none" stroke="#2563EB" strokeWidth="0.7"/>
        </pattern></defs><rect width="100%" height="100%" fill="url(#gr)"/></svg>
      </div>
      <motion.div className="absolute rounded-full pointer-events-none"
        style={{width:500,height:500,background:'radial-gradient(circle,rgba(59,130,246,0.07) 0%,transparent 70%)',top:'-5%',left:'35%'}}
        animate={{scale:[1,1.2,1]}} transition={{duration:12,repeat:Infinity,ease:'easeInOut'}}/>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"/>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"/>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-14">
          <motion.h2 initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1}}
            className="text-xl sm:text-4xl lg:text-5xl font-black text-[#0B1120] tracking-tight leading-tight px-2">
            Enterprise Software &amp;{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D4ED8] via-[#3B82F6] to-[#60A5FA]">Cloud Ecosystem</span>
              <motion.span className="absolute -bottom-0.5 left-0 h-[3px] rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#60A5FA]"
                initial={{scaleX:0,originX:0}} whileInView={{scaleX:1}} viewport={{once:true}} transition={{delay:0.6,duration:0.8}}/>
            </span>
          </motion.h2>
          <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:0.2}}
            className="hidden sm:block mt-3 text-slate-500 text-base">
            Automatic rotation enabled. Hover over the section to pause.
          </motion.p>
        </div>

        {/* ── Progress Steps ── */}
        <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.2}}
          className="relative mb-6 sm:mb-12 overflow-x-auto scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex items-start justify-start sm:justify-center min-w-max mx-auto py-1">
            {services.map((s, idx) => {
              const SIcon = iconMap[s.iconName] || Globe;
              const isActive = active === idx;
              const isDone = idx < active;
              const [ga, gb] = GRADS[idx % GRADS.length];
              return (
                <React.Fragment key={s.id}>
                  {/* Step node */}
                  <div className="flex flex-col items-center gap-2 shrink-0">
                    <motion.button onClick={() => setActive(idx)}
                      whileHover={{scale:1.08}} whileTap={{scale:0.95}}
                      className={`relative w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isActive ? 'shadow-xl' : isDone ? 'shadow-md' : 'bg-white border border-blue-100 shadow-sm hover:shadow-md hover:border-blue-300'
                      }`}
                      style={isActive ? {background:`linear-gradient(135deg,${ga},${gb})`,boxShadow:`0 8px 24px rgba(37,99,235,0.3)`}
                        : isDone ? {background:`linear-gradient(135deg,${ga}88,${gb}88)`} : {}}
                    >
                      {isActive && (
                        <motion.div className="absolute inset-0 rounded-xl sm:rounded-2xl"
                          style={{background:`linear-gradient(135deg,${ga},${gb})`}}
                          animate={{scale:[1,1.25,1],opacity:[0.5,0,0.5]}}
                          transition={{duration:2,repeat:Infinity}}/>
                      )}
                      <SIcon className={`relative z-10 w-4 h-4 sm:w-6 sm:h-6 ${isActive||isDone?'text-white':'text-[#2563EB]'}`}/>
                    </motion.button>
                    <span className={`text-[9px] sm:text-[10px] font-black uppercase tracking-wide text-center max-w-[62px] sm:max-w-[72px] leading-tight transition-colors ${isActive?'text-[#1D4ED8]':isDone?'text-slate-400':'text-slate-400'}`}>
                      {s.title.split(' ').slice(0,2).join(' ')}
                    </span>
                  </div>

                  {/* Connector line */}
                  {idx < services.length - 1 && (
                    <div className="relative h-0.5 w-8 sm:w-20 mx-1 sm:mx-2 shrink-0 bg-blue-100 rounded-full overflow-hidden mt-5 sm:mt-6">
                      <motion.div className="absolute inset-y-0 left-0 rounded-full"
                        style={{background:`linear-gradient(90deg,${ga},${gb})`}}
                        animate={{width: idx < active ? '100%' : '0%'}}
                        transition={{duration:0.4}}/>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </motion.div>

        {/* ── Detail Card ── */}
        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}}
            transition={{duration:0.3,ease:[0.4,0,0.2,1]}}
            className="relative bg-white rounded-2xl sm:rounded-3xl border border-blue-100 overflow-hidden"
            style={{boxShadow:`0 16px 50px rgba(37,99,235,0.1)`}}
          >
            {/* Top accent progress line */}
            <motion.div 
              key={`progress-${active}`}
              className="h-1 w-full"
              style={{background:`linear-gradient(90deg,${ca},${cb})`}}
              initial={{scaleX:0, originX:0}}
              animate={{scaleX:1}}
              transition={{duration: isPaused ? 0 : AUTOPLAY_DELAY / 1000, ease: 'linear'}}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left accent panel */}
              <div className="lg:col-span-4 p-5 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-blue-50 flex flex-col gap-4 sm:gap-5">
                <div className="flex items-center gap-3 sm:gap-4">
                  <motion.div
                    initial={{scale:0.6,rotate:-12}} animate={{scale:1,rotate:0}}
                    transition={{type:'spring',stiffness:200,damping:16}}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-3xl flex items-center justify-center shrink-0 shadow-lg sm:shadow-xl"
                    style={{background:`linear-gradient(135deg,${ca},${cb})`,boxShadow:`0 8px 24px rgba(37,99,235,0.25)`}}>
                    <ActiveIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white"/>
                  </motion.div>
                  <div>
                    <p className="text-[9px] font-black text-blue-400 uppercase tracking-[0.18em] mb-0.5">
                      {String(active+1).padStart(2,'0')} of {String(services.length).padStart(2,'0')}
                    </p>
                    <span className="text-[9px] sm:text-[10px] font-black px-2.5 py-0.5 sm:py-1 rounded-full text-white uppercase tracking-widest inline-block"
                      style={{background:`linear-gradient(135deg,${ca},${cb})`}}>{svc.badge}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-2xl lg:text-3xl font-black text-[#0B1120] leading-tight mb-2 sm:mb-3">{svc.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{svc.shortDesc||svc.description}</p>
                </div>
              </div>

              {/* Right content */}
              <div className="lg:col-span-8 p-5 sm:p-8 lg:p-10">
                <p className="text-[10px] font-black text-[#2563EB] uppercase tracking-[0.18em] mb-3 sm:mb-4 flex items-center gap-2">
                  <span className="w-5 h-px inline-block" style={{background:`linear-gradient(90deg,${ca},${cb})`}}/>
                  Engineering Capabilities
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 mb-5 sm:mb-7">
                  {svc.features.map((f,i)=>(
                    <motion.div key={i}
                      initial={{opacity:0,x:14}} animate={{opacity:1,x:0}} transition={{delay:i*0.05}}
                      whileHover={{x:4}}
                      className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-blue-50/60 border border-blue-100 hover:border-blue-300 hover:bg-blue-50 transition-all cursor-default group/f">
                      <div className="w-5 h-5 rounded-lg flex items-center justify-center shrink-0"
                        style={{background:`linear-gradient(135deg,${ca},${cb})`}}>
                        <CheckCircle2 className="w-3 h-3 text-white"/>
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-[#1e293b] group-hover/f:text-[#1D4ED8] transition-colors leading-snug break-words">{f}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-4 sm:pt-5 border-t border-blue-50">
                  <motion.button onClick={()=>onOpenQuote(svc.title)}
                    whileHover={{scale:1.02,boxShadow:`0 12px 30px rgba(37,99,235,0.25)`}} whileTap={{scale:0.98}}
                    className="relative overflow-hidden group w-full sm:flex-1 flex items-center justify-center gap-2 px-5 py-3.5 text-white font-black rounded-xl sm:rounded-2xl text-xs sm:text-sm shadow-md transition-all"
                    style={{background:`linear-gradient(135deg,${ca},${cb})`}}>
                    <motion.div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"/>
                    <span className="relative z-10">Request Custom Proposal</span>
                    <motion.div className="relative z-10" animate={{x:[0,4,0]}} transition={{duration:1.5,repeat:Infinity}}>
                      <ArrowRight className="w-4 h-4"/>
                    </motion.div>
                  </motion.button>
                  <Link to="/services" className="w-full sm:w-auto">
                    <motion.div whileHover={{scale:1.02}} whileTap={{scale:0.98}}
                      className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl sm:rounded-2xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-[#1D4ED8] font-bold text-xs sm:text-sm transition-all cursor-pointer">
                      <ExternalLink className="w-3.5 h-3.5"/><span>All Services</span>
                    </motion.div>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
