import Lead from '../models/Lead.js';
import { getDBStatus } from '../config/db.js';

export const createLead = async (req, res, next) => {
  try {
    const { fullName, email, phone, intent, budgetRange, preferredLocation, message, sourceSection } = req.body;

    const leadData = {
      fullName,
      email,
      phone: phone || '',
      intent: intent || 'consultation',
      budgetRange: budgetRange || 'Not specified',
      preferredLocation: preferredLocation || 'Any',
      message: message || '',
      sourceSection: sourceSection || 'hero_cta',
    };

    if (getDBStatus()) {
      const newLead = await Lead.create(leadData);
      return res.status(201).json({
        success: true,
        message: 'Thank you! Your request has been received. A senior advisor will reach out shortly.',
        data: newLead,
      });
    }

    // Resilient fallback when DB is offline
    console.log('[Lead Submission - Offline Mode]', leadData);
    return res.status(201).json({
      success: true,
      message: 'Thank you! Your request has been received. A senior advisor will reach out shortly.',
      data: { id: `lead_${Date.now()}`, ...leadData, createdAt: new Date() },
    });
  } catch (error) {
    next(error);
  }
};

export const getLeads = async (req, res, next) => {
  try {
    if (getDBStatus()) {
      const leads = await Lead.find().sort({ createdAt: -1 });
      return res.json({ success: true, count: leads.length, data: leads });
    }
    return res.json({ success: true, count: 0, data: [] });
  } catch (error) {
    next(error);
  }
};
