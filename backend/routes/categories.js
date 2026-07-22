const express = require('express');
const router = express.Router();
const {
  getAllCategories,
  getCategoryById,
  getCategoryBySlug,
  createCategory,
  updateCategory,
  deleteCategory
} = require('../controllers/categoryController');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

router.get('/', getAllCategories);
router.get('/:id', getCategoryById);
router.get('/slug/:slug', getCategoryBySlug);
router.post('/', auth, upload.fields([{ name: 'coverImage', maxCount: 1 }, { name: 'gallery', maxCount: 10 }]), createCategory);
router.put('/:id', auth, upload.fields([{ name: 'coverImage', maxCount: 1 }, { name: 'gallery', maxCount: 10 }]), updateCategory);
router.delete('/:id', auth, deleteCategory);

module.exports = router;
