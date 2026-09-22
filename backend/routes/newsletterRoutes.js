import express from 'express';
import { subscribeNewsletter } from '../controllers/newsletterController.js';
import { newsletterValidationRules, validate } from '../middleware/validation.js';
import { formRateLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

router.post('/', formRateLimiter, newsletterValidationRules, validate, subscribeNewsletter);

export default router;
