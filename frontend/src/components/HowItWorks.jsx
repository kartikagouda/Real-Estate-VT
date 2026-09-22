import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardList, UserCheck, Key, Compass, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function HowItWorks({ onOpenModal }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Share Your Vision & Preferences',
      subtitle: '2-Minute Lifestyle Discovery',
      description:
        'Tell us your desired location, architectural style, spatial requirements, and budget. No long forms or commitment needed.',
      icon: ClipboardList,
      previewBadge: 'Step 1: Discovery',
      previewImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      highlights: ['Lifestyle analysis', 'Off-market preference filter', 'Confidential intake'],
    },
    {
      number: '02',
      title: 'Curated Off-Market Matching',
      subtitle: '3–5 High-Fit Verified Properties',
      description:
        'Our advisory team screens private listings and matches you with verified properties before they hit public channels.',
      icon: UserCheck,
      previewBadge: 'Step 2: Private Curation',
      previewImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      highlights: ['Dedicated local advisor', 'Direct owner negotiations', 'Zero public listing spam'],
    },
    {
      number: '03',
      title: '3D Virtual Walkthroughs & On-Site Tours',
      subtitle: 'Remote or Private Guided Walkthroughs',
      description:
        'Inspect residences with 4K 3D interactive walkthroughs or schedule a private chauffeur-guided physical walkthrough.',
      icon: Compass,
      previewBadge: 'Step 3: Tour & Inspect',
      previewImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
      highlights: ['4K 3D Matterport tours', 'Structural inspection reports', 'Private chauffeur option'],
    },
    {
      number: '04',
      title: 'Close With Absolute Peace of Mind',
      subtitle: 'Transparent Escrow & Handover',
      description:
        'Our legal and escrow partners handle title verification, contract negotiations, and key transfer smoothly.',
      icon: Key,
      previewBadge: 'Step 4: Seamless Handover',
      previewImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
      highlights: ['In-house title attorney', 'Transparent closing fees', 'Welcome concierge service'],
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-earth-100/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-terracotta-100/90 text-terracotta-800 text-xs font-bold uppercase tracking-widest mb-4 border border-terracotta-200 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-terracotta-600" />
            <span>Simple 4-Step Process</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-charcoal-900 leading-[1.15] tracking-tight">
            From First Discovery to <span className="text-terracotta-600 font-normal italic">Key Handover</span>
          </h2>

          <p className="text-base sm:text-lg text-charcoal-700 font-normal mt-5 leading-relaxed max-w-2xl mx-auto">
            We removed the stress of real estate transactions by turning complex steps into a seamless guided workflow.
          </p>
        </motion.div>

        {/* Stepper Navigation Buttons for Mobile & Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                  isActive
                    ? 'bg-forest-700 text-white border-forest-800 shadow-earth-md scale-[1.02]'
                    : 'bg-white text-charcoal-800 border-earth-200 hover:border-earth-300 hover:bg-earth-50'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-serif text-2xl font-bold ${
                      isActive ? 'text-terracotta-300' : 'text-earth-500'
                    }`}
                  >
                    {step.number}
                  </span>
                  <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-forest-700'}`} />
                </div>
                <span className="text-base font-bold block leading-snug tracking-tight">{step.title}</span>
                <span
                  className={`text-xs mt-1.5 block font-medium ${
                    isActive ? 'text-earth-200' : 'text-earth-600'
                  }`}
                >
                  {step.subtitle}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Selected Step Display Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-7 sm:p-12 border border-earth-200 shadow-earth-lg"
        >
          {/* Left Step Details */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-100 text-forest-800 text-xs font-bold uppercase tracking-wider mb-4 w-fit border border-forest-200">
              {steps[activeStep].previewBadge}
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 mb-4 tracking-tight">
              {steps[activeStep].title}
            </h3>

            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed mb-8 font-normal">
              {steps[activeStep].description}
            </p>

            <div className="space-y-3 mb-8">
              {steps[activeStep].highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3 text-sm sm:text-base text-charcoal-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-forest-700 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div>
              <button
                onClick={() => onOpenModal({ source: `how_it_works_step_${activeStep + 1}` })}
                className="px-8 py-4 rounded-2xl bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold text-sm sm:text-base shadow-glow-terracotta transition-all inline-flex items-center gap-2.5 transform active:scale-95"
              >
                <span>Start Step {activeStep + 1} Discovery</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          {/* Right Visual Image Preview */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-earth-md border border-earth-200 h-[300px] sm:h-[380px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={steps[activeStep].number}
                  src={steps[activeStep].previewImage}
                  alt={steps[activeStep].title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 glass-dark text-white rounded-xl text-xs flex items-center justify-between">
                <span>Sanjeevini Concierge Flow</span>
                <span className="font-bold text-terracotta-300">Phase {activeStep + 1} of 4</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
