import React, { useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
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
    `w-full px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-xl bg-purple-50/50 text-[#111827] outline-none text-xs sm:text-sm font-medium placeholder:text-slate-400 transition-all duration-300 ${focused === field
      ? 'border-[#7C3AED] border-2 shadow-sm bg-white'
      : 'border border-purple-200 hover:border-purple-300'
    }`;

  const contactItems = [
    { icon: Phone, label: 'Direct Line', value: companyInfo.phone, href: `tel:${companyInfo.phone}`, color: 'text-[#7C3AED]', bg: 'bg-purple-50 border-purple-200' },
    { icon: Mail, label: 'Email Address', value: companyInfo.email, href: `mailto:${companyInfo.email}`, color: 'text-[#A855F7]', bg: 'bg-purple-50 border-purple-200' },
    { icon: Globe, label: 'Official Website', value: companyInfo.website, href: `https://${companyInfo.website}`, color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-200' },
    { icon: MapPin, label: 'Office Address', value: companyInfo.address, href: null, color: 'text-amber-600', bg: 'bg-amber-50 border-amber-200' },
  ];

  return (
    <div className="bg-[#FAF5FF] text-[#111827] min-h-screen">

      {/* 1. SECTION 1 — CINEMATIC HERO (Matched 1-to-1 with Home Page Hero Fade) */}
      <section className="relative min-h-[85vh] sm:min-h-screen flex flex-col justify-center items-center pt-28 pb-16 overflow-hidden border-b border-purple-100 bg-gradient-to-b from-[#F3E8FF] via-[#FAF5FF] to-[#FAF5FF]">
        {/* Background Image: Matched Home Page Opacity & Filter */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/contact_hero_bg.png"
            alt="TOMTOP SOLUTIONS Corporate Office Support Network"
            className="w-full h-full object-cover object-center opacity-65 filter contrast-115 brightness-105 saturate-120 pointer-events-none transition-all duration-700"
          />
          {/* Soft Violet Overlay Matched to Home Page */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF5FF]/20 via-[#FAF5FF]/40 to-[#FAF5FF] z-10 pointer-events-none" />
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
            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
            <span className="uppercase tracking-widest text-[11px]">Free Project Consultation</span>
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
            <span className="text-[#111827] font-bold">Contact Us</span>
          </motion.div>

          {/* Large Bold Heading: Matched to Home Page Style */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-3xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] text-[#111827] max-w-4xl mx-auto drop-shadow-sm"
          >
            Start Your Software <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4C1D95] via-[#6D28D9] to-[#7C3AED]">Project Today</span>
          </motion.h1>

          {/* Short Subtitle Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 sm:mt-6 text-[#374151] text-sm sm:text-xl max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Connect with Madurai’s senior software engineers & cloud architects. Get a free custom project proposal and architecture roadmap within 24 hours.
          </motion.p>

          {/* Two CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto"
          >
            <button
              onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })}
              className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#C084FC] hover:from-[#6D28D9] hover:to-[#7C3AED] text-white font-bold rounded-2xl shadow-xl shadow-purple-950/30 flex items-center justify-center space-x-2 text-sm group transition-all transform hover:-translate-y-0.5 active:scale-95 border border-purple-300/30"
            >
              <Send className="w-4 h-4 text-white" />
              <span>Fill Inquiry Form</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={`tel:${companyInfo.phone}`}
              className="w-full sm:w-auto px-7 py-3.5 bg-white/95 hover:bg-white text-[#111827] hover:text-[#7C3AED] border border-purple-200 font-semibold rounded-2xl transition-all text-center flex items-center justify-center space-x-2 text-sm shadow-md backdrop-blur-md active:scale-95"
            >
              <Phone className="w-4 h-4 text-[#7C3AED]" />
              <span>Call Tech Team</span>
            </a>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1.5 z-10 cursor-pointer"
        >
          <span className="text-[9px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest hidden sm:block">
            Scroll to Get in Touch
          </span>
          <div className="w-8 h-8 rounded-full bg-white border border-purple-200 flex items-center justify-center shadow-sm hover:border-[#7C3AED]">
            <ChevronDown className="w-4 h-4 text-[#7C3AED] animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* 2. SECTION 2 — TWO-COLUMN MAIN BODY (White Section) */}
      <section className="py-12 sm:py-24 bg-white border-b border-purple-100 relative overflow-hidden text-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">

            {/* ── LEFT: CONTACT FORM ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 rounded-2xl sm:rounded-[28px] border border-purple-100 bg-white backdrop-blur-2xl shadow-xl shadow-purple-900/5 overflow-hidden relative"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/50 to-transparent" />

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
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shadow-lg shadow-emerald-500/10">
                        <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-600" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#111827]">Message Sent!</h3>
                      <p className="text-slate-600 max-w-xs text-xs sm:text-sm leading-relaxed">
                        Thank you, <strong className="text-[#111827]">{formData.name}</strong>. We'll review your message and reply within 24 hours.
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
                        <h2 className="text-xl sm:text-2xl font-extrabold text-[#111827]">Send a Message</h2>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1 sm:mt-1.5">Our technical team will get back to you within 24 business hours.</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="space-y-1 sm:space-y-1.5">
                          <label className="text-[10px] sm:text-xs font-bold text-slate-600 uppercase tracking-wider">Full Name *</label>
                          <input
                            type="text" required value={formData.name}
                            onFocus={() => setFocused('name')} onBlur={() => setFocused('')}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Anand Kumar"
                            className={inputClass('name')}
                          />
                        </div>
                        <div className="space-y-1 sm:space-y-1.5">
                          <label className="text-[10px] sm:text-xs font-bold text-slate-600 uppercase tracking-wider">Email Address *</label>
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
                          <label className="text-[10px] sm:text-xs font-bold text-slate-600 uppercase tracking-wider">Phone Number *</label>
                          <input
                            type="tel" required value={formData.phone}
                            onFocus={() => setFocused('phone')} onBlur={() => setFocused('')}
                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 96777 51745"
                            className={inputClass('phone')}
                          />
                        </div>
                        <div className="space-y-1 sm:space-y-1.5">
                          <label className="text-[10px] sm:text-xs font-bold text-slate-600 uppercase tracking-wider">Subject</label>
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
                        <label className="text-[10px] sm:text-xs font-bold text-slate-600 uppercase tracking-wider">Project Details *</label>
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
                        className="w-full py-3.5 sm:py-4 bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#C084FC] hover:from-[#6D28D9] hover:to-[#7C3AED] text-white font-bold rounded-xl sm:rounded-2xl shadow-lg shadow-purple-600/30 flex items-center justify-center space-x-2 text-xs sm:text-base transition-all active:scale-95"
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
              <div className="rounded-2xl sm:rounded-[24px] border border-purple-100 bg-white backdrop-blur-2xl p-5 sm:p-7 shadow-xl shadow-purple-900/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />
                <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#7C3AED] mb-1">Software Engineering Studio</p>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#111827]">{companyInfo.name}</h3>
                <p className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5">Founded by {companyInfo.founder}</p>

                <div className="mt-4 sm:mt-5 flex items-center space-x-2 text-[10px] sm:text-xs text-[#111827] bg-purple-50/70 border border-purple-100 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl w-fit">
                  <Clock className="w-3.5 h-3.5 text-[#7C3AED] shrink-0" />
                  <span>Business Hours: {companyInfo.hours}</span>
                </div>
              </div>

              {/* Contact detail cards */}
              {contactItems.map(({ icon: Icon, label, value, href, color, bg }) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -3, scale: 1.01 }}
                  className="rounded-xl sm:rounded-[20px] border border-purple-100 bg-white p-4 sm:p-5 flex items-center space-x-3.5 sm:space-x-4 hover:border-[#C084FC] transition-all duration-300 shadow-lg shadow-purple-900/5"
                >
                  <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl ${bg} border flex items-center justify-center shrink-0`}>
                    <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${color}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                        className={`text-xs sm:text-sm font-bold ${color} hover:underline transition-colors truncate block`}>
                        {value}
                      </a>
                    ) : (
                      <span className="text-xs sm:text-sm font-bold text-[#111827]">{value}</span>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* WhatsApp CTA */}
              <motion.a
                href="https://wa.me/919677751745"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center space-x-2.5 sm:space-x-3 w-full py-3.5 sm:py-4 rounded-xl sm:rounded-[20px] bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-600/25 transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Chat on WhatsApp — Instant Response</span>
              </motion.a>

              {/* Map glass frame */}
              <div className="rounded-xl sm:rounded-[20px] border border-purple-100 bg-white overflow-hidden shadow-lg shadow-purple-900/5">
                <div className="px-4 py-3 sm:px-5 sm:py-3.5 border-b border-purple-100 flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] sm:text-[11px] font-bold text-slate-600 uppercase tracking-wider">Madurai HQ — Live Location</span>
                </div>
                <div className="h-36 sm:h-44 relative">
                  <iframe
                    title="TomTop Solutions Location"
                    src="https://maps.google.com/maps?q=Madurai,TamilNadu,India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    allowFullScreen="" loading="lazy"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. SECTION 3 — FAQ ACCORDION (Soft Violet Background) */}
      <section className="py-12 sm:py-24 bg-[#FAF5FF] border-b border-purple-100 relative overflow-hidden text-[#111827]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-14">
            <span className="text-[#7C3AED] font-bold text-[9px] sm:text-[10px] uppercase tracking-widest bg-purple-100 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full border border-purple-200 shadow-sm">
              Common Questions
            </span>
            <h2 className="text-xl sm:text-5xl font-extrabold text-[#111827] mt-2.5 sm:mt-4 tracking-tight">
              Frequently Asked
            </h2>
          </div>

          <div className="space-y-2.5 sm:space-y-3">
            {faqData.map((faq, i) => (
              <div
                key={i}
                className={`rounded-xl sm:rounded-2xl border transition-all duration-300 overflow-hidden ${openFaq === i
                    ? 'border-[#7C3AED] bg-white shadow-md'
                    : 'border-purple-100 bg-white hover:border-purple-200'
                  }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-4 py-3.5 sm:px-6 sm:py-5 flex items-start justify-between space-x-3 sm:space-x-4 group"
                >
                  <div className="flex items-start space-x-3 sm:space-x-3.5">
                    <HelpCircle className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5 transition-colors ${openFaq === i ? 'text-[#7C3AED]' : 'text-slate-400 group-hover:text-slate-600'}`} />
                    <span className={`font-bold text-xs sm:text-sm leading-snug transition-colors ${openFaq === i ? 'text-[#7C3AED]' : 'text-[#111827]'}`}>
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 shrink-0 transition-transform duration-300 mt-0.5 ${openFaq === i ? 'rotate-180 text-[#7C3AED]' : ''}`} />
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
                      <p className="px-4 pb-4 pl-10 sm:px-6 sm:pb-5 sm:pl-[3.625rem] text-slate-600 text-xs sm:text-sm leading-relaxed">
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
