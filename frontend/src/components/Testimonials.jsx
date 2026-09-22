import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Sparkles, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { fetchTestimonials } from '../services/api';
import { initialTestimonials } from '../data/mockData';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const loadTestimonials = async () => {
      const data = await fetchTestimonials();
      if (data && data.length > 0) setTestimonials(data);
    };
    loadTestimonials();
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-forest-800 text-earth-50 relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-forest-600/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-terracotta-500/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-700 text-terracotta-300 text-xs font-bold uppercase tracking-widest mb-4 border border-forest-600 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-terracotta-400" />
            <span>Verified Client Stories</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight">
            Trusted by Leaders, Executives, <br className="hidden sm:inline" />
            <span className="text-terracotta-300 font-normal italic">& Discerning Families</span>
          </h2>

          <p className="text-base sm:text-lg text-earth-200 font-normal mt-5 leading-relaxed max-w-2xl mx-auto">
            Read real stories from buyers and sellers who navigated relocation and high-stakes transactions with Sanjeevini Estates.
          </p>
        </motion.div>

        {/* Testimonials Showcase with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="p-8 sm:p-14 rounded-3xl bg-forest-700/60 border border-forest-600/80 backdrop-blur-md shadow-earth-lg relative"
          >
            <Quote className="w-14 h-14 text-terracotta-500/25 absolute top-8 right-8" />

            {/* Rating Stars */}
            <div className="flex items-center gap-1.5 mb-6">
              {[...Array(testimonials[activeIndex].rating || 5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-terracotta-400 text-terracotta-400" />
              ))}
              <span className="text-xs font-bold uppercase tracking-wider text-terracotta-300 ml-2">Verified Transaction</span>
            </div>

            {/* Quote */}
            <p className="font-serif text-2xl sm:text-3xl text-white italic leading-relaxed mb-10">
              "{testimonials[activeIndex].quote}"
            </p>

            {/* Author details */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-8 border-t border-forest-600/80">
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].name}
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-terracotta-500/60 shadow-sm"
                />
                <div>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-xs sm:text-sm text-earth-200 mt-0.5">
                    {testimonials[activeIndex].role} • {testimonials[activeIndex].location}
                  </p>
                </div>
              </div>

              {/* Transaction Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-900/80 text-terracotta-300 text-xs font-semibold border border-forest-600/60 self-start sm:self-auto">
                <ShieldCheck className="w-4 h-4 text-terracotta-400" />
                <span>{testimonials[activeIndex].transactionType}</span>
              </div>
            </div>
          </motion.div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeIndex === idx ? 'w-8 bg-terracotta-400' : 'w-2.5 bg-forest-600 hover:bg-forest-500'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-forest-700/80 hover:bg-forest-600 text-white border border-forest-600 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-forest-700/80 hover:bg-forest-600 text-white border border-forest-600 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
