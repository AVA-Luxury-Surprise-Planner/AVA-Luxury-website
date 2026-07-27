require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'https://ava-luxury-website-hima.vercel.app'],
  credentials: true
}));
app.use(express.json());

// Serve static files from uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to MongoDB
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/ava_luxury';
mongoose.connect(mongoUri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
const authRoutes = require('./routes/auth');
const categoryRoutes = require('./routes/categories');
const bookingRoutes = require('./routes/bookings');
const blogRoutes = require('./routes/blogs');
const contactRoutes = require('./routes/contact');

app.use('/api/auth', authRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/contact', contactRoutes);

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
