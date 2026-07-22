const mongoose = require('mongoose');
const Category = require('./models/Category');
const Blog = require('./models/Blog');
const User = require('./models/User');

const MONGO_URI = 'mongodb+srv://foziyadamtew00_db_user:AbYuQDem8sEgUoNW@cluster0.4vzn0rq.mongodb.net/?appName=Cluster0';

const categories = [
  {
    name: 'Proposal Setup',
    slug: 'proposal',
    description: 'We design environments so breathtaking and so precisely attuned to your love story that the only possible answer is yes. From candlelit rooftops to live musicians, every element is shaped to reflect your bond.',
    coverImage: '/images/proposal-cover.jpg',
    gallery: ['/images/proposal-1.jpg', '/images/proposal-2.jpg', '/images/proposal-3.jpg']
  },
  {
    name: 'Birthday Celebration',
    slug: 'birthday',
    description: 'From intimate gatherings to grand celebrations, we orchestrate birthday experiences that leave guests in awe. Our team handles concept, decor, entertainment, catering, and the reveal moment.',
    coverImage: '/images/birthday-cover.jpg',
    gallery: ['/images/birthday-1.jpg', '/images/birthday-2.jpg', '/images/birthday-3.jpg']
  },
  {
    name: 'Anniversary Surprise',
    slug: 'anniversary',
    description: 'We transform spaces into intimate, awe-inspiring sanctuaries that mirror the depth of your love, from vow renewals in garden settings to private dinners under the stars.',
    coverImage: '/images/anniversary-cover.jpg',
    gallery: ['/images/anniversary-1.jpg', '/images/anniversary-2.jpg', '/images/anniversary-3.jpg']
  },
  {
    name: 'Romantic Dinner',
    slug: 'romantic',
    description: 'Our private dining experiences create an atmosphere of pure romance. Every detail, from the menu to the melodies, is designed to make your partner feel adored.',
    coverImage: '/images/romantic-cover.jpg',
    gallery: ['/images/romantic-1.jpg', '/images/romantic-2.jpg', '/images/romantic-3.jpg']
  },
  {
    name: 'Baby Shower',
    slug: 'babyshower',
    description: 'We create warm, beautiful celebrations for the journey of welcoming a new life, from elegant pastel arrangements to bespoke dessert tables.',
    coverImage: '/images/babyshower-cover.jpg',
    gallery: ['/images/babyshower-1.jpg', '/images/babyshower-2.jpg', '/images/babyshower-3.jpg']
  },
  {
    name: 'Corporate Events',
    slug: 'corporate',
    description: 'We bring meticulous attention and luxury production standards to executive dinners, product launches, team retreats, and awards galas.',
    coverImage: '/images/corporate-cover.jpg',
    gallery: ['/images/corporate-1.jpg', '/images/corporate-2.jpg', '/images/corporate-3.jpg']
  },
  {
    name: 'Holiday & Diaspora Surprise',
    slug: 'diaspora',
    description: 'We orchestrate homecoming celebrations and holiday surprises for returning loved ones, coordinating with family and shaping emotional reveal moments.',
    coverImage: '/images/diaspora-cover.jpg',
    gallery: ['/images/diaspora-1.jpg', '/images/diaspora-2.jpg', '/images/diaspora-3.jpg']
  },
  {
    name: 'Custom Surprise',
    slug: 'custom',
    description: 'Have a concept that defies categorization? Tell us your vision and we will architect it into a one-of-one expression of personalized luxury.',
    coverImage: '/images/custom-cover.jpg',
    gallery: ['/images/custom-1.jpg', '/images/custom-2.jpg', '/images/custom-3.jpg']
  }
];

const blogs = [
  {
    title: 'The Art of the Perfect Proposal',
    slug: 'art-of-perfect-proposal',
    coverImage: '/images/blog-proposal.jpg',
    content: '# The Art of the Perfect Proposal\n\nA proposal is one of life\'s most significant moments. At Ava Luxury, we believe every proposal should be as unique as the love story it celebrates.\n\n## Understanding Your Partner\n\nThe key to a memorable proposal lies in understanding what makes your partner feel loved. Is it grand gestures or intimate moments? Public declarations or private whispers?\n\n## Creating the Atmosphere\n\nLighting, music, and timing all play crucial roles. We work with you to curate every element, from the first note of music to the final rose petal.\n\n## The Reveal Moment\n\nThe moment of the question should feel inevitable yet surprising. Our team choreographs the perfect timing for maximum emotional impact.',
    author: 'Ava Luxury Team',
    category: 'Proposals',
    tags: ['proposal', 'romance', 'surprise', 'wedding']
  },
  {
    title: 'Planning a Surprise Birthday Party',
    slug: 'planning-surprise-birthday',
    coverImage: '/images/blog-birthday.jpg',
    content: '# Planning a Surprise Birthday Party\n\nSurprise birthday parties require careful planning and coordination. Here\'s our guide to creating an unforgettable celebration.\n\n## The Guest List\n\nStart with the guest list early. Make sure to include all the important people in their life while keeping the secret safe.\n\n## Theme and Decor\n\nChoose a theme that reflects their personality. Whether it\'s elegant and sophisticated or fun and playful, consistency is key.\n\n## Entertainment\n\nConsider hiring entertainment that matches their interests. From live bands to DJs, the right music sets the tone for the entire evening.',
    author: 'Ava Luxury Team',
    category: 'Birthdays',
    tags: ['birthday', 'party', 'surprise', 'celebration']
  },
  {
    title: 'Corporate Event Excellence',
    slug: 'corporate-event-excellence',
    coverImage: '/images/blog-corporate.jpg',
    content: '# Corporate Event Excellence\n\nCorporate events are opportunities to strengthen relationships, showcase achievements, and inspire teams. Here\'s how to make yours exceptional.\n\n## Brand Integration\n\nEvery element should reflect your brand values. From color schemes to messaging, consistency builds trust and recognition.\n\n## Guest Experience\n\nFocus on the journey from arrival to departure. Smooth check-ins, engaging content, and memorable takeaways create lasting impressions.\n\n## Technical Excellence\n\nAudio-visual quality can make or break an event. Invest in professional equipment and experienced technicians.',
    author: 'Ava Luxury Team',
    category: 'Corporate',
    tags: ['corporate', 'business', 'events', 'professional']
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Category.deleteMany({});
    await Blog.deleteMany({});
    console.log('Cleared existing data');

    // Insert categories
    await Category.insertMany(categories);
    console.log('Seeded categories');

    // Insert blogs
    await Blog.insertMany(blogs);
    console.log('Seeded blogs');

    // Create admin user if not exists
    const bcrypt = require('bcryptjs');
    const existingAdmin = await User.findOne({ email: 'admin@avaluxury.com' });
    if (!existingAdmin) {
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash('admin123', salt);
      await User.create({
        name: 'Admin User',
        email: 'admin@avaluxury.com',
        passwordHash,
        role: 'admin'
      });
      console.log('Created admin user: admin@avaluxury.com / admin123');
    }

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
