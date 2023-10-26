const express = require('express');
const router = express.Router();
const { createNewOrder,getAllOrders,getOrderById,updateOrderById} = require('../controllers/orderControllers')

router.post('/orders',createNewOrder);

router.get('/orders',getAllOrders);

router.get('/orders/:id',getOrderById);

router.put('/orders/:id',updateOrderById)





