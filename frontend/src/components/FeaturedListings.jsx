import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import {
  Bed,
  Bath,
  Square,
  MapPin,
  Sparkles,
  Video,
  ArrowUpRight,
  Star,
  Eye,
} from 'lucide-react';
import { fetchProperties } from '../services/api';
import { initialProperties } from '../data/mockData';

export default function FeaturedListings({ onSelectProperty, searchFilters }) {
  const [properties, setProperties] = useState([]);
  const [filterCategory, setFilterCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef(null);

  // Scroll Progress binding for Scroll-Driven Horizontal Motion
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Smooth Physics Spring for buttery-smooth scroll reactions
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  // Row 1 glides LEFT TO RIGHT as you scroll down
  const row1X = useTransform(smoothProgress, [0, 1], ['-12%', '12%']);
  // Row 2 glides RIGHT TO LEFT as you scroll down
  const row2X = useTransform(smoothProgress, [0, 1], ['12%', '-12%']);

  useEffect(() => {
    const loadProperties = async () => {
      setLoading(true);
      const data = await fetchProperties({
        category: filterCategory,
        propertyType: searchFilters?.propertyType,
        search: searchFilters?.search,
      });
      if (data && data.length > 0) {
        setProperties(data);
      } else {
        let filtered = [...initialProperties];
        if (filterCategory !== 'All') {
          filtered = filtered.filter((p) => p.category.toLowerCase() === filterCategory.toLowerCase());
        }
        if (searchFilters?.propertyType && searchFilters.propertyType !== 'All') {
          filtered = filtered.filter(
            (p) => p.propertyType.toLowerCase() === searchFilters.propertyType.toLowerCase()
          );
        }
        if (searchFilters?.search) {
          const q = searchFilters.search.toLowerCase();
          filtered = filtered.filter(
            (p) =>
              p.title.toLowerCase().includes(q) ||
              p.location.toLowerCase().includes(q) ||
              p.city.toLowerCase().includes(q)
          );
        }
        setProperties(filtered);
      }
      setLoading(false);
    };

    loadProperties();
  }, [filterCategory, searchFilters]);

  // Split properties into 2 rows for dual opposing scroll animation
  const row1 = properties.slice(0, Math.ceil(properties.length / 2));
  const row2 = properties.slice(Math.ceil(properties.length / 2));

  return (
    <section ref={sectionRef} id="listings" className="py-24 bg-earth-50 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-forest-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-terracotta-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-100/90 text-forest-800 text-xs font-bold uppercase tracking-widest mb-3 border border-forest-200 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-terracotta-500" />
              <span>Real-Time Animated Portfolio</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-charcoal-900 leading-[1.15] tracking-tight">
              Featured Luxury <span className="text-forest-700 font-normal italic">Residences</span>
            </h2>
            <p className="text-base sm:text-lg text-charcoal-700 mt-3 max-w-xl font-normal leading-relaxed">
              Scroll down to watch our luxury portfolio glide across the screen with real-time Ken Burns animations.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 bg-earth-100/90 p-1.5 rounded-full border border-earth-200 shadow-sm self-start md:self-auto">
            {['All', 'Buy', 'Rent', 'Sold'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${filterCategory === cat
                    ? 'bg-forest-700 text-white shadow-sm'
                    : 'text-charcoal-700 hover:text-charcoal-900 hover:bg-earth-200/60'
                  }`}
              >
                {cat === 'All' ? 'All Residences' : cat}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* DUAL-ROW SCROLL-DRIVEN ANIMATED IMAGE TRACKS */}
      {loading ? (
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div key={n} className="h-96 rounded-3xl bg-earth-200 animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="space-y-8 overflow-hidden">

          {/* ROW 1: Glides LEFT TO RIGHT as you scroll down */}
          <motion.div style={{ x: row1X }} className="flex items-stretch gap-6 w-max px-4">
            {row1.concat(row1).map((prop, idx) => (
              <motion.div
                key={`row1-${prop.slug || prop.title}-${idx}`}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                className="w-[330px] sm:w-[390px] shrink-0 rounded-3xl bg-white border border-earth-200 shadow-earth-sm hover:shadow-earth-lg transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Image with Continuous Ken Burns Zoom & Hover Shimmer */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={prop.image}
                      alt={prop.title}
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700"
                    />

                    {/* Hover Shimmer Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-black/20" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-charcoal-900/85 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider border border-white/10">
                        {prop.category}
                      </span>
                      {prop.virtualTour && (
                        <span className="px-2.5 py-1 rounded-full bg-terracotta-600 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
                          <Video className="w-3 h-3" />
                          <span>3D Tour</span>
                        </span>
                      )}
                    </div>

                    {/* Tag & Real-Time Viewer Indicator */}
                    <div className="absolute top-4 right-4 flex flex-col items-end gap-1.5">
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-charcoal-900 text-xs font-semibold shadow-sm">
                        {prop.tag}
                      </span>
                      <div className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold text-earth-200 flex items-center gap-1.5 border border-white/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping" />
                        <Eye className="w-3 h-3 text-green-400" />
                        <span>{12 + (idx % 7)} viewing now</span>
                      </div>
                    </div>

                    {/* Price Banner */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-earth-300 block">List Price</span>
                        <span className="font-serif text-2xl font-bold text-white tracking-tight">
                          {prop.displayPrice}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs border border-white/10">
                        <Star className="w-3.5 h-3.5 fill-terracotta-400 text-terracotta-400" />
                        <span className="font-bold">{prop.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-xs text-earth-600 font-semibold mb-1">
                      <MapPin className="w-3.5 h-3.5 text-terracotta-500 shrink-0" />
                      <span>{prop.location}</span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-charcoal-900 mb-2 group-hover:text-forest-700 transition-colors line-clamp-1">
                      {prop.title}
                    </h3>

                    <p className="text-xs text-charcoal-700 line-clamp-2 mb-4 leading-relaxed">
                      {prop.description}
                    </p>

                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-earth-100 text-xs text-charcoal-800 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Bed className="w-4 h-4 text-forest-700" />
                        <span>{prop.bedrooms ? `${prop.bedrooms} Beds` : 'N/A'}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Bath className="w-4 h-4 text-forest-700" />
                        <span>{prop.bathrooms ? `${prop.bathrooms} Baths` : 'N/A'}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Square className="w-4 h-4 text-forest-700" />
                        <span>{prop.sqft.toLocaleString()} Sq.Ft</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() =>
                      onSelectProperty({
                        propertyTitle: prop.title,
                        location: prop.location,
                        budget: prop.displayPrice,
                        intent: prop.category === 'Rent' ? 'rent' : 'buy',
                        source: 'listing_card_cta',
                      })
                    }
                    className="w-full py-3 px-4 rounded-2xl bg-forest-700 hover:bg-forest-800 text-white font-semibold text-xs transition-all shadow-glow-forest flex items-center justify-center gap-2 transform active:scale-95"
                  >
                    <span>Inquire / Request Tour</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-terracotta-300" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ROW 2: Glides RIGHT TO LEFT as you scroll down */}
          <motion.div style={{ x: row2X }} className="flex items-stretch gap-6 w-max px-4">
            {(row2.length > 0 ? row2.concat(row2) : row1.concat(row1)).map((prop, idx) => (
              <motion.div
                key={`row2-${prop.slug || prop.title}-${idx}`}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                className="w-[330px] sm:w-[390px] shrink-0 rounded-3xl bg-white border border-earth-200 shadow-earth-sm hover:shadow-earth-lg transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={prop.image}
                      alt={prop.title}
                      initial={{ scale: 1.08 }}
                      animate={{ scale: [1.08, 1, 1.08] }}
                      transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700"
                    />

                    {/* Hover Shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-black/20" />

                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-charcoal-900/85 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider border border-white/10">
                        {prop.category}
                      </span>
                      {prop.virtualTour && (
                        <span className="px-2.5 py-1 rounded-full bg-terracotta-600 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
                          <Video className="w-3 h-3" />
                          <span>3D Tour</span>
                        </span>
                      )}
                    </div>

                    <div className="absolute top-4 right-4 flex flex-col items-end gap-1.5">
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-charcoal-900 text-xs font-semibold shadow-sm">
                        {prop.tag}
                      </span>
                      <div className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold text-earth-200 flex items-center gap-1.5 border border-white/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping" />
                        <Eye className="w-3 h-3 text-green-400" />
                        <span>{9 + (idx % 6)} viewing now</span>
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-earth-300 block">List Price</span>
                        <span className="font-serif text-2xl font-bold text-white tracking-tight">
                          {prop.displayPrice}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs border border-white/10">
                        <Star className="w-3.5 h-3.5 fill-terracotta-400 text-terracotta-400" />
                        <span className="font-bold">{prop.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-xs text-earth-600 font-semibold mb-1">
                      <MapPin className="w-3.5 h-3.5 text-terracotta-500 shrink-0" />
                      <span>{prop.location}</span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-charcoal-900 mb-2 group-hover:text-forest-700 transition-colors line-clamp-1">
                      {prop.title}
                    </h3>

                    <p className="text-xs text-charcoal-700 line-clamp-2 mb-4 leading-relaxed">
                      {prop.description}
                    </p>

                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-earth-100 text-xs text-charcoal-800 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Bed className="w-4 h-4 text-forest-700" />
                        <span>{prop.bedrooms ? `${prop.bedrooms} Beds` : 'N/A'}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Bath className="w-4 h-4 text-forest-700" />
                        <span>{prop.bathrooms ? `${prop.bathrooms} Baths` : 'N/A'}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Square className="w-4 h-4 text-forest-700" />
                        <span>{prop.sqft.toLocaleString()} Sq.Ft</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() =>
                      onSelectProperty({
                        propertyTitle: prop.title,
                        location: prop.location,
                        budget: prop.displayPrice,
                        intent: prop.category === 'Rent' ? 'rent' : 'buy',
                        source: 'listing_card_cta',
                      })
                    }
                    className="w-full py-3 px-4 rounded-2xl bg-forest-700 hover:bg-forest-800 text-white font-semibold text-xs transition-all shadow-glow-forest flex items-center justify-center gap-2 transform active:scale-95"
                  >
                    <span>Inquire / Request Tour</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-terracotta-300" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
    </section>
  );
}
