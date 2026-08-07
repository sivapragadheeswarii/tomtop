import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ dark = false, onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className={`flex items-center group cursor-pointer shrink-0 transition-transform duration-300 hover:scale-105 ${
        dark ? '' : 'bg-white/95 px-3 py-1.5 rounded-xl shadow-md border border-blue-200/60'
      }`}
    >
      <img
        src="/images/logo.png"
        alt="TOMTOP SOLUTIONS Logo"
        className="h-8 sm:h-11 w-auto object-contain"
      />
    </Link>
  );
}
