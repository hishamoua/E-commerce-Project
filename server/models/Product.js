const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  sku: {
    type: String,
    required: true,
    unique: true, // le SKU doit être unique
    trim: true
  },
  product_image: {
    type: String, // URL de l'image du produit
    required: true
  },
  product_name: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  short_description: {
    type: String,
    required: true
  },
  long_description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  discount_price: {
    type: Number
  },
  options: {
    type: mongoose.Schema.Types.Mixed, // Permet n'importe quel type de données, idéal pour blob/array
    required: true
  },
  active: {
    type: Boolean,
    required: false
  }
}, {
  timestamps: true 
});

module.exports = mongoose.model('Product', ProductSchema);
