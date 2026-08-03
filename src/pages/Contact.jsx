import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail, Phone, MapPin, Globe, Send, CheckCircle,
  Clock, Sparkles, MessageCircle, ChevronDown,
  HelpCircle, ArrowRight, Zap, Shield, Users
} from 'lucide-react';
import { companyInfo, faqData } from '../data/companyData';

export default function Contact() {
  const { onOpenQuote } = useOutletContext();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [focused, setFocused] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClass = (field) =>
    `w-full px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-xl bg-white/6 text-white outline-none text-xs sm:text-sm font-medium placeholder:text-slate-600 transition-all duration-300 ${
      focused === field
        ? 'border-[#38BDF8] border shadow-[0_0_0_3px_rgba(56,189,248,0.15)] bg-white/10'
        : 'border border-white/12 hover:border-white/25'
    }`;

  const contactItems = [
    { icon: Phone, label: 'Direct Line', value: companyInfo.phone, href: `tel:${companyInfo.phone}`, color: 'text-[#38BDF8]', bg: 'bg-blue-500/15 border-blue-500/25' },
    { icon: Mail, label: 'Email Address', value: companyInfo.email, href: `mailto:${companyInfo.email}`, color: 'text-purple-300', bg: 'bg-purple-500/15 border-purple-500/25' },
    { icon: Globe, label: 'Official Website', value: companyInfo.website, href: `https://${companyInfo.website}`, color: 'text-emerald-300', bg: 'bg-emerald-500/15 border-emerald-500/25' },
    { icon: MapPin, label: 'Office Address', value: companyInfo.address, href: null, color: 'text-amber-300', bg: 'bg-amber-500/15 border-amber-500/25' },
  ];

  const guarantees = [
    { icon: Zap, label: 'Reply within 24 hours' },
    { icon: Shield, label: 'Bank-grade data privacy' },
    { icon: Users, label: 'Direct founder contact' },
  ];

  return (
    <div className="bg-[#070A11] text-white min-h-screen">

      {/* ═══════════════════════════════════════════════
          SECTION 1 — CINEMATIC HERO (Full Screen Viewport Hero Banner)
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-16 overflow-hidden border-b border-white/10 bg-[#070A11]">
        {/* AI-Generated High-Contrast Contact Connectivity Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/contact_hero_bg.png"
            alt="TOMTOP SOLUTIONS Connectivity Network"
            className="w-full h-full object-cover object-center opacity-45 filter contrast-110 brightness-85 saturate-110"
          />
          {/* Smooth Dark Overlay for optimum subtle tech atmosphere & high text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070A11]/85 via-[#0B1528]/70 to-[#070A11]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_65%_at_50%_45%,rgba(37,99,235,0.20),transparent)]" />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[700px] h-[320px] sm:h-[700px] bg-blue-600/15 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center justify-center my-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center space-x-2 bg-blue-950/80 border border-blue-500/30 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold text-[#38BDF8] mb-4 sm:mb-8 backdrop-blur-md shadow-xl"
          >
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300 animate-pulse" />
            <span className="uppercase tracking-widest">Get In Touch</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl sm:text-6xl font-extrabold tracking-tight leading-snug sm:leading-[1.12] text-white max-w-4xl mx-auto"
          >
            Let's Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-cyan-300">
              Extraordinary
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-3 sm:mt-6 text-slate-300 text-xs sm:text-xl max-w-xl mx-auto leading-relaxed font-normal"
          >
            Have a project in mind? Reach out to our engineering team and get a free proposal within 24 hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32 }}
            className="mt-5 sm:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-6"
          >
            {guarantees.map((g, i) => (
              <div key={i} className="flex items-center space-x-1.5 text-[10px] sm:text-xs font-semibold text-slate-300 bg-white/5 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-white/10">
                <g.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#38BDF8]" />
                <span>{g.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Animated Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1.5 z-10 cursor-pointer"
        >
          <span className="text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest hidden sm:block">
            Scroll to Get in Touch
          </span>
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center hover:border-[#38BDF8]">
            <ChevronDown className="w-4 h-4 text-[#38BDF8] animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 2 — TWO-COLUMN MAIN BODY (FORM + OFFICE INFO + MAP + HOURS)
      ═══════════════════════════════════════════════ */}
      <section className="py-12 sm:py-24 bg-gradient-to-b from-[#070A11] via-[#0B162C] to-[#070A11] border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[600px] bg-blue-600/10 rounded-full blur-[200px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf806_1px,transparent_1px),linear-gradient(to_bottom,#38bdf806_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">

            {/* ── LEFT: CONTACT FORM ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 rounded-2xl sm:rounded-[28px] border border-white/12 bg-[#0B1F4D]/55 backdrop-blur-2xl shadow-2xl overflow-hidden relative"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#38BDF8]/50 to-transparent" />

              <div className="p-5 sm:p-10">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center py-12 sm:py-20 text-center space-y-4 sm:space-y-5"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shadow-xl shadow-emerald-500/20">
                        <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white">Message Sent!</h3>
                      <p className="text-slate-400 max-w-xs text-xs sm:text-sm leading-relaxed">
                        Thank you, <strong className="text-white">{formData.name}</strong>. We'll review your message and reply within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-4 sm:space-y-6"
                    >
                      <div>
                        <h2 className="text-xl sm:text-2xl font-extrabold text-white">Send a Message</h2>
                        <p className="text-xs sm:text-sm text-slate-400 mt-1 sm:mt-1.5">Our technical team will get back to you within 24 business hours.</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="space-y-1 sm:space-y-1.5">
                          <label className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">Full Name *</label>
                          <input
                            type="text" required value={formData.name}
                            onFocus={() => setFocused('name')} onBlur={() => setFocused('')}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Anand Kumar"
                            className={inputClass('name')}
                          />
                        </div>
                        <div className="space-y-1 sm:space-y-1.5">
                          <label className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address *</label>
                          <input
                            type="email" required value={formData.email}
                            onFocus={() => setFocused('email')} onBlur={() => setFocused('')}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                            placeholder="anand@company.com"
                            className={inputClass('email')}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="space-y-1 sm:space-y-1.5">
                          <label className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">Phone Number *</label>
                          <input
                            type="tel" required value={formData.phone}
                            onFocus={() => setFocused('phone')} onBlur={() => setFocused('')}
                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 96777 51745"
                            className={inputClass('phone')}
                          />
                        </div>
                        <div className="space-y-1 sm:space-y-1.5">
                          <label className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">Subject</label>
                          <input
                            type="text" value={formData.subject}
                            onFocus={() => setFocused('subject')} onBlur={() => setFocused('')}
                            onChange={e => setFormData({ ...formData, subject: e.target.value })}
                            placeholder="Web Development Project"
                            className={inputClass('subject')}
                          />
                        </div>
                      </div>

                      <div className="space-y-1 sm:space-y-1.5">
                        <label className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">Project Details *</label>
                        <textarea
                          rows="4" required value={formData.message}
                          onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
                          onChange={e => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your project requirements, timeline, and budget..."
                          className={`${inputClass('message')} resize-none`}
                        />
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full py-3.5 sm:py-4 bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#06B6D4] hover:from-[#2563EB] hover:to-[#38BDF8] text-white font-bold rounded-xl sm:rounded-2xl shadow-xl shadow-blue-500/30 flex items-center justify-center space-x-2 text-xs sm:text-base transition-all active:scale-95"
                      >
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Send Message</span>
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* ── RIGHT: OFFICE INFO + BUSINESS HOURS + MAP ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 space-y-4 sm:space-y-5"
            >
              {/* Studio card & Business Hours */}
              <div className="rounded-2xl sm:rounded-[24px] border border-white/12 bg-gradient-to-br from-[#0B1F4D]/80 to-[#1E3A8A]/60 backdrop-blur-2xl p-5 sm:p-7 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/8 rounded-full blur-2xl pointer-events-none" />
                <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#38BDF8] mb-1">Software Engineering Studio</p>
                <h3 className="text-lg sm:text-xl font-extrabold text-white">{companyInfo.name}</h3>
                <p className="text-[10px] sm:text-xs text-slate-400 font-medium mt-0.5">Founded by {companyInfo.founder}</p>

                <div className="mt-4 sm:mt-5 flex items-center space-x-2 text-[10px] sm:text-xs text-slate-300 bg-white/8 border border-white/10 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl w-fit">
                  <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Business Hours: {companyInfo.hours}</span>
                </div>
              </div>

              {/* Contact detail cards */}
              {contactItems.map(({ icon: Icon, label, value, href, color, bg }) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="rounded-xl sm:rounded-[20px] border border-white/10 bg-[#0B1F4D]/50 backdrop-blur-2xl p-4 sm:p-5 flex items-center space-x-3.5 sm:space-x-4 hover:border-[#38BDF8]/40 transition-all duration-300 shadow-lg"
                >
                  <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl ${bg} border flex items-center justify-center shrink-0`}>
                    <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${color}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                        className={`text-xs sm:text-sm font-bold ${color} hover:text-white transition-colors truncate block`}>
                        {value}
                      </a>
                    ) : (
                      <span className="text-xs sm:text-sm font-bold text-white/80">{value}</span>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* WhatsApp CTA */}
              <motion.a
                href="https://wa.me/919677751745"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center space-x-2.5 sm:space-x-3 w-full py-3.5 sm:py-4 rounded-xl sm:rounded-[20px] bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-500/30 transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Chat on WhatsApp — Instant Response</span>
              </motion.a>

              {/* Map glass frame */}
              <div className="rounded-xl sm:rounded-[20px] border border-white/10 bg-[#0B1F4D]/50 backdrop-blur-2xl overflow-hidden shadow-lg">
                <div className="px-4 py-3 sm:px-5 sm:py-3.5 border-b border-white/8 flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">Madurai HQ — Live Location</span>
                </div>
                <div className="h-36 sm:h-44 relative">
                  <iframe
                    title="TomTop Solutions Location"
                    src="https://maps.google.com/maps?q=Madurai,TamilNadu,India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0 filter grayscale contrast-110 brightness-75"
                    allowFullScreen="" loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070A11]/30 to-transparent pointer-events-none" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 3 — FAQ ACCORDION (PAGE ENDING)
      ═══════════════════════════════════════════════ */}
      <section className="py-12 sm:py-24 bg-gradient-to-b from-[#070A11] via-[#0B162C] to-[#070A11] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf806_1px,transparent_1px),linear-gradient(to_bottom,#38bdf806_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-14">
            <span className="text-[#38BDF8] font-bold text-[9px] sm:text-[10px] uppercase tracking-widest bg-blue-950/80 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full border border-blue-500/30">
              Common Questions
            </span>
            <h2 className="text-xl sm:text-5xl font-extrabold text-white mt-2.5 sm:mt-4 tracking-tight">
              Frequently Asked
            </h2>
          </div>

          <div className="space-y-2.5 sm:space-y-3">
            {faqData.map((faq, i) => (
              <div
                key={i}
                className={`rounded-xl sm:rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openFaq === i
                    ? 'border-[#38BDF8]/40 bg-[#0B1F4D]/70 shadow-lg shadow-blue-500/10'
                    : 'border-white/10 bg-[#0B1F4D]/40 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-4 py-3.5 sm:px-6 sm:py-5 flex items-start justify-between space-x-3 sm:space-x-4 group"
                >
                  <div className="flex items-start space-x-3 sm:space-x-3.5">
                    <HelpCircle className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5 transition-colors ${openFaq === i ? 'text-[#38BDF8]' : 'text-slate-600 group-hover:text-slate-400'}`} />
                    <span className={`font-bold text-xs sm:text-sm leading-snug transition-colors ${openFaq === i ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-500 shrink-0 transition-transform duration-300 mt-0.5 ${openFaq === i ? 'rotate-180 text-[#38BDF8]' : ''}`} />
                </button>

                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 pb-4 pl-10 sm:px-6 sm:pb-5 sm:pl-[3.625rem] text-slate-400 text-xs sm:text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
