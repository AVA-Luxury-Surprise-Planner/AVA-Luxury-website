const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  eventCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  eventDate: { type: Date, required: true },
  guests: { type: Number },
  budget: { type: String },
  location: { type: String },
  notes: { type: String },
  status: { 
    type: String, 
    enum: ['pending', 'confirmed', 'rejected', 'completed'], 
    default: 'pending' 
  },
}, { timestamps: true });

module.exports = mongoose.model('Booking', BookingSchema);
