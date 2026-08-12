import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, ArrowRight, UserCheck } from 'lucide-react';
import { companyInfo, servicesData } from '../data/companyData';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E3A8A] text-blue-200 pt-8 sm:pt-16 pb-6 sm:pb-8 border-t border-blue-800/60 relative overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/20 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-10 pb-6 sm:pb-12 border-b border-blue-800/80">
          
          {/* 1. Brand Info Column */}
          <div className="lg:col-span-4 space-y-3 sm:space-y-4">
            <Logo dark={false} />

            {/* Hidden on Mobile for Minimal Layout */}
            <p className="hidden sm:block text-blue-200/90 text-xs sm:text-sm leading-relaxed max-w-sm">
              {companyInfo.shortDesc}
            </p>

            {/* Hidden on Mobile */}
            <div className="hidden sm:flex items-center space-x-2 text-xs text-[#60A5FA] font-semibold bg-blue-900/60 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border border-blue-700/60 max-w-sm backdrop-blur-md">
              <UserCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Senior Software Engineering &amp; Tech Lead Team</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-2.5 pt-1">
              <a
                href={companyInfo.socials?.linkedin || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-900/60 hover:bg-[#2563EB] text-blue-200 hover:text-white flex items-center justify-center transition-all duration-300 border border-blue-700/60"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              </a>

              <a
                href={companyInfo.socials?.twitter || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-900/60 hover:bg-[#2563EB] text-blue-200 hover:text-white flex items-center justify-center transition-all duration-300 border border-blue-700/60"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
              </a>

              <a
                href={companyInfo.socials?.facebook || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-900/60 hover:bg-[#2563EB] text-blue-200 hover:text-white flex items-center justify-center transition-all duration-300 border border-blue-700/60"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/></svg>
              </a>
            </div>
          </div>

          {/* 2. Quick Links Column (Show 4 Key Links on Mobile) */}
          <div className="lg:col-span-3 space-y-2.5 sm:space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest text-[#60A5FA]">
              Navigation
            </h4>
            
            {/* Mobile View: 4 Key Links */}
            <ul className="grid grid-cols-2 gap-2 text-xs sm:hidden">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-[#60A5FA] transition-colors inline-flex items-center space-x-1 text-blue-200"
                  >
                    <ArrowRight className="w-3 h-3 text-[#60A5FA] shrink-0" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop View: Full Navigation */}
            <ul className="hidden sm:flex sm:flex-col space-y-2 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Products', path: '/products' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Careers', path: '/careers' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-[#60A5FA] transition-colors inline-flex items-center space-x-1.5 text-blue-200"
                  >
                    <ArrowRight className="w-3 h-3 text-[#60A5FA] shrink-0" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Solutions Column — hidden on mobile */}
          <div className="hidden md:block lg:col-span-2 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest text-[#60A5FA]">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <Link
                    to="/services"
                    className="hover:text-[#60A5FA] transition-colors inline-flex items-center space-x-1.5 text-blue-200"
                  >
                    <ArrowRight className="w-3 h-3 text-[#60A5FA] shrink-0" />
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact Details Column (Ultra-compact on Mobile) */}
          <div className="lg:col-span-3 space-y-2.5 sm:space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest text-[#60A5FA]">
              Contact Us
            </h4>

            {/* Mobile: 2 Compact Contact Buttons */}
            <div className="grid grid-cols-2 gap-2 md:hidden">
              <a href={`tel:${companyInfo.phone}`} className="flex items-center justify-center space-x-1.5 bg-blue-900/60 border border-blue-700/60 rounded-lg px-2.5 py-2 hover:border-[#60A5FA]/40 transition-colors">
                <Phone className="w-3 h-3 text-[#60A5FA] shrink-0" />
                <span className="text-[11px] font-semibold text-white truncate">Call Us</span>
              </a>
              <a href={`mailto:${companyInfo.email}`} className="flex items-center justify-center space-x-1.5 bg-blue-900/60 border border-blue-700/60 rounded-xl px-2.5 py-2 hover:border-[#60A5FA]/40 transition-colors overflow-hidden">
                <Mail className="w-3 h-3 text-[#60A5FA] shrink-0" />
                <span className="text-[11px] font-semibold text-white truncate">Email Us</span>
              </a>
            </div>

            {/* Desktop: full contact list */}
            <ul className="hidden md:flex flex-col space-y-3 text-xs text-blue-200">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#60A5FA] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{companyInfo.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#60A5FA] shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="hover:text-[#60A5FA] transition-colors">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#60A5FA] shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-[#60A5FA] transition-colors">
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Globe className="w-4 h-4 text-[#60A5FA] shrink-0" />
                <a href={`https://${companyInfo.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#60A5FA] transition-colors">
                  {companyInfo.website}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-4 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-blue-300/80 gap-2 sm:gap-4 text-center sm:text-left">
          <p>© {currentYear} {companyInfo.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
