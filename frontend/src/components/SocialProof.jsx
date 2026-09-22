import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Award, ShieldCheck, Clock, TrendingUp } from 'lucide-react';

export default function SocialProof() {
  const stats = [
    { label: 'Volume Transacted', value: '$420M+', icon: TrendingUp, detail: 'In verified luxury sales' },
    { label: 'Years in Business', value: '15+', icon: Building2, detail: 'Across premier coastal & alpine markets' },
    { label: 'Avg. Days to Close', value: '14 Days', icon: Clock, detail: '50% faster than industry standard' },
    { label: 'Client Satisfaction', value: '99.4%', icon: ShieldCheck, detail: 'Based on 300+ verified client reviews' },
  ];

  const pressLogos = [
    { name: 'Architectural Digest', label: 'ARCHITECTURAL DIGEST' },
    { name: 'Forbes Real Estate', label: 'FORBES LUXURY' },
    { name: 'Wall Street Journal', label: 'THE WALL STREET JOURNAL' },
    { name: 'Robb Report', label: 'ROBB REPORT' },
    { name: 'MLS Certification', label: 'MLS CERTIFIED ADVISOR' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="py-16 bg-forest-800 text-earth-50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4A7251_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats Grid with Scroll Reveal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-12 border-b border-forest-600/60"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="flex flex-col items-start p-5 rounded-2xl bg-forest-700/40 border border-forest-600/50 backdrop-blur-sm hover:border-terracotta-500/40 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-forest-600/80 flex items-center justify-center mb-4 text-terracotta-300">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-serif text-5xl sm:text-6xl font-bold text-white tracking-tight mb-1 leading-none">
                  {stat.value}
                </span>
                <span className="text-sm font-semibold text-earth-200 block mt-1">{stat.label}</span>
                <span className="text-xs text-forest-300 mt-1.5 leading-relaxed">{stat.detail}</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Press & Trust Badges Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-forest-300">
            <Award className="w-4 h-4 text-terracotta-400" />
            <span>As Featured In & Partnered With</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {pressLogos.map((logo) => (
              <span
                key={logo.name}
                className="font-serif text-sm sm:text-base font-bold uppercase tracking-[0.18em] text-earth-300/60 hover:text-earth-100 transition-colors"
              >
                {logo.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
