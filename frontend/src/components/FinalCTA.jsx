import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Sparkles, Mail, User } from 'lucide-react';
import { submitLead } from '../services/api';

export default function FinalCTA({ onOpenModal, showToast }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    intent: 'buy',
    sourceSection: 'final_cta_inline',
  });
  const [loading, setLoading] = useState(false);

  const handleInlineSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await submitLead(formData);
      showToast({ type: 'success', message: res.message || 'Advisory request submitted!' });
      setFormData({ fullName: '', email: '', intent: 'buy', sourceSection: 'final_cta_inline' });
    } catch (error) {
      showToast({ type: 'error', message: error.message || 'Failed to submit' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-forest-900 text-earth-50 relative overflow-hidden">
      {/* Background Architectural Blur & Glow */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-terracotta-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-forest-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="p-8 sm:p-14 rounded-4xl bg-gradient-to-br from-forest-800 to-forest-900 border border-forest-600/60 shadow-earth-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Copy Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-700/90 text-terracotta-300 text-xs font-bold uppercase tracking-widest mb-4 border border-forest-600 shadow-sm">
                <Sparkles className="w-4 h-4 text-terracotta-400" />
                <span>Begin Your Sanctuary Journey</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight mb-5">
                Ready to Experience Real Estate <br className="hidden sm:inline" />
                <span className="text-terracotta-300 font-normal italic">Without the Noise & Friction?</span>
              </h2>

              <p className="text-base sm:text-lg text-earth-200/90 font-normal mb-8 max-w-xl leading-relaxed">
                Whether you are seeking an off-market alpine chalet, oceanfront Montecito estate, or listing a prized residence, our senior advisors are ready to assist.
              </p>

              <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs sm:text-sm text-earth-300 font-medium">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-terracotta-400 shrink-0" />
                  <span>100% Complimentary Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-terracotta-400 shrink-0" />
                  <span>Strict NDA Privacy</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-terracotta-400 shrink-0" />
                  <span>Zero Upfront Commitment</span>
                </div>
              </div>
            </div>

            {/* Quick Inline Form Column */}
            <div className="lg:col-span-5 bg-forest-800/90 p-6 sm:p-8 rounded-3xl border border-forest-600/80 shadow-earth-md">
              <h3 className="font-serif text-2xl font-bold text-white mb-2 tracking-tight">
                Request Your Private Brief
              </h3>
              <p className="text-xs sm:text-sm text-earth-300 mb-5 leading-relaxed">
                Enter your details to receive 3 curated off-market properties within 24 hours.
              </p>

              <form onSubmit={handleInlineSubmit} className="space-y-3.5">
                <div>
                  <div className="relative">
                    <User className="w-4 h-4 text-earth-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-forest-900/80 border border-forest-600 rounded-xl text-sm sm:text-base text-white placeholder:text-earth-400 focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                    />
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-earth-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      placeholder="Your Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-forest-900/80 border border-forest-600 rounded-xl text-sm sm:text-base text-white placeholder:text-earth-400 focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                    />
                  </div>
                </div>

                <div>
                  <select
                    value={formData.intent}
                    onChange={(e) => setFormData({ ...formData, intent: e.target.value })}
                    className="w-full px-4 py-3 bg-forest-900/80 border border-forest-600 rounded-xl text-sm sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-terracotta-500 cursor-pointer"
                  >
                    <option value="buy">Looking to Buy a Property</option>
                    <option value="sell">Looking to Sell My Estate</option>
                    <option value="rent">Seeking High-End Rental</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold text-sm sm:text-base shadow-glow-terracotta transition-all flex items-center justify-center gap-2 transform active:scale-95"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Get Matched Instantly</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              <div className="text-center mt-3">
                <span className="text-xs text-earth-400">
                  No spam. No hidden fees. Cancel request anytime.
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
