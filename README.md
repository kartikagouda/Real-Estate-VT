# Havenwood | Luxury Real Estate & Advisory Landing Page (MERN Stack)

A production-ready, high-converting Real Estate landing page and private advisory application built using the **MERN Stack** (MongoDB, Express, React, Node.js). Designed with a warm, modern earthy aesthetic (`#FAF8F5` ecru, deep forest green, terracotta accents, soft rounded pill elements, and glassmorphic micro-interactions).

Inspired by modern luxury architectural platforms and Dribbble showcase designs.

---

## 🌟 Key Features

### Frontend (React + Vite + Tailwind CSS + Framer Motion)
1. **Hero Section**: Benefit-driven headline ("Find Your Sanctuary Without the Stress of Endless Searching"), interactive multi-tab property search engine, micro social proof strip, and high-impact visual showcase.
2. **Social Proof & Stats Bar**: Key statistics ($420M+ volume, 15+ years, 14 avg days to close, 99.4% satisfaction), verified client quotes, and press badges (Architectural Digest, Forbes, WSJ, MLS).
3. **Problem Statement Section**: Direct pain agitation ("Buying or Selling Shouldn't Feel Like a Second Job") with a 4-card comparison matrix and cost of delay metric.
4. **Havenwood Advantage (Solution)**: 8 feature cards with benefit-focused descriptions (Verified Off-Market Inventory, 1-on-1 Concierge Matching, 4K 3D Walkthroughs, Transparent Pricing, Private Wealth Pre-Approval, Legal & Escrow Support).
5. **How It Works Stepper**: Interactive 4-step progressive timeline with visual previews for each stage.
6. **Featured Residences Gallery**: Filterable luxury listing cards (Buy, Rent, Sold) with bed/bath/sqft specs, 3D tour badge, and direct tour inquiry modal.
7. **Client Testimonials Carousel**: Persona-driven reviews from buyers, sellers, and corporate relocation clients.
8. **FAQ Accordion**: Searchable objection handling addressing pricing, off-market matching, remote closing, and NDA security.
9. **Final CTA & Footer**: High-converting request form, live newsletter subscription, MLS certification, and legal disclaimers.

### Backend (Node.js + Express + MongoDB + Mongoose)
- `POST /api/leads` — Capture lead submissions (name, email, phone, intent, budget, preferred location, message).
- `POST /api/newsletter` — Capture footer newsletter subscriptions.
- `GET /api/properties` — Serve luxury property listings with category, type, and keyword filtering.
- `GET /api/testimonials` — Serve social proof testimonials.
- `GET /api/faqs` — Serve FAQ content.
- Input validation (`express-validator`), rate limiting (`express-rate-limit`), security headers (`helmet`), CORS configuration, and resilient in-memory fallback if MongoDB is starting up.

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v18+)
- npm (v9+)
- (Optional) MongoDB local service or MongoDB Atlas URI

### 1. Run the Backend API Server
```bash
cd backend
npm install
npm start
```
The backend server runs on `http://localhost:5000`.

*Note: Pre-populated luxury property, testimonial, and FAQ data are built in. If MongoDB is connected via `.env`, run `npm run seed` to populate your database.*

### 2. Run the Frontend App
```bash
cd frontend
npm install
npm run dev
```
Open your browser at `http://localhost:5173`.

---

## 📁 Directory Architecture

```
Real Estate VT/
├── backend/
│   ├── config/          # Database connection
│   ├── controllers/     # Lead, newsletter, property, testimonial, faq controllers
│   ├── middleware/      # Validation rules, rate limiters, error handlers
│   ├── models/          # Mongoose schemas (Lead, Newsletter, Property, Testimonial, FAQ)
│   ├── routes/          # REST API endpoints
│   ├── seed/            # Pre-populated seed data
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/          # Favicon, assets
│   ├── src/
│   │   ├── components/  # Navbar, Hero, SearchBar, FeaturedListings, SocialProof, ProblemStatement, Solution, HowItWorks, Testimonials, FAQ, FinalCTA, LeadModal, Toast, Footer
│   │   ├── hooks/       # useScrollSpy
│   │   ├── services/    # api.js client
│   │   ├── styles/      # index.css (Tailwind directives & glassmorphism)
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```
