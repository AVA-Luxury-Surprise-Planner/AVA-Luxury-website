const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  eventCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  eventDate: { type: Date, required: true },
  guestCount: { type: Number },
  budgetRange: { type: String },
  venue: { type: String },
  notes: { type: String },
  status: { 
    type: String, 
    enum: ['pending', 'confirmed', 'rejected', 'completed'], 
    default: 'pending' 
  },
  createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Booking', BookingSchema);
