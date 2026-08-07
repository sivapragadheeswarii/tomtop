import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Send, Sparkles } from 'lucide-react';
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

  useEffect(() => {
    if (activeService) {
      setFormData(prev => ({ ...prev, service: activeService }));
    }
  }, [activeService]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-lg w-full p-6 sm:p-8 relative overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-[#0F172A] hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#111827]">Proposal Request Received!</h3>
              <p className="text-sm text-slate-600">
                Thank you, {formData.name}. Our technical team will reach out within 2 business hours.
              </p>
            </div>
          ) : (
            <div>
              <div className="flex items-center space-x-2 text-xs font-bold text-[#2563EB] mb-2 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#2563EB]" />
                <span>Instant Proposal Request</span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#111827]">Get a Custom Quote</h3>
              <p className="text-xs text-slate-500 mb-6">
                Fill out the details below to receive a custom engineering roadmap & price estimate.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div>
                  <label className="block font-bold text-[#111827] mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#111827] mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-[#111827] mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#111827] mb-1">Service Required</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-all bg-white"
                  >
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-[#111827] mb-1">Project Details</label>
                  <textarea
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#60A5FA] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white font-bold rounded-xl shadow-lg shadow-blue-600/30 flex items-center justify-center space-x-2 transition-all active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Quote Request</span>
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
