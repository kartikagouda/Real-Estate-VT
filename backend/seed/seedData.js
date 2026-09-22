import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Property from '../models/Property.js';
import Testimonial from '../models/Testimonial.js';
import FAQ from '../models/FAQ.js';

dotenv.config();

export const initialProperties = [
  {
    title: 'The Solstice Sanctuary Villa',
    slug: 'solstice-sanctuary-villa',
    location: 'Aspen Highlands, Colorado',
    city: 'Aspen',
    price: 4850000,
    displayPrice: '$4,850,000',
    category: 'Buy',
    propertyType: 'Modern Estate',
    bedrooms: 5,
    bathrooms: 6,
    sqft: 6200,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    ],
    tag: 'Architectural Digest Featured',
    rating: 4.98,
    virtualTour: true,
    description: 'A masterpiece of contemporary mountain architecture with panoramic glass walls, heated infinity pool, timber craftsmanship, and integrated smart-home climate control.',
    amenities: ['Heated Infinity Pool', 'Wine Cellar', 'Private Sauna', 'Smart Home System', 'Ski-in Ski-out Access'],
    agent: {
      name: 'Evelyn St. Claire',
      role: 'Principal Luxury Advisor',
      phone: '+1 (800) 428-3681',
      email: 'evelyn@havenwood.com',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    },
  },
  {
    title: 'The Organic Modern Residence',
    slug: 'organic-modern-residence',
    location: 'Montecito Foothills, California',
    city: 'Santa Barbara',
    price: 6200000,
    displayPrice: '$6,200,000',
    category: 'Buy',
    propertyType: 'Coastal Villa',
    bedrooms: 4,
    bathrooms: 5,
    sqft: 5400,
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80',
    ],
    tag: 'Earthy Luxury Choice',
    rating: 4.96,
    virtualTour: true,
    description: 'Warm limestone, plaster walls, and floor-to-ceiling glass frame sweeping ocean vistas. Features a zero-edge reflection pool and private olive grove.',
    amenities: ['Private Olive Grove', 'Zero-edge Pool', 'Chef Kitchen', 'Solar & Battery Reserve', 'Yoga Pavilion'],
    agent: {
      name: 'Julian Vance',
      role: 'Montecito Specialist',
      phone: '+1 (800) 428-3682',
      email: 'julian@havenwood.com',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
    },
  },
  {
    title: 'Elysian Hillside Penthouse',
    slug: 'elysian-hillside-penthouse',
    location: 'Tribeca, New York',
    city: 'New York',
    price: 18500,
    displayPrice: '$18,500 / mo',
    category: 'Rent',
    propertyType: 'Penthouse Loft',
    bedrooms: 3,
    bathrooms: 3.5,
    sqft: 3800,
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600566753086-30f13f0b3ef5?auto=format&fit=crop&w=1200&q=80',
    ],
    tag: 'Private Terrace',
    rating: 4.92,
    virtualTour: true,
    description: 'Dual-level luxury penthouse with private elevator entrance, 1,200 sq.ft. landscaped rooftop garden, fireplace, and 360-degree skyline views.',
    amenities: ['Private Elevator', 'Landscaped Rooftop', 'Concierge Service', 'Fitness Studio', 'Sub-Zero Appliances'],
    agent: {
      name: 'Marcus Thorne',
      role: 'Metropolitan Director',
      phone: '+1 (800) 428-3683',
      email: 'marcus@havenwood.com',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
    },
  },
  {
    title: 'Cedar Creek Forest Haven',
    slug: 'cedar-creek-forest-haven',
    location: 'Lake Tahoe, Nevada',
    city: 'Lake Tahoe',
    price: 3450000,
    displayPrice: '$3,450,000',
    category: 'Buy',
    propertyType: 'Timber Estate',
    bedrooms: 4,
    bathrooms: 4,
    sqft: 4800,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    ],
    tag: 'Private Dock',
    rating: 4.95,
    virtualTour: true,
    description: 'Secluded waterfront sanctuary nestled in old-growth pine trees with custom timber beams, stone fireplaces, and direct private boat slip access.',
    amenities: ['Private Dock', 'Stone Fireplace', 'Wine Cellar', 'Heated Driveway', 'Outdoor Kitchen'],
    agent: {
      name: 'Evelyn St. Claire',
      role: 'Principal Luxury Advisor',
      phone: '+1 (800) 428-3681',
      email: 'evelyn@havenwood.com',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    },
  },
  {
    title: 'The Terra Cotta Oasis',
    slug: 'terra-cotta-oasis',
    location: 'Paradise Valley, Arizona',
    city: 'Scottsdale',
    price: 14200,
    displayPrice: '$14,200 / mo',
    category: 'Rent',
    propertyType: 'Desert Villa',
    bedrooms: 4,
    bathrooms: 4.5,
    sqft: 4200,
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80',
    ],
    tag: 'Fully Furnished',
    rating: 4.89,
    virtualTour: true,
    description: 'Resort-style desert compound featuring rammed-earth walls, courtyard fountains, outdoor fire lounge, and mountain views.',
    amenities: ['Fire Lounge', 'Courtyard Fountain', 'Zero-edge Lap Pool', 'Guest Casita'],
    agent: {
      name: 'Julian Vance',
      role: 'Montecito Specialist',
      phone: '+1 (800) 428-3682',
      email: 'julian@havenwood.com',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
    },
  },
  {
    title: 'Minimalist Sandstone Manor',
    slug: 'minimalist-sandstone-manor',
    location: 'Paradise Cove, Malibu',
    city: 'Malibu',
    price: 8900000,
    displayPrice: '$8,900,000',
    category: 'Sold',
    propertyType: 'Coastal Compound',
    bedrooms: 6,
    bathrooms: 7,
    sqft: 7100,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    gallery: [],
    tag: 'Recently Transacted',
    rating: 5.0,
    virtualTour: false,
    description: 'Closed in 11 days above asking price. Represented both buyer and seller with complete escrow privacy.',
    amenities: ['Private Beach Trail', 'Subterranean Garage', 'Wellness Spa'],
    agent: {
      name: 'Evelyn St. Claire',
      role: 'Principal Luxury Advisor',
      phone: '+1 (800) 428-3681',
      email: 'evelyn@havenwood.com',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    },
  },
];

export const initialTestimonials = [
  {
    name: 'Dr. Alistair & Elena Thorne',
    role: 'Biotech Executive & Architect',
    location: 'Montecito, CA',
    quote: 'Havenwood transformed what could have been a harrowing relocation process into a serene, tailored concierge experience. We found our dream home off-market in less than 2 weeks.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    transactionType: 'Buyer Persona',
    propertyBought: 'The Organic Modern Residence',
  },
  {
    name: 'Siddharth & Priya Mehta',
    role: 'Venture Capital Partner',
    location: 'Aspen, CO',
    quote: 'No hidden fees, no pressure, total transparency. The 3D virtual walkthroughs saved us 3 coast-to-coast flights. When we finally landed, the property exceeded every expectation.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    transactionType: 'Relocation Client',
    propertyBought: 'The Solstice Sanctuary Villa',
  },
  {
    name: 'Victoria Vance',
    role: 'Design Director',
    location: 'Tribeca, NY',
    quote: 'Selling our family estate felt emotional and intimidating. Evelyn and her team managed staging, title, escrow, and private showings flawlessly. We closed 12% over list price!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    transactionType: 'Seller Client',
    propertyBought: 'Tribeca Sky Terrace',
  },
];

export const initialFAQs = [
  {
    category: 'Getting Started',
    question: 'How does Havenwood match me with the right property or advisor?',
    answer: 'We begin with a brief 10-minute lifestyle discovery. Rather than sending you thousands of generic listings, our algorithms and human advisors analyze your spatial, budget, and neighborhood preferences to curate 3–5 high-fit off-market and verified properties.',
    order: 1,
  },
  {
    category: 'Fees & Transparency',
    question: 'Are there any hidden costs or upfront advisory fees?',
    answer: 'Zero hidden fees. Our initial consultations, market valuations, and property matching services are 100% complimentary. Brokerage fees follow standard industry guidelines and are disclosed upfront before any agreement is signed.',
    order: 2,
  },
  {
    category: 'Buying & Relocating',
    question: 'Can I complete a purchase remotely without visiting in person?',
    answer: 'Yes. Over 35% of our clients relocate from other states or countries. We provide 4K 3D virtual walkthroughs, drone neighborhood tours, third-party structural inspection reports, and digital title closing.',
    order: 3,
  },
  {
    category: 'Selling Your Home',
    question: 'How quickly can Havenwood market and list my home?',
    answer: 'Our dedicated creative production team stages, captures 3D video tours, creates bespoke landing pages, and launches targeted campaigns within 72 hours of signing.',
    order: 4,
  },
  {
    category: 'Financing & Legal',
    question: 'Do you offer mortgage pre-approval and legal escrow assistance?',
    answer: 'Yes. We partner with top-tier private wealth banks and experienced real estate attorneys to streamline pre-approvals, title checks, and escrow execution in one seamless dashboard.',
    order: 5,
  },
  {
    category: 'Security & Privacy',
    question: 'Is my personal and financial information kept confidential?',
    answer: 'Strict NDA compliance is standard across all Havenwood transactions. We prioritize privacy for high-net-worth individuals, executives, and families.',
    order: 6,
  },
];

export const seedDatabase = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/real_estate_db';
    await mongoose.connect(mongoUri);

    await Property.deleteMany({});
    await Testimonial.deleteMany({});
    await FAQ.deleteMany({});

    await Property.insertMany(initialProperties);
    await Testimonial.insertMany(initialTestimonials);
    await FAQ.insertMany(initialFAQs);

    console.log('[Seed] Database successfully populated with initial luxury data.');
    await mongoose.connection.close();
  } catch (error) {
    console.error('[Seed Error]', error.message);
  }
};

if (process.argv[1] && process.argv[1].endsWith('seedData.js')) {
  seedDatabase();
}
