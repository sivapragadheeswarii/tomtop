import React from 'react';
import { MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(companyInfo.whatsappMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center border-2 border-white group"
      aria-label="Chat on WhatsApp"
      title="Chat with TOMTOP SOLUTIONS on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-current text-white" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-xs font-bold pl-0 group-hover:pl-2">
        Chat with Us
      </span>
    </a>
  );
}
