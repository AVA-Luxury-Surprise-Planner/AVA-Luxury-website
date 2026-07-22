const express = require('express');
const router = express.Router();
const {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBookingStatus,
  deleteBooking
} = require('../controllers/bookingController');
const auth = require('../middleware/auth');

router.get('/', auth, getAllBookings);
router.get('/:id', auth, getBookingById);
router.post('/', createBooking);
router.patch('/:id/status', auth, updateBookingStatus);
router.delete('/:id', auth, deleteBooking);

module.exports = router;
