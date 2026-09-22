import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import ProblemStatement from './components/ProblemStatement';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import FeaturedListings from './components/FeaturedListings';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import LeadModal from './components/LeadModal';
import Toast from './components/Toast';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState(null);
  const [toast, setToast] = useState(null);
  const [searchFilters, setSearchFilters] = useState(null);

  const handleOpenModal = (data = null) => {
    setModalInitialData(data);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalInitialData(null);
  };

  const showToast = (toastData) => {
    setToast(toastData);
  };

  const handleSearch = (filters) => {
    setSearchFilters(filters);
    // Smooth scroll down to listings section
    const listingsEl = document.getElementById('listings');
    if (listingsEl) {
      listingsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-earth-50 text-charcoal-800 font-sans selection:bg-terracotta-500 selection:text-white">
      {/* Navigation */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Conversion Flow */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenModal={handleOpenModal} onSearch={handleSearch} />

        {/* 2. Social Proof & Trust Strip */}
        <SocialProof />

        {/* 3. Problem Statement & Cost of Delay */}
        <ProblemStatement onOpenModal={handleOpenModal} />

        {/* 4. Solution & Havenwood Advantage */}
        <Solution onOpenModal={handleOpenModal} />

        {/* 5. How It Works - 4 Step Stepper */}
        <HowItWorks onOpenModal={handleOpenModal} />

        {/* Featured Portfolio Gallery */}
        <FeaturedListings onSelectProperty={handleOpenModal} searchFilters={searchFilters} />

        {/* 6. Testimonials & Client Stories */}
        <Testimonials />

        {/* 7. FAQ Accordion */}
        <FAQ onOpenModal={handleOpenModal} />

        {/* 8. Final Conversion CTA */}
        <FinalCTA onOpenModal={handleOpenModal} showToast={showToast} />
      </main>

      {/* Footer */}
      <Footer showToast={showToast} />

      {/* Lead Capture Modal Dialog */}
      <LeadModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        initialData={modalInitialData}
        showToast={showToast}
      />

      {/* Toast Feedback Banner */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
