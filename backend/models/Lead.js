import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      trim: true,
      default: '',
    },
    intent: {
      type: String,
      enum: ['buy', 'sell', 'rent', 'invest', 'consultation'],
      default: 'consultation',
    },
    budgetRange: {
      type: String,
      default: 'Not specified',
    },
    preferredLocation: {
      type: String,
      default: 'Any',
    },
    message: {
      type: String,
      trim: true,
      default: '',
    },
    sourceSection: {
      type: String,
      default: 'hero_cta',
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'qualified', 'closed'],
      default: 'new',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Lead', leadSchema);
