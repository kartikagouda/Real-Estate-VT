import React from 'react';
import { motion } from 'framer-motion';

export default function PromoVideo() {
  return (
    <section className="py-24 bg-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest-800 mb-4 tracking-tight">
            Visit Our Sanjeevini Estates
          </h2>
          <p className="text-lg md:text-xl text-charcoal-600 max-w-2xl mx-auto font-medium">
            Experience the pinnacle of luxury living. Take a virtual tour of our exclusive properties and envision your next sanctuary.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-charcoal-900 border border-earth-200/50"
        >
          {/* YouTube Embed Placeholder - You can change the 'src' URL to your actual video later */}
          <iframe
            className="absolute inset-0 w-full h-full object-cover"
            src="https://www.youtube.com/embed/y9j-BL5ocW8?autoplay=0&mute=0&controls=1&rel=0" 
            title="Sanjeevini Estates Promo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
