const express = require('express');
const router = express.Router();
const {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking
} = require('../controllers/bookingController');
const auth = require('../middleware/auth');

router.get('/', auth, getAllBookings);
router.get('/:id', auth, getBookingById);
router.post('/', createBooking);
router.put('/:id', auth, updateBooking);
router.delete('/:id', auth, deleteBooking);

module.exports = router;
