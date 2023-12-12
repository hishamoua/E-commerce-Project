import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

// GET  fetch all /api/products
const getProducts = asyncHandler(async (req,res)=>{
 const products = await Product.find({})
 res.json(products);
});


// GET product by id /api/products/:id
const getProductById = asyncHandler(async (req,res)=>{
 const product = await Product.findById(req.params.id);
 if(product){
   return res.json(product);
  }
  else{
  res.status(404);
  throw new Error('Resource not found');
  }
});

// POST  Create a product /api/products
const createProduct = asyncHandler(async (req,res)=>{
  const products = new Product({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    category: 'Sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description',
  });

  const createProduct = await product.save();
  res.status(201).json(createdProduct);
 });

 // PUT  Update a product /api/products/:id
const updateProduct = asyncHandler(async (req,res)=>{
  const { name, price, description, image, brand, category, countInStock } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.category = category;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    throw new Error('Resource not found');
  }
 });

// Delete a product /api/products/:id
const deleteProduct = asyncHandler(async (req,res)=>{
  
  const product = await Product.findById(req.params.id);

  if (product) {
    await Product.deleteOne({_id:req.params._id});
     res.status(200).json({
       message:'Product deleted'  
     });
  } else {
    res.status(404);
    throw new Error('Resource not found');
  }
 });



export { getProducts, getProductById, createProduct, updateProduct, deleteProduct};

