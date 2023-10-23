const express = require('express');
const router = express.Router();
const {CreateProduct,GetAllPro,GetProById,SearchPro,UpdatePro,DeletePro}= require("../controllers/productController")

//creat a new product
router.post('/products', CreateProduct);

// List all the products
router.get('/products', GetAllPro);

// Get a product by ID
router.get('/products/:id', GetProById);

//Search for a product
router.get('/products', SearchPro);

// Update the product data
router.patch('/products/:id', UpdatePro);

// Delete a product
router.delete('/products/:id',DeletePro);

module.exports = router;
