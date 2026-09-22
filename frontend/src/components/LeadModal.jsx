import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ShieldCheck, Calendar, Phone, Mail, User, MapPin } from 'lucide-react';
import { submitLead } from '../services/api';

export default function LeadModal({ isOpen, onClose, initialData = null, showToast }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    intent: initialData?.intent || 'buy',
    budgetRange: initialData?.budget || '$2M - $5M',
    preferredLocation: initialData?.location || 'Aspen, CO',
    message: initialData?.propertyTitle ? `Inquiring about ${initialData.propertyTitle}` : '',
    sourceSection: initialData?.source || 'lead_modal',
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await submitLead(formData);
      showToast({ type: 'success', message: res.message || 'Consultation request submitted successfully!' });
      onClose();
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        intent: 'buy',
        budgetRange: '$2M - $5M',
        preferredLocation: 'Aspen, CO',
        message: '',
        sourceSection: 'lead_modal',
      });
    } catch (error) {
      showToast({ type: 'error', message: error.message || 'Failed to submit inquiry' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-charcoal-900/60 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-earth-50 rounded-3xl p-6 sm:p-8 shadow-earth-lg border border-earth-200 z-10 overflow-hidden"
          >
            {/* Top Decorative Strip */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-forest-700 via-terracotta-500 to-forest-600" />

            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-earth-100 hover:bg-earth-200 text-charcoal-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-100/90 text-forest-800 text-xs font-bold uppercase tracking-widest mb-3 border border-forest-200 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-terracotta-500" />
                <span>Private Concierge Advisory</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal-900 font-bold tracking-tight">
                {initialData?.propertyTitle ? `Inquire: ${initialData.propertyTitle}` : 'Schedule a Private Consultation'}
              </h3>
              <p className="text-sm sm:text-base text-charcoal-700 mt-2 font-normal leading-relaxed">
                Tell us about your spatial requirements. No commitment, zero hidden fees, strictly confidential.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-earth-500 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="E.g. Victoria Sterling"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-earth-300 rounded-xl text-sm sm:text-base text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-700 transition-all font-normal placeholder:text-earth-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-earth-500 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      placeholder="victoria@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-earth-300 rounded-xl text-sm sm:text-base text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-700 transition-all font-normal placeholder:text-earth-400"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1.5">
                    Phone Number (Optional)
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-earth-500 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-earth-300 rounded-xl text-sm sm:text-base text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-700 transition-all font-normal placeholder:text-earth-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1.5">
                    Primary Interest
                  </label>
                  <select
                    value={formData.intent}
                    onChange={(e) => setFormData({ ...formData, intent: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-earth-300 rounded-xl text-sm sm:text-base text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-700 transition-all font-medium cursor-pointer"
                  >
                    <option value="buy">Buying a Luxury Property</option>
                    <option value="sell">Selling / Listing My Property</option>
                    <option value="rent">High-End Long Term Rental</option>
                    <option value="invest">Real Estate Portfolio Investment</option>
                    <option value="consultation">General Market Advisory</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1.5">
                    Budget Range
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-earth-300 rounded-xl text-sm sm:text-base text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-700 transition-all font-medium cursor-pointer"
                  >
                    <option value="Under $2M">Under $2M</option>
                    <option value="$2M - $5M">$2M - $5M</option>
                    <option value="$5M - $10M">$5M - $10M</option>
                    <option value="$10M+">$10M+ Private Collection</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1.5">
                    Preferred Location
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-earth-500 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      placeholder="E.g. Aspen, Montecito, Tribeca"
                      value={formData.preferredLocation}
                      onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-earth-300 rounded-xl text-sm sm:text-base text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-700 transition-all font-normal placeholder:text-earth-400"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1.5">
                  Specific Requirements or Questions
                </label>
                <textarea
                  rows={3}
                  placeholder="Share details on timeline, preferred architectural style, or key amenities..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 bg-white border border-earth-300 rounded-xl text-sm sm:text-base text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-700 transition-all resize-none font-normal placeholder:text-earth-400"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 rounded-2xl bg-forest-700 hover:bg-forest-800 text-white font-bold text-sm sm:text-base shadow-glow-forest hover:shadow-earth-lg transition-all transform active:scale-95 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Confirm Consultation Request</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-earth-700 font-medium pt-1">
                <ShieldCheck className="w-4 h-4 text-forest-600" />
                <span>100% Private & Confidential. NDA Protected.</span>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
