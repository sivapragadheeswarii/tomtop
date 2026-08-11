import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Send, Sparkles, Loader2 } from 'lucide-react';
import { servicesData } from '../data/companyData';

export default function QuoteModal({ isOpen, onClose, initialService = '', selectedService = '' }) {
  const activeService = selectedService || initialService || servicesData[0]?.title || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: activeService,
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (activeService) {
      setFormData(prev => ({ ...prev, service: activeService }));
    }
  }, [activeService]);

  if (!isOpen) return null;

  const triggerMailto = () => {
    const recipient = "info@tomtopsolutions.com";
    const subject = encodeURIComponent(`Quote Request: ${formData.service} from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService Required: ${formData.service}\n\nProject Details:\n${formData.message}`
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
          service: formData.service,
          message: formData.message,
          _subject: `New Quote Request: ${formData.service} from ${formData.name}`,
          _template: "table"
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        triggerMailto();
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Quote submission error:", err);
      triggerMailto();
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#0F172A]/75 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white rounded-2xl sm:rounded-3xl border border-blue-100 shadow-2xl max-w-lg w-full p-4 sm:p-7 relative overflow-hidden my-auto max-h-[92vh] overflow-y-auto scrollbar-none"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 p-1.5 sm:p-2 rounded-full text-slate-400 hover:text-[#0F172A] hover:bg-slate-100 bg-slate-50 border border-slate-200/80 transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {submitted ? (
            <div className="text-center py-8 sm:py-10 space-y-3 sm:space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#111827]">Proposal Request Delivered!</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Thank you, <strong className="text-[#2563EB]">{formData.name}</strong>. Your request has been emailed to <strong className="text-[#2563EB]">info@tomtopsolutions.com</strong>.
              </p>
            </div>
          ) : (
            <div>
              <div className="flex items-center space-x-1.5 text-[10px] sm:text-xs font-extrabold text-[#2563EB] mb-1 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Instant Proposal Request</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#111827] leading-tight">Get a Custom Quote</h3>
              <p className="text-xs text-slate-500 mb-3.5 sm:mb-5 leading-relaxed">
                Fill out the details below to receive a custom engineering roadmap &amp; price estimate.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                <div>
                  <label className="block font-extrabold text-[11px] sm:text-xs text-[#111827] mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-blue-200 bg-blue-50/30 focus:bg-white focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none text-xs font-semibold text-[#111827] transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block font-extrabold text-[11px] sm:text-xs text-[#111827] mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-blue-200 bg-blue-50/30 focus:bg-white focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none text-xs font-semibold text-[#111827] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-extrabold text-[11px] sm:text-xs text-[#111827] mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-blue-200 bg-blue-50/30 focus:bg-white focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none text-xs font-semibold text-[#111827] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-extrabold text-[11px] sm:text-xs text-[#111827] mb-1">Service Required</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-blue-200 bg-white focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none text-xs font-semibold text-[#111827] transition-all cursor-pointer"
                  >
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-extrabold text-[11px] sm:text-xs text-[#111827] mb-1">Project Details</label>
                  <textarea
                    rows="2.5"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your requirements..."
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-blue-200 bg-blue-50/30 focus:bg-white focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none text-xs font-semibold text-[#111827] transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 sm:py-3.5 bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#60A5FA] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white font-black text-xs sm:text-sm rounded-xl shadow-lg shadow-blue-600/30 flex items-center justify-center space-x-2 transition-all active:scale-95 disabled:opacity-70 mt-1 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Quote Request</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
