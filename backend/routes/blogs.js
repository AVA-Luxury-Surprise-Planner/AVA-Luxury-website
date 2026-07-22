const express = require('express');
const router = express.Router();
const {
  getAllBlogs,
  getBlogById,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog
} = require('../controllers/blogController');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

router.get('/', getAllBlogs);
router.get('/:id', getBlogById);
router.get('/slug/:slug', getBlogBySlug);
router.post('/', auth, upload.single('coverImage'), createBlog);
router.put('/:id', auth, upload.single('coverImage'), updateBlog);
router.delete('/:id', auth, deleteBlog);

module.exports = router;
