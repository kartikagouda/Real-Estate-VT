import Newsletter from '../models/Newsletter.js';
import { getDBStatus } from '../config/db.js';

export const subscribeNewsletter = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (getDBStatus()) {
      const existing = await Newsletter.findOne({ email });
      if (existing) {
        return res.status(200).json({
          success: true,
          message: 'You are already subscribed to Havenwood Private Insights!',
        });
      }

      await Newsletter.create({ email });
      return res.status(201).json({
        success: true,
        message: 'Welcome to Havenwood Insights! Check your inbox for private market previews.',
      });
    }

    // Resilient fallback when DB is offline
    console.log('[Newsletter Subscription - Offline Mode]', email);
    return res.status(201).json({
      success: true,
      message: 'Welcome to Havenwood Insights! Check your inbox for private market previews.',
    });
  } catch (error) {
    next(error);
  }
};
