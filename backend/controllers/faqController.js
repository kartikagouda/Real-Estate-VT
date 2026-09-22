import FAQ from '../models/FAQ.js';
import { initialFAQs } from '../seed/seedData.js';
import { getDBStatus } from '../config/db.js';

export const getFAQs = async (req, res, next) => {
  try {
    if (getDBStatus()) {
      const faqs = await FAQ.find().sort({ order: 1 });
      return res.json({ success: true, count: faqs.length, data: faqs });
    }
    return res.json({ success: true, count: initialFAQs.length, data: initialFAQs });
  } catch (error) {
    next(error);
  }
};
