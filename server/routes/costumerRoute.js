const express = require('express');
const router = express.Router();
const {RegisterCustomer,GetAllCust,Login, GetById,UpdateCust,DeleteCust} = require("../controllers/costumerController")


// Create a new customer
router.post('/customers',RegisterCustomer);

//Login 
router.post('/customers',Login);

// Get all customers
router.get('/customers', GetAllCust);

// Getting a customer by ID
router.get('/customers/:id', GetById);


// Update customer information by ID
router.put('/customers/:id', UpdateCust);

// Delete a customer by ID
router.delete('/customers/:id',DeleteCust);



module.exports = router;
