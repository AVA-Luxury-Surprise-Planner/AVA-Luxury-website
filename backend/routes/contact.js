const express = require('express');
const router = express.Router();
const {
  getAllMessages,
  getMessageById,
  createMessage,
  deleteMessage
} = require('../controllers/contactController');
const auth = require('../middleware/auth');

router.get('/', auth, getAllMessages);
router.get('/:id', auth, getMessageById);
router.post('/', createMessage);
router.delete('/:id', auth, deleteMessage);

module.exports = router;
