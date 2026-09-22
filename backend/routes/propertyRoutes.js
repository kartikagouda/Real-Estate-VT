import express from 'express';
import { getProperties, getPropertyBySlug } from '../controllers/propertyController.js';

const router = express.Router();

router.get('/', getProperties);
router.get('/:slug', getPropertyBySlug);

export default router;
