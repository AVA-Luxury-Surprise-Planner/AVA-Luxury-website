const Booking = require('../models/Booking');
const Category = require('../models/Category');

const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
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
    const { name, phone, email, eventCategory, eventDate, guests, budget, location, notes } = req.body;

    const category = await Category.findById(eventCategory);
    if (!category) {
      return res.status(400).json({ message: 'Invalid category' });
    }

    const booking = new Booking({
      name,
      phone,
      email,
      eventCategory,
      eventDate,
      guests,
      budget,
      location,
      notes,
      status: 'pending'
    });

    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const updateBooking = async (req, res) => {
  try {
    const { name, phone, email, eventCategory, eventDate, guests, budget, location, notes, status } = req.body;
    
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { name, phone, email, eventCategory, eventDate, guests, budget, location, notes, status },
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
  updateBooking,
  deleteBooking
};
