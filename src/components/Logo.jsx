import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ dark = false, onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="flex items-center space-x-2.5 sm:space-x-3 group cursor-pointer shrink-0"
    >
      {/* Shield & Circuit Nodes SVG Icon */}
      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-[#0B1F4D] via-[#1D4ED8] to-[#38BDF8] flex items-center justify-center shadow-lg shadow-blue-600/30 group-hover:scale-105 transition-transform p-1.5 shrink-0">
        <svg
          viewBox="0 0 100 120"
          className="w-full h-full text-white fill-none stroke-current"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Shield Outline */}
          <path d="M 50 10 L 90 25 V 55 C 90 80 50 105 50 105 C 50 105 10 80 10 55 V 25 Z" fill="none" stroke="currentColor" strokeWidth="7" />
          
          {/* Central Stem */}
          <line x1="50" y1="75" x2="50" y2="40" stroke="currentColor" strokeWidth="6" />
          
          {/* Central Circuit Node */}
          <circle cx="50" cy="75" r="5" fill="currentColor" />
          
          {/* Top Left Node & Trace */}
          <line x1="50" y1="55" x2="35" y2="40" stroke="currentColor" strokeWidth="5" />
          <circle cx="33" cy="38" r="4.5" fill="currentColor" />
          
          {/* Top Right Node & Trace */}
          <line x1="50" y1="55" x2="65" y2="40" stroke="currentColor" strokeWidth="5" />
          <circle cx="67" cy="38" r="4.5" fill="currentColor" />
          
          {/* Top Center Node */}
          <circle cx="50" cy="32" r="4.5" fill="currentColor" />
        </svg>
      </div>

      <div className="flex flex-col">
        <span
          className={`font-extrabold text-base sm:text-xl tracking-tight leading-none ${
            dark ? 'text-[#0B1F4D]' : 'text-white'
          }`}
        >
          TOMTOP
        </span>
        <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.18em] sm:tracking-[0.2em] text-[#38BDF8] uppercase">
          SOLUTIONS
        </span>
      </div>
    </Link>
  );
}
