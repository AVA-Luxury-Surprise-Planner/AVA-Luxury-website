const mongoose = require('mongoose');
const Booking = require('../models/Booking');
const Category = require('../models/Category');

const getAllBookings = async (req, res) => {
  try {
    const filter = {};
    if (req.query.status) {
      filter.status = req.query.status;
    }
    const bookings = await Booking.find(filter)
      .populate('eventCategory', 'name slug')
      .sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate('eventCategory', 'name slug');
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const createBooking = async (req, res) => {
  try {
    const { fullName, phone, email, eventCategory, eventDate, guestCount, budgetRange, venue, notes } = req.body;

    const errors = [];
    if (!fullName) errors.push('Full name is required');
    if (!phone) errors.push('Phone is required');
    if (!email) errors.push('Email is required');
    else if (!/^\S+@\S+\.\S+$/.test(email)) errors.push('Valid email is required');
    if (!eventCategory) errors.push('Event category is required');
    else if (!mongoose.isValidObjectId(eventCategory)) errors.push('Invalid event category');
    if (!eventDate) errors.push('Event date is required');
    else if (new Date(eventDate) <= new Date()) errors.push('Event date must be in the future');
    if (guestCount !== undefined && guestCount !== null && guestCount !== '' && Number(guestCount) <= 0) {
      errors.push('Guest count must be a positive number');
    }

    if (errors.length > 0) {
      return res.status(400).json({ message: 'Validation failed', errors });
    }

    const category = await Category.findById(eventCategory);
    if (!category) {
      return res.status(400).json({ message: 'Validation failed', errors: ['Event category not found. Please select a valid option.'] });
    }

    const booking = new Booking({
      fullName,
      phone,
      email,
      eventCategory,
      eventDate,
      guestCount,
      budgetRange,
      venue,
      notes,
      status: 'pending'
    });

    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const updateBookingStatus = async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!['pending', 'confirmed', 'rejected', 'completed'].includes(status)) {
       return res.status(400).json({ message: 'Invalid status' });
    }

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.json({ message: 'Booking deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBookingStatus,
  deleteBooking
};
