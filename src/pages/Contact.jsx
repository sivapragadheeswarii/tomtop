import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail, Phone, MapPin, Globe, Send, CheckCircle,
  Clock, Sparkles, MessageCircle, ChevronDown,
  HelpCircle, ArrowRight, Loader2
} from 'lucide-react';
import { companyInfo, faqData } from '../data/companyData';

export default function Contact() {
  const { onOpenQuote } = useOutletContext();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [focused, setFocused] = useState('');

  const triggerMailto = () => {
    const recipient = "info@tomtopsolutions.com";
    const subject = encodeURIComponent(formData.subject || `New Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject || 'N/A'}\n\nMessage / Project Details:\n${formData.message}`
    );
    window.open(`mailto:${recipient}?subject=${subject}&body=${body}`, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@tomtopsolutions.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject || "TomTop Solutions Website Inquiry",
          message: formData.message,
          _subject: `New Inquiry from ${formData.name} (${formData.email})`,
          _template: "table"
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        triggerMailto();
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Form submission error:", err);
      triggerMailto();
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  const inputClass = (field) =>
    `w-full px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-xl bg-blue-50/50 text-[#111827] outline-none text-xs sm:text-sm font-medium placeholder:text-slate-400 transition-all duration-300 ${focused === field
      ? 'border-[#2563EB] border-2 shadow-sm bg-white'
      : 'border border-blue-200 hover:border-blue-300'
    }`;

  const contactItems = [
    { icon: Phone, label: 'Direct Line', value: companyInfo.phone, href: `tel:${companyInfo.phone}`, color: 'text-[#2563EB]', bg: 'bg-blue-50 border-blue-200' },
    { icon: Mail, label: 'Email Address', value: companyInfo.email, href: `mailto:${companyInfo.email}`, color: 'text-[#3B82F6]', bg: 'bg-blue-50 border-blue-200' },
    { icon: MapPin, label: 'Office Address', value: companyInfo.address, href: null, color: 'text-amber-600', bg: 'bg-amber-50 border-amber-200' },
  ];

  return (
    <div className="bg-[#F0F7FF] text-[#111827] min-h-screen">

      {/* 1. Header Hero Banner (Full 100dvh Viewport Constraint) */}
      <section className="relative h-[100dvh] min-h-[100dvh] sm:min-h-screen flex flex-col justify-between items-center pt-20 pb-4 sm:pt-36 sm:pb-12 lg:pt-40 lg:pb-24 overflow-hidden border-b border-blue-100 bg-gradient-to-b from-[#EBF3FF] via-[#F0F7FF] to-[#F8FAFC]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/contact_hero_bg.png"
            alt="TOMTOP SOLUTIONS Corporate Office Support Network"
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
            <Mail className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
            <span className="truncate">Direct Engineering Desk &amp; Consultation</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.15] sm:leading-[1.1] text-[#0F172A] max-w-4xl mx-auto drop-shadow-xs px-1"
          >
            Start Your Software <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6]">Project Today</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-slate-600 text-xs sm:text-lg max-w-xs xs:max-w-sm sm:max-w-2xl mx-auto font-medium leading-relaxed px-2"
          >
            Connect with Madurai’s senior software engineers &amp; cloud architects. Get a free custom project proposal and architecture roadmap within 24 hours.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3.5 pt-1 sm:pt-2 max-w-xs xs:max-w-sm sm:max-w-none mx-auto w-full"
          >
            <button
              onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white font-black rounded-xl sm:rounded-2xl shadow-xl shadow-blue-600/25 flex items-center justify-center space-x-2 sm:space-x-2.5 text-xs sm:text-base group transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer border border-blue-300/30"
            >
              <Send className="w-4 h-4 text-white shrink-0" />
              <span>Fill Inquiry Form</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <a
              href={`tel:${companyInfo.phone}`}
              className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-4 bg-white/95 hover:bg-blue-50 border border-blue-200 text-[#0F172A] font-bold rounded-xl sm:rounded-2xl transition-all flex items-center justify-center space-x-2 text-xs sm:text-base hover:border-[#3B82F6] hover:text-[#2563EB] active:scale-95 shadow-sm backdrop-blur-md"
            >
              <Phone className="w-4 h-4 text-[#2563EB]" />
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
          className="mt-auto pt-2 flex flex-col items-center space-y-1 relative z-20 cursor-pointer"
        >
          <span className="text-[9px] font-bold uppercase tracking-widest text-blue-700/70 hidden sm:block">Scroll</span>
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-blue-200 flex items-center justify-center hover:border-[#2563EB] shadow-sm">
            <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2563EB]" />
          </div>
        </motion.div>
      </section>

      {/* 2. SECTION 2 — TWO-COLUMN MAIN BODY */}
      <section className="py-10 sm:py-24 bg-white border-b border-blue-100 relative overflow-hidden text-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-10 items-start">

            {/* ── LEFT: CONTACT FORM ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 rounded-2xl sm:rounded-[28px] border border-blue-100 bg-white backdrop-blur-2xl shadow-lg sm:shadow-xl shadow-blue-900/5 overflow-hidden relative"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#2563EB]/50 to-transparent" />

              <div className="p-4 sm:p-10">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center py-10 sm:py-20 text-center space-y-3 sm:space-y-5"
                    >
                      <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shadow-md">
                        <CheckCircle className="w-7 h-7 sm:w-10 sm:h-10 text-emerald-600" />
                      </div>
                      <h3 className="text-lg sm:text-2xl font-extrabold text-[#111827]">Message Sent to Mail!</h3>
                      <p className="text-slate-600 max-w-xs text-xs sm:text-sm leading-relaxed">
                        Thank you! Your message has been routed directly to <strong className="text-[#2563EB]">info@tomtopsolutions.com</strong>. We will reply within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-3.5 sm:space-y-6"
                    >
                      <div>
                        <h2 className="text-lg sm:text-2xl font-extrabold text-[#111827]">Send a Message</h2>
                        <p className="text-xs text-slate-600 mt-0.5 sm:mt-1.5">Directly sends your message to info@tomtopsolutions.com</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] sm:text-xs font-bold text-slate-600 uppercase tracking-wider">Full Name *</label>
                          <input
                            type="text" required value={formData.name}
                            onFocus={() => setFocused('name')} onBlur={() => setFocused('')}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                            placeholder="John Doe"
                            className={inputClass('name')}
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] sm:text-xs font-bold text-slate-600 uppercase tracking-wider">Email Address *</label>
                          <input
                            type="email" required value={formData.email}
                            onFocus={() => setFocused('email')} onBlur={() => setFocused('')}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john@company.com"
                            className={inputClass('email')}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] sm:text-xs font-bold text-slate-600 uppercase tracking-wider">Phone Number *</label>
                          <input
                            type="tel" required value={formData.phone}
                            onFocus={() => setFocused('phone')} onBlur={() => setFocused('')}
                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 96777 57145"
                            className={inputClass('phone')}
                          />
                        </div>
                        <div className="space-y-1">
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

                      <div className="space-y-1">
                        <label className="text-[10px] sm:text-xs font-bold text-slate-600 uppercase tracking-wider">Project Details *</label>
                        <textarea
                          rows="3" required value={formData.message}
                          onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
                          onChange={e => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your project requirements, timeline, and budget..."
                          className={`${inputClass('message')} resize-none`}
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.01, y: -1 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full py-3 sm:py-4 bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#60A5FA] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white font-black rounded-xl sm:rounded-2xl shadow-md shadow-blue-600/30 flex items-center justify-center space-x-2 text-xs sm:text-base transition-all active:scale-95 disabled:opacity-70 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                            <span>Sending Email...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span>Send Message to Mail</span>
                            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </>
                        )}
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
              className="lg:col-span-5 space-y-3.5 sm:space-y-5"
            >
              <div className="rounded-2xl sm:rounded-[24px] border border-blue-100 bg-white backdrop-blur-2xl p-4 sm:p-7 shadow-md sm:shadow-xl shadow-blue-900/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
                <p className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#2563EB] mb-0.5">Software Engineering Studio</p>
                <h3 className="text-base sm:text-xl font-extrabold text-[#111827]">{companyInfo.name}</h3>
                <p className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5">Enterprise Software &amp; Cloud Solutions Studio</p>

                <div className="mt-3 sm:mt-5 flex items-center space-x-2 text-[10px] sm:text-xs text-[#111827] bg-blue-50/70 border border-blue-100 px-3 py-1.5 sm:px-3.5 sm:py-2.5 rounded-xl w-fit">
                  <Clock className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                  <span>Business Hours: {companyInfo.hours}</span>
                </div>
              </div>

              {contactItems.map(({ icon: Icon, label, value, href, color, bg }) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -2, scale: 1.01 }}
                  className="rounded-xl sm:rounded-[20px] border border-blue-100 bg-white p-3.5 sm:p-5 flex items-center space-x-3 sm:space-x-4 hover:border-[#60A5FA] transition-all duration-300 shadow-sm sm:shadow-lg shadow-blue-900/5"
                >
                  <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl ${bg} border flex items-center justify-center shrink-0`}>
                    <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${color}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-0.5">{label}</p>
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

              <motion.a
                href="https://wa.me/919677757145"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.01, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center space-x-2 sm:space-x-3 w-full py-3 sm:py-4 rounded-xl sm:rounded-[20px] bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-emerald-600/25 transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Chat on WhatsApp — Instant Response</span>
              </motion.a>

              <div className="rounded-xl sm:rounded-[20px] border border-blue-100 bg-white overflow-hidden shadow-sm sm:shadow-lg shadow-blue-900/5">
                <div className="px-3.5 py-2.5 sm:px-5 sm:py-3.5 border-b border-blue-100 flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] sm:text-[11px] font-bold text-slate-600 uppercase tracking-wider">Madurai HQ — Live Location</span>
                </div>
                <div className="h-32 sm:h-44 relative">
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

      {/* 3. SECTION 3 — FAQ ACCORDION */}
      <section className="py-12 sm:py-24 bg-[#F0F7FF] border-b border-blue-100 relative overflow-hidden text-[#111827]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-14">
            <span className="text-[#2563EB] font-bold text-[9px] sm:text-[10px] uppercase tracking-widest bg-blue-100 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full border border-blue-200 shadow-sm">
              Common Questions
            </span>
            <h2 className="text-xl sm:text-5xl font-black text-[#111827] mt-2.5 sm:mt-4 tracking-tight">
              Frequently <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6]">Asked Questions</span>
            </h2>
          </div>

          <div className="space-y-2.5 sm:space-y-3">
            {faqData.map((faq, i) => (
              <div
                key={i}
                className={`rounded-xl sm:rounded-2xl border transition-all duration-300 overflow-hidden ${openFaq === i
                  ? 'border-[#2563EB] bg-white shadow-md'
                  : 'border-blue-100 bg-white hover:border-blue-200'
                  }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-4 py-3.5 sm:px-6 sm:py-5 flex items-start justify-between space-x-3 sm:space-x-4 group"
                >
                  <div className="flex items-start space-x-3 sm:space-x-3.5">
                    <HelpCircle className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5 transition-colors ${openFaq === i ? 'text-[#2563EB]' : 'text-slate-400 group-hover:text-slate-600'}`} />
                    <span className={`font-bold text-xs sm:text-sm leading-snug transition-colors ${openFaq === i ? 'text-[#2563EB]' : 'text-[#111827]'}`}>
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 shrink-0 transition-transform duration-300 mt-0.5 ${openFaq === i ? 'rotate-180 text-[#2563EB]' : ''}`} />
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
