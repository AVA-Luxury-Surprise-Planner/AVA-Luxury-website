const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  coverImage: { type: String },
  content: { type: String, required: true }, // Markdown or HTML content
  author: { type: String, default: 'Admin' },
  category: { type: String },
  tags: [{ type: String }],
  publishedAt: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Blog', BlogSchema);
