import express from 'express';
import { createLead, getLeads } from '../controllers/leadController.js';
import { leadValidationRules, validate } from '../middleware/validation.js';
import { formRateLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

router.post('/', formRateLimiter, leadValidationRules, validate, createLead);
router.get('/', getLeads);

export default router;
