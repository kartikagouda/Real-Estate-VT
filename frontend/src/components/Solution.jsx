import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  UserCheck,
  Video,
  DollarSign,
  Landmark,
  FileCheck,
  Compass,
  MessageSquareHeart,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';

export default function Solution({ onOpenModal }) {
  const solutions = [
    {
      icon: CheckCircle,
      title: 'Verified Off-Market Inventory',
      benefit: 'Access exclusive private luxury listings weeks before they ever reach public portals.',
      category: 'Exclusive Access',
    },
    {
      icon: UserCheck,
      title: 'Personalized Concierge Advisor Matching',
      benefit: 'Get paired with a senior specialist who lives and breathes your target neighborhood.',
      category: 'Dedicated Guidance',
    },
    {
      icon: Video,
      title: '4K 3D Virtual Immersive Walkthroughs',
      benefit: 'Inspect every room, view line, and architectural detail remotely before flying in.',
      category: 'Remote Convenience',
    },
    {
      icon: DollarSign,
      title: '100% Transparent Fee Structure',
      benefit: 'Clear itemized advisory terms upfront. No unexpected closing charges or surprise line items.',
      category: 'Financial Clarity',
    },
    {
      icon: Landmark,
      title: 'Private Wealth Mortgage Pre-Approval',
      benefit: 'Direct access to premier private banking partners for fast-track underwriting.',
      category: 'Seamless Financing',
    },
    {
      icon: FileCheck,
      title: 'Legal, Title & Escrow Assistance',
      benefit: 'In-house legal team ensures seamless title verification, escrow safety, and NDA privacy.',
      category: 'Complete Security',
    },
    {
      icon: Compass,
      title: 'Hyperlocal Neighborhood Insights',
      benefit: 'Detailed analytics on school districts, historical valuation trends, and microclimate data.',
      category: 'Data Intelligence',
    },
    {
      icon: MessageSquareHeart,
      title: '24/7 Priority Advisory Support',
      benefit: 'Instant messaging access to your dedicated agent, escrow officer, and search strategist.',
      category: 'Constant Support',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="solution" className="py-24 bg-earth-50 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 -right-40 w-[30rem] h-[30rem] bg-forest-100/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-100/90 text-forest-800 text-xs font-bold uppercase tracking-widest mb-4 border border-forest-200 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-terracotta-500" />
            <span>The Sanjeevini Estates Advantage</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-charcoal-900 leading-[1.15] tracking-tight">
            Everything You Need to Buy or Sell <br className="hidden sm:inline" />
            <span className="text-forest-700 font-normal italic">With Absolute Confidence</span>
          </h2>

          <p className="text-base sm:text-lg text-charcoal-700 font-normal mt-5 leading-relaxed max-w-2xl mx-auto">
            We replaced the friction of traditional real estate with a streamlined, technology-enabled concierge experience.
          </p>
        </motion.div>

        {/* 8 Feature Cards Grid with Scroll Stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="p-7 rounded-3xl bg-white border border-earth-200/90 shadow-earth-sm hover:shadow-earth-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-forest-700 text-earth-50 flex items-center justify-center group-hover:bg-terracotta-600 transition-colors shadow-sm">
                      <Icon className="w-6 h-6 text-terracotta-300 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-earth-100 text-earth-800 border border-earth-200/60">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-charcoal-900 mb-2.5 group-hover:text-forest-700 transition-colors tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm text-charcoal-700 leading-relaxed">
                    {item.benefit}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-earth-100 flex items-center text-xs font-bold text-forest-700 group-hover:text-terracotta-600 transition-colors tracking-wide">
                  <span>Explore Feature</span>
                  <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Callout CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <button
            onClick={() => onOpenModal({ source: 'solution_section_cta' })}
            className="inline-flex items-center gap-2.5 px-9 py-4 rounded-2xl bg-forest-700 hover:bg-forest-800 text-white font-bold text-base shadow-glow-forest hover:shadow-earth-lg transition-all transform active:scale-95"
          >
            <span>Claim Your Custom Property Brief</span>
            <ArrowUpRight className="w-4 h-4 text-terracotta-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
