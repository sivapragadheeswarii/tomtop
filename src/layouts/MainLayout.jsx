import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import QuoteModal from '../components/QuoteModal';
import { useScrollToTop } from '../hooks/useScrollTop';

export default function MainLayout() {
  useScrollToTop();
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenQuote = (serviceName = '') => {
    setSelectedService(serviceName);
    setQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#1E293B]">
      {/* Navbar */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Outlet context={{ onOpenQuote: handleOpenQuote }} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating Widgets */}
      <ScrollToTop />
      <WhatsAppButton />

      {/* Quote Request Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuote}
        selectedService={selectedService}
      />
    </div>
  );
}
