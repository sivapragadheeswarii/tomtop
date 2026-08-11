import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, ChevronRight, Sparkles, Home,
  Info, Layers, Briefcase, Mail, ArrowRight, MessageCircle, Phone, Box, GraduationCap
} from 'lucide-react';
import { companyInfo } from '../data/companyData';
import Logo from './Logo';

export default function Navbar({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: Home, desc: 'Enterprise Main Portal' },
    { name: 'About', path: '/about', icon: Info, desc: 'Our Positioning & Mission' },
    { name: 'Services', path: '/services', icon: Layers, desc: 'Core 6 IT Service Pillars' },
    { name: 'Products', path: '/products', icon: Box, desc: 'ClearBill, KTS & GuruDesk' },
    { name: 'Portfolio', path: '/portfolio', icon: Briefcase, desc: 'Client Solutions & Showcase' },
    { name: 'Careers', path: '/careers', icon: GraduationCap, desc: 'Join Our Team' },
    { name: 'Contact', path: '/contact', icon: Mail, desc: 'Get Free Proposal & Support' }
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-3 sm:top-5 left-3 sm:left-6 right-3 sm:right-6 z-50 max-w-7xl mx-auto"
    >
      {/* Floating Light Glass Navbar Container */}
      <div
        style={{
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.92)' : 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderColor: mobileMenuOpen ? 'rgba(96, 165, 250, 0.5)' : 'rgba(191, 219, 254, 0.9)'
        }}
        className="px-3.5 sm:px-6 py-2.5 sm:py-3 rounded-full border shadow-[0_10px_30px_-5px_rgba(37,99,235,0.08)] transition-all duration-300 relative z-50"
      >
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Logo dark={true} onClick={() => setMobileMenuOpen(false)} />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 bg-blue-50/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-blue-100/80 shadow-inner">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 group flex items-center justify-center ${
                    active
                      ? 'text-white font-bold bg-gradient-to-r from-[#2563EB] to-[#3B82F6] shadow-md shadow-blue-500/30'
                      : 'text-[#111827] hover:text-[#2563EB] hover:bg-white'
                  }`}
                >
                  <span>{link.name}</span>

                  {!active && (
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#2563EB] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button (Desktop) & Mobile Toggle */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Desktop / Tablet "Get Quote" Button */}
            <button
              onClick={onOpenQuote}
              className="hidden sm:flex bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#60A5FA] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/45 items-center space-x-2 group transition-all transform hover:-translate-y-0.5"
            >
              <span>Get Quote</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 rounded-full text-[#111827] bg-blue-50 hover:bg-blue-100 active:scale-95 transition-all border border-blue-200 flex items-center justify-center shrink-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#2563EB]" /> : <Menu className="w-5 h-5 text-[#111827]" />}
            </button>
          </div>

        </div>
      </div>

      {/* Sleek Compact Mobile Drawer Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              borderColor: 'rgba(191, 219, 254, 0.9)'
            }}
            className="md:hidden mt-2 border rounded-2xl p-3 shadow-[0_15px_40px_rgba(37,99,235,0.15)] text-[#111827] relative overflow-hidden"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-28 h-28 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />

            {/* Compact Navigation List */}
            <div className="space-y-1 relative z-10">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                const LinkIcon = link.icon;

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2 rounded-xl flex items-center justify-between text-xs font-bold transition-all duration-200 ${
                      active
                        ? 'bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white shadow-md'
                        : 'bg-blue-50/50 border border-blue-100 hover:bg-blue-50 text-[#111827]'
                    }`}
                  >
                    <div className="flex items-center space-x-2.5">
                      <LinkIcon className={`w-4 h-4 ${active ? 'text-white' : 'text-[#2563EB]'}`} />
                      <span>{link.name}</span>
                    </div>

                    <ArrowRight className={`w-3.5 h-3.5 transition-transform ${active ? 'text-white translate-x-0.5' : 'text-slate-400'}`} />
                  </Link>
                );
              })}
            </div>

            {/* Compact Action Footer Row */}
            <div className="flex items-center space-x-2 pt-2.5 mt-2.5 border-t border-blue-100 relative z-10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="flex-1 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white font-bold py-2 px-3 rounded-xl shadow-md flex items-center justify-center space-x-1.5 text-xs hover:brightness-110 active:scale-95 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Get Proposal</span>
              </button>

              <a
                href={`tel:${companyInfo.phone}`}
                className="p-2 rounded-xl bg-blue-50 border border-blue-200 text-[#111827] hover:text-[#2563EB] transition-colors"
                aria-label="Call"
              >
                <Phone className="w-4 h-4 text-[#2563EB]" />
              </a>

              <a
                href="https://wa.me/919677757145"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 hover:border-emerald-400 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
