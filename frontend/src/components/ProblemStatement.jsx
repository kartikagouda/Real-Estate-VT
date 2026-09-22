import React from 'react';
import { motion } from 'framer-motion';
import { Clock, HelpCircle, UserX, EyeOff, AlertTriangle, ArrowRight } from 'lucide-react';

export default function ProblemStatement({ onOpenModal }) {
  const painPoints = [
    {
      icon: Clock,
      title: 'Endless Hours Wasted Browsing Stale Listings',
      description:
        'Public portals are flooded with expired, pending, or inaccurate photos. You spend weeks scrolling through homes that are already sold.',
    },
    {
      icon: HelpCircle,
      title: 'Opaque Pricing & Hidden Commission Fees',
      description:
        'Unclear fee structures and surprise escrow expenses leave buyers and sellers feeling misled right at the closing table.',
    },
    {
      icon: UserX,
      title: 'Transactional, Unresponsive Agents',
      description:
        'Too many realtors treat high-stakes purchases like quick commissions rather than providing tailored, patient advisory.',
    },
    {
      icon: EyeOff,
      title: 'Locked Out of Private Off-Market Deals',
      description:
        'Over 40% of premier luxury estates change hands privately without ever appearing on public MLS websites.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="problem" className="py-20 bg-earth-100/60 relative overflow-hidden">
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
            <AlertTriangle className="w-3.5 h-3.5 text-terracotta-600" />
            <span>The Reality of Traditional Real Estate</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-charcoal-900 leading-[1.15] tracking-tight">
            Buying or Selling a Home <br className="hidden sm:inline" />
            <span className="text-terracotta-600 font-normal italic">Shouldn't Feel Like a Second Job</span>
          </h2>

          <p className="text-base sm:text-lg text-charcoal-700 font-normal mt-5 leading-relaxed max-w-2xl mx-auto">
            The traditional property market is fraught with friction, opaque fees, and endless phone tag. Here is what most buyers and sellers experience before finding Sanjeevini Estates.
          </p>
        </motion.div>

        {/* 4 Pain Points Grid with Scroll Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-14"
        >
          {painPoints.map((pain) => {
            const Icon = pain.icon;
            return (
              <motion.div
                key={pain.title}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="p-7 sm:p-9 rounded-3xl bg-white border border-earth-200 shadow-earth-sm hover:shadow-earth-md transition-all group"
              >
                <div className="w-13 h-13 rounded-2xl bg-terracotta-50 text-terracotta-600 flex items-center justify-center mb-6 group-hover:bg-terracotta-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-charcoal-900 mb-3 tracking-tight group-hover:text-terracotta-700 transition-colors">
                  {pain.title}
                </h3>
                <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                  {pain.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Cost of Inaction Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="p-7 sm:p-9 rounded-3xl bg-gradient-to-r from-forest-800 to-forest-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-earth-lg border border-forest-600/40"
        >
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-2xl bg-terracotta-500/20 text-terracotta-300 flex items-center justify-center shrink-0 mt-0.5 border border-terracotta-400/30">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-2xl font-bold text-white tracking-tight">
                The True Cost of Inaction & Friction
              </h4>
              <p className="text-sm sm:text-base text-earth-100 mt-1.5 max-w-2xl leading-relaxed">
                Unguided bidding leads to overpaying by an average of 7.4%, while delays mean losing out on rare off-market inventory to pre-qualified buyers.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenModal({ source: 'problem_section_cta' })}
            className="px-7 py-4 rounded-2xl bg-terracotta-600 hover:bg-terracotta-700 text-white text-sm font-bold tracking-wide whitespace-nowrap shadow-glow-terracotta transition-all flex items-center gap-2.5 transform active:scale-95 shrink-0"
          >
            <span>Bypass the Friction Today</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
