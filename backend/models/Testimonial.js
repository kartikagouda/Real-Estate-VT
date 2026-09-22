import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    location: { type: String, required: true },
    quote: { type: String, required: true },
    rating: { type: Number, default: 5 },
    avatar: { type: String, required: true },
    transactionType: { type: String, default: 'Buyer' },
    propertyBought: { type: String, default: '' },
  },
  { timestamps: true }
);

export default mongoose.model('Testimonial', testimonialSchema);
