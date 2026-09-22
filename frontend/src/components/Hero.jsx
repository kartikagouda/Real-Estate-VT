import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Star,
  ShieldCheck,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Eye,
  Radio,
} from 'lucide-react';
import SearchBar from './SearchBar';

export default function Hero({ onOpenModal, onSearch }) {
  const slides = [
    {
      id: 1,
      title: 'The Solstice Sanctuary Villa',
      location: 'Aspen Highlands, CO',
      specs: '5 Beds • 6 Baths • 6,200 Sq.Ft',
      price: '$4,850,000',
      tag: 'Architectural Choice',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=90',
      brightness: 0.82,
    },
    {
      id: 2,
      title: 'The Organic Modern Residence',
      location: 'Montecito Foothills, CA',
      specs: '4 Beds • 5 Baths • 5,400 Sq.Ft',
      price: '$6,200,000',
      tag: 'Earthy Modern Sanctuary',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=90',
      brightness: 0.78,
    },
    {
      id: 3,
      title: 'Cedar Creek Forest Estate',
      location: 'Lake Tahoe, NV',
      specs: '4 Beds • 4 Baths • 4,800 Sq.Ft',
      price: '$3,450,000',
      tag: 'Private Waterfront Dock',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=90',
      brightness: 0.85,
    },
    {
      id: 4,
      title: 'Elysian Tribeca Penthouse',
      location: 'Tribeca, NY',
      specs: '3 Beds • 3.5 Baths • 3,800 Sq.Ft',
      price: '$18,500 / mo',
      tag: 'Landscaped Rooftop',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=90',
      brightness: 0.80,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const goPrev = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goTo = (idx) => setCurrentSlide(idx);

  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 overflow-hidden text-white">

      {/* ─── BACKGROUND: All images stacked, opacity animated ─── */}
      <div className="absolute inset-0 z-0 bg-charcoal-900">
        {slides.map((slide, idx) => (
          <motion.img
            key={slide.id}
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ filter: `brightness(${slide.brightness})` }}
            animate={{
              opacity: idx === currentSlide ? 1 : 0,
              scale: idx === currentSlide ? 1.04 : 1.0,
            }}
            transition={{
              opacity: { duration: 0.85, ease: 'easeInOut' },
              scale:   { duration: 9, ease: 'linear' },
            }}
            initial={idx === 0 ? { opacity: 1, scale: 1.04 } : { opacity: 0, scale: 1.0 }}
          />
        ))}

        {/* Vignette — bottom-left kept dark for text, rest is bright */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/65 via-charcoal-900/10 to-transparent" />
      </div>

      {/* ─── PREV / NEXT ARROW BUTTONS ─── */}
      <button
        onClick={goPrev}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass-dark text-white flex items-center justify-center hover:bg-white/20 active:scale-90 transition-all border border-white/30 shadow-earth-lg hidden sm:flex"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goNext}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass-dark text-white flex items-center justify-center hover:bg-white/20 active:scale-90 transition-all border border-white/30 shadow-earth-lg hidden sm:flex"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* ─── FOREGROUND CONTENT ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">

          {/* Left: Main Hero Copy */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8 flex flex-col items-start"
          >
            {/* Pill Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-white text-xs font-semibold uppercase tracking-wider border border-white/20 shadow-earth-sm backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-terracotta-400" />
                <span>Sanjeevini Luxury Advisory</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white font-bold leading-[1.1] tracking-tight mb-6">
              Find Your Sanctuary <br />
              <span className="text-terracotta-300 font-normal italic">Without the Stress</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-xl text-earth-100 font-normal leading-relaxed mb-8 max-w-2xl">
              Curated luxury residences paired with private concierge guidance. Zero hidden fees, zero wasted trips.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={() => onOpenModal({ source: 'hero_primary_cta' })}
                className="px-8 py-4 rounded-2xl bg-terracotta-600 hover:bg-terracotta-700 text-white font-semibold text-base shadow-glow-terracotta transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 active:scale-95"
              >
                <span>Get Matched With a Property</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </button>

              <a
                href="#how-it-works"
                className="px-8 py-4 rounded-2xl glass-dark hover:bg-white/20 text-white border border-white/30 font-semibold text-base transition-all flex items-center justify-center gap-2 text-center backdrop-blur-md"
              >
                <span>See How It Works</span>
              </a>
            </div>

            {/* Social Proof Strip */}
            <div className="p-4 sm:p-5 rounded-2xl glass-dark border border-white/20 backdrop-blur-xl max-w-2xl w-full flex flex-wrap items-center gap-6 sm:gap-8 shadow-earth-md">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2 overflow-hidden">
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white/60 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="Verified Client" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white/60 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" alt="Verified Client" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white/60 object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80" alt="Verified Client" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-terracotta-400 text-terracotta-400" />
                    ))}
                    <span className="text-sm font-extrabold text-white ml-1.5">4.9 / 5</span>
                  </div>
                  <span className="text-xs text-earth-200 font-medium block mt-0.5">Over 300+ Verified Clients</span>
                </div>
              </div>

              <div className="h-9 w-px bg-white/20 hidden sm:block" />

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-forest-700/80 flex items-center justify-center text-white shrink-0 border border-forest-500">
                  <ShieldCheck className="w-5 h-5 text-terracotta-300" />
                </div>
                <div>
                  <span className="font-extrabold text-sm text-white block leading-tight">500+ Families Relocated</span>
                  <span className="text-xs text-earth-200 font-medium">Zero hidden fees guarantee</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Slide Info Card + Dots */}
          <div className="lg:col-span-4 flex flex-col justify-end items-end">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
              className="p-5 rounded-3xl glass-dark border border-white/20 backdrop-blur-xl w-full max-w-sm shadow-earth-lg"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-terracotta-600 text-white text-[10px] font-bold uppercase tracking-wider">
                  {slides[currentSlide].tag}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-green-300 font-semibold">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Real-Time Preview</span>
                </div>
              </div>

              <h3 className="font-serif text-xl font-bold text-white mb-1">
                {slides[currentSlide].title}
              </h3>

              <div className="flex items-center gap-1.5 text-xs text-earth-200 mb-2">
                <MapPin className="w-3.5 h-3.5 text-terracotta-400" />
                <span>{slides[currentSlide].location}</span>
              </div>

              <p className="text-xs text-earth-300 mb-3">{slides[currentSlide].specs}</p>

              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <span className="text-xs text-earth-300">Offered At</span>
                <span className="font-bold text-lg text-terracotta-300">
                  {slides[currentSlide].price}
                </span>
              </div>

              {/* Dot Indicators */}
              <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/10">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goTo(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentSlide === idx
                        ? 'w-8 bg-terracotta-400'
                        : 'w-2 bg-white/40 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* ─── BOTTOM SEARCH BAR ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 mt-10">
        <SearchBar onSearch={onSearch} />
      </div>
    </section>
  );
}
