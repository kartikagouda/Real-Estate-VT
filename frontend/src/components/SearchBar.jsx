import React, { useState } from 'react';
import { Search, MapPin, Home as HomeIcon, DollarSign, SlidersHorizontal } from 'lucide-react';

export default function SearchBar({ onSearch }) {
  const [activeTab, setActiveTab] = useState('Buy');
  const [location, setLocation] = useState('All');
  const [propertyType, setPropertyType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({
        category: activeTab,
        location,
        propertyType,
        search: searchQuery,
      });
    }
  };

  return (
    <div className="w-full bg-white/95 backdrop-blur-xl rounded-3xl p-3 sm:p-4 shadow-earth-lg border border-earth-200">
      {/* Category Tabs */}
      <div className="flex items-center gap-2 mb-3 border-b border-earth-100 pb-3">
        {['Buy', 'Rent', 'Sold'].map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => {
              setActiveTab(tab);
              if (onSearch) onSearch({ category: tab, location, propertyType, search: searchQuery });
            }}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all ${
              activeTab === tab
                ? 'bg-forest-700 text-white shadow-glow-forest'
                : 'text-charcoal-700 hover:bg-earth-100 hover:text-charcoal-900 font-semibold'
            }`}
          >
            {tab === 'Buy' ? 'Properties to Buy' : tab === 'Rent' ? 'Luxury Rentals' : 'Recently Sold'}
          </button>
        ))}
      </div>

      {/* Inputs Form */}
      <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Location Picker */}
        <div className="p-3 bg-earth-50 rounded-2xl border border-earth-200/60 hover:border-earth-300 transition-colors">
          <div className="flex items-center gap-2 text-xs font-bold uppercase text-earth-700 mb-1.5 tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-terracotta-500" />
            <span>Location</span>
          </div>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full bg-transparent text-sm font-semibold text-charcoal-900 focus:outline-none cursor-pointer"
          >
            <option value="All">All Locations</option>
            <option value="Bellary">Bellary City</option>
            <option value="North Lake District">North Lake District</option>
            <option value="Outer Ring Road">Outer Ring Road</option>
            <option value="Sanjeevini">Sanjeevini Campuses</option>
            <option value="Rural Outskirts">Rural Outskirts</option>
          </select>
        </div>

        {/* Property Type */}
        <div className="p-3 bg-earth-50 rounded-2xl border border-earth-200/60 hover:border-earth-300 transition-colors">
          <div className="flex items-center gap-2 text-xs font-bold uppercase text-earth-700 mb-1.5 tracking-wider">
            <HomeIcon className="w-3.5 h-3.5 text-forest-600" />
            <span>Property Type</span>
          </div>
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="w-full bg-transparent text-sm font-semibold text-charcoal-900 focus:outline-none cursor-pointer"
          >
            <option value="All">All Property Types</option>
            <option value="Modern Estate">Luxury Villas & Estates</option>
            <option value="Land">Residential Plots</option>
            <option value="Commercial Land">Commercial Land</option>
            <option value="Farm Land">Agricultural Farm Land</option>
          </select>
        </div>

        {/* Search Query Keywords */}
        <div className="p-3 bg-earth-50 rounded-2xl border border-earth-200/60 hover:border-earth-300 transition-colors">
          <div className="flex items-center gap-2 text-xs font-bold uppercase text-earth-700 mb-1.5 tracking-wider">
            <SlidersHorizontal className="w-3.5 h-3.5 text-earth-700" />
            <span>Keyword / Amenity</span>
          </div>
          <input
            type="text"
            placeholder="Pool, Sauna, View, Dock..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-sm font-semibold text-charcoal-900 focus:outline-none placeholder:text-earth-400 font-normal"
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-center">
          <button
            type="submit"
            className="w-full h-full min-h-[52px] py-3.5 px-6 rounded-2xl bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold text-sm sm:text-base shadow-glow-terracotta transition-all flex items-center justify-center gap-2 transform active:scale-95"
          >
            <Search className="w-4 h-4" />
            <span>Find Sanctuary</span>
          </button>
        </div>
      </form>
    </div>
  );
}
