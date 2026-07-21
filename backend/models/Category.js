const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String },
  coverImage: { type: String }, // URL to an image
  gallery: [{ type: String }], // array of image URLs
}, { timestamps: true });

module.exports = mongoose.model('Category', CategorySchema);
