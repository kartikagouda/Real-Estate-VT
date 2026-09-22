import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    city: { type: String, required: true },
    price: { type: Number, required: true },
    displayPrice: { type: String, required: true },
    category: { type: String, enum: ['Buy', 'Rent', 'Sold'], default: 'Buy' },
    propertyType: { type: String, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    sqft: { type: Number, required: true },
    image: { type: String, required: true },
    gallery: [{ type: String }],
    tag: { type: String, default: 'Featured' },
    rating: { type: Number, default: 4.9 },
    virtualTour: { type: Boolean, default: true },
    description: { type: String, default: '' },
    amenities: [{ type: String }],
    agent: {
      name: { type: String, default: 'Evelyn St. Claire' },
      role: { type: String, default: 'Senior Real Estate Advisor' },
      phone: { type: String, default: '+1 (800) 555-8392' },
      email: { type: String, default: 'concierge@havenwoodrealestate.com' },
      avatar: { type: String },
    },
  },
  { timestamps: true }
);

export default mongoose.model('Property', propertySchema);
