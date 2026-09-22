import Testimonial from '../models/Testimonial.js';
import { initialTestimonials } from '../seed/seedData.js';
import { getDBStatus } from '../config/db.js';

export const getTestimonials = async (req, res, next) => {
  try {
    if (getDBStatus()) {
      const testimonials = await Testimonial.find().sort({ createdAt: -1 });
      return res.json({ success: true, count: testimonials.length, data: testimonials });
    }
    return res.json({ success: true, count: initialTestimonials.length, data: initialTestimonials });
  } catch (error) {
    next(error);
  }
};
