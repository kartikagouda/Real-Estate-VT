import React, { useState } from 'react';
import { Mail, ArrowRight, ShieldCheck, Phone, MapPin, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';
import { subscribeNewsletter } from '../services/api';
import Logo from './Logo';

export default function Footer({ showToast }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleNewsletter = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const res = await subscribeNewsletter(email);
      showToast({ type: 'success', message: res.message || 'Subscribed successfully!' });
      setEmail('');
    } catch (error) {
      showToast({ type: 'error', message: error.message || 'Subscription failed' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-charcoal-900 text-earth-200 pt-16 pb-12 border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Branding Box */}
        <div className="pb-12 mb-12 border-b border-charcoal-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <div className="mb-4">
              <Logo size="lg" />
            </div>
            <p className="text-sm text-earth-300 max-w-md leading-relaxed">
              Curated luxury residences, verified title escrow, and 1-on-1 private concierge guidance across premier coastal and alpine markets.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-charcoal-800/80 p-6 sm:p-8 rounded-3xl border border-charcoal-700 shadow-earth-md">
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                Sanjeevini Private Insights
              </h4>
              <p className="text-sm text-earth-300 mb-5 leading-relaxed">
                Subscribe to receive bi-weekly confidential market reports and private off-market listings.
              </p>

              <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-2.5">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-earth-400 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-charcoal-900 border border-charcoal-700 rounded-xl text-sm text-white placeholder:text-earth-500 focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 rounded-xl bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold text-sm transition-colors shrink-0 shadow-glow-terracotta flex items-center justify-center gap-2"
                >
                  {loading ? 'Subscribing...' : 'Subscribe'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-charcoal-800 text-sm">
          {/* Company */}
          <div>
            <h5 className="font-serif text-lg font-bold text-white mb-4 tracking-wide">Company</h5>
            <ul className="space-y-3 text-earth-300 font-normal">
              <li><a href="#hero" className="hover:text-white transition-colors">About Sanjeevini Estates</a></li>
              <li><a href="#listings" className="hover:text-white transition-colors">VT Groups Leadership</a></li>
              <li><a href="#solution" className="hover:text-white transition-colors">Press & Awards</a></li>
              <li><a href="#problem" className="hover:text-white transition-colors">Careers at VT Groups</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-serif text-lg font-bold text-white mb-4 tracking-wide">Services</h5>
            <ul className="space-y-3 text-earth-300 font-normal">
              <li><a href="#listings" className="hover:text-white transition-colors">Buy Luxury Estate</a></li>
              <li><a href="#hero" className="hover:text-white transition-colors">Sell / Private Listing</a></li>
              <li><a href="#listings" className="hover:text-white transition-colors">High-End Rentals</a></li>
              <li><a href="#solution" className="hover:text-white transition-colors">Private Wealth Advisory</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 className="font-serif text-lg font-bold text-white mb-4 tracking-wide">Resources</h5>
            <ul className="space-y-3 text-earth-300 font-normal">
              <li><a href="#faq" className="hover:text-white transition-colors">Frequently Asked Questions</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">Relocation Guides</a></li>
              <li><a href="#listings" className="hover:text-white transition-colors">Market Valuation Report</a></li>
              <li><a href="#solution" className="hover:text-white transition-colors">3D Tour Technology</a></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h5 className="font-serif text-lg font-bold text-white mb-4 tracking-wide">Private Concierge</h5>
            <ul className="space-y-3.5 text-earth-300 font-normal">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-terracotta-400 shrink-0" />
                <span>+1 (800) 428-3681</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-terracotta-400 shrink-0" />
                <span>concierge@sanjeeviniestates.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-terracotta-400 shrink-0 mt-0.5" />
                <span>Montecito • Aspen • Tribeca • Lake Tahoe</span>
              </li>
            </ul>

            <div className="flex items-center gap-3 mt-5">
              {[Instagram, Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-charcoal-800 hover:bg-forest-700 text-earth-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Legal & Equal Housing */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-earth-400">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 font-bold text-earth-300">
              <ShieldCheck className="w-4 h-4 text-forest-500" />
              <span>Equal Housing Opportunity</span>
            </div>
            <span>•</span>
            <span>MLS Certified Brokerage</span>
          </div>

          <div>
            <span>© {new Date().getFullYear()} Sanjeevini Estates (VT Groups) Real Estate & Advisory LLC. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
