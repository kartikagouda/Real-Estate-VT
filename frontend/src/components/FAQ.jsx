import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Search, Sparkles } from 'lucide-react';
import { fetchFAQs } from '../services/api';
import { initialFAQs } from '../data/mockData';

export default function FAQ({ onOpenModal }) {
  const [faqs, setFaqs] = useState(initialFAQs);
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const loadFAQs = async () => {
      const data = await fetchFAQs();
      if (data && data.length > 0) setFaqs(data);
    };
    loadFAQs();
  }, []);

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="faq" className="py-24 bg-earth-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-100/90 text-forest-800 text-xs font-bold uppercase tracking-widest mb-4 border border-forest-200 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-terracotta-500" />
            <span>Clear Answers</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-charcoal-900 leading-[1.15] tracking-tight">
            Frequently Asked <span className="text-forest-700 font-normal italic">Questions</span>
          </h2>

          <p className="text-base sm:text-lg text-charcoal-700 font-normal mt-5 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about off-market matching, advisory terms, fees, and digital title closing.
          </p>

          {/* Quick Search */}
          <div className="mt-8 relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-earth-500 absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Search questions (e.g. fees, off-market, remote)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-earth-300 rounded-2xl text-sm sm:text-base text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-700 shadow-earth-sm transition-all"
            />
          </div>
        </motion.div>

        {/* Accordions with Scroll Stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="space-y-4"
        >
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={faq.question}
                variants={itemVariants}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-white border-forest-700/60 shadow-earth-md'
                    : 'bg-white/80 border-earth-200 hover:border-earth-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full px-7 py-6 text-left flex items-center justify-between gap-4 font-serif text-xl sm:text-2xl font-bold text-charcoal-900 focus:outline-none tracking-tight"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[11px] font-sans uppercase font-bold text-terracotta-700 px-3 py-1 rounded-full bg-terracotta-50 border border-terracotta-200/60 shrink-0">
                      {faq.category}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-forest-700 text-white rotate-180' : 'bg-earth-100 text-charcoal-700'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-7 pb-6 pt-0 text-base text-charcoal-700 leading-relaxed font-sans border-t border-earth-100"
                    >
                      <p className="pt-4 font-normal">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Unanswered question box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-6 rounded-3xl bg-earth-100 border border-earth-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="text-left">
            <h4 className="font-serif text-lg font-bold text-charcoal-900">Have a specific question not listed here?</h4>
            <p className="text-xs text-charcoal-700">Our senior concierge team is available to discuss your exact scenario.</p>
          </div>
          <button
            onClick={() => onOpenModal({ source: 'faq_custom_question' })}
            className="px-6 py-3 rounded-2xl bg-forest-700 hover:bg-forest-800 text-white font-semibold text-xs shrink-0 shadow-glow-forest transform active:scale-95"
          >
            Ask an Advisor Directly
          </button>
        </motion.div>
      </div>
    </section>
  );
}
