import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import leadRoutes from './routes/leadRoutes.js';
import newsletterRoutes from './routes/newsletterRoutes.js';
import propertyRoutes from './routes/propertyRoutes.js';
import testimonialRoutes from './routes/testimonialRoutes.js';
import faqRoutes from './routes/faqRoutes.js';
import { apiRateLimiter } from './middleware/rateLimiter.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';

dotenv.config();

const app = express();
const INITIAL_PORT = parseInt(process.env.PORT || '5000', 10);

// Connect Database asynchronously
connectDB();

// Middleware
app.use(helmet({ contentSecurityPolicy: false }));
app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Global Rate Limiter for API
app.use('/api', apiRateLimiter);

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    service: 'Havenwood Real Estate API',
  });
});

// Routes
app.use('/api/leads', leadRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/properties', propertyRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/faqs', faqRoutes);

// Error Middlewares
app.use(notFound);
app.use(errorHandler);

const startServer = (port) => {
  const server = app.listen(port, () => {
    console.log(`[Server] Havenwood Real Estate backend listening on port ${port}`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.warn(`[Server Warning] Port ${port} is in use, trying ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('[Server Error]', err);
    }
  });
};

startServer(INITIAL_PORT);
