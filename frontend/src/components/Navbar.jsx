import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight, Sparkles } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import Logo from './Logo';

export default function Navbar({ onOpenModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeSection = useScrollSpy(['hero', 'listings', 'problem', 'solution', 'how-it-works', 'faq'], 120);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'Featured Residences', href: '#listings', id: 'listings' },
    { name: 'Why Sanjeevini', href: '#solution', id: 'solution' },
    { name: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'glass-nav py-3 shadow-earth-sm' : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Component with Sanjeevini Estates & VT Groups */}
          <Logo size="md" />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-earth-200/80 shadow-earth-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${activeSection === link.id
                    ? 'bg-forest-700 text-white shadow-sm'
                    : 'text-charcoal-700 hover:text-forest-700 hover:bg-earth-100'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right Action Area */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+18004283681"
              className="flex items-center gap-2 text-xs font-bold text-charcoal-900 hover:text-forest-700 transition-colors bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-earth-200/80 shadow-earth-sm"
            >
              <div className="w-6 h-6 rounded-full bg-forest-100 flex items-center justify-center">
                <Phone className="w-3 h-3 text-forest-700" />
              </div>
              <span>+1 (800) 428-3681</span>
            </a>

            <button
              onClick={() => onOpenModal({ source: 'nav_cta' })}
              className="px-5 py-2.5 rounded-full bg-forest-700 hover:bg-forest-800 text-white text-xs font-semibold tracking-wide shadow-glow-forest hover:shadow-earth-md transition-all flex items-center gap-1.5 transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-terracotta-300" />
              <span>Book Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenModal({ source: 'mobile_nav_cta' })}
              className="px-3.5 py-2 rounded-full bg-forest-700 text-white text-xs font-semibold"
            >
              Consultation
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white border border-earth-200 text-charcoal-800 hover:bg-earth-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-b border-earth-200 px-4 pt-4 pb-6 mt-3 animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${activeSection === link.id
                    ? 'bg-forest-700 text-white'
                    : 'text-charcoal-800 hover:bg-earth-100'
                  }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-earth-200 flex flex-col gap-3">
              <a
                href="tel:+18004283681"
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-charcoal-800"
              >
                <Phone className="w-4 h-4 text-forest-700" />
                <span>+1 (800) 428-3681</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal({ source: 'mobile_drawer_cta' });
                }}
                className="w-full py-3 rounded-2xl bg-terracotta-600 hover:bg-terracotta-700 text-white font-semibold text-sm shadow-glow-terracotta"
              >
                Book Private Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
