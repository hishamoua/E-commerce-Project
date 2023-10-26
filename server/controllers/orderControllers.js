const Order = require('../models/Order');
const asyncHandler = require('../middleware/asyncHandler');
const Customer = require('../models/Customer');
const Product = require('../models/Product');

// create new order
const createNewOrder = asyncHandler(async (req, res ,next) => {

 const {customer_id,order_items,cart_total_price} = req.body;

 const newOrder = await Order.create({
  customer_id,
  order_items,
  cart_total_price,
  status:'open',
  order_date: Date.now()
 })

 res.status(201).json({
  "status": 201,
  "message": "order created successfully"
})
})

// get All Orders 
const getAllOrders = asyncHandler ( async (req, res, next) =>
{
      const {page=1} = req.query;
      const limit = 10;

      const orders = await Order.find({})
      .limit(10)
      .populate('customerId', 'first_name last_name')
  

      const ordersWithAggregation = orders.map(order => ({
        _id: order._id,
        customerId: order.customerId, 
        itemTotal: order.orderItems.length,
        cart_total_price: order.order_items.reduce((total, item) => total + item.price, 0),
        customerInfo: {
          first_name: order.customerId.first_name,
          last_name: order.customerId.last_name,
        },
        status:order.status
      }));
      if(order){
      res.status(200).json({
        status:200,
        data:ordersWithAggregation
      })
    }
    else{
    res.status(404).json({
      "status": 404,
      "message": "order not found"
    })
}
})

// get order id 
const getOrderById = asyncHandler( async (req,res,next) => {
   const {id} = req.params.id;
   const order = await Order.findById({id})
   .populate('customerId', 'first_name last_name')
   .populate('order_items.productId','product_name price')
   if (order) {
    const ordersWithAggregation = {
      _id: order._id,
      customerId: order.customerId, 
      customerInfo: {
        first_name: order.customerId.first_name,
        last_name: order.customerId.last_name,
      },
      order_items: order.order_items.map(item => {
            return {
            itemID: item.productId._id,
            itemName: item.productId.product_name,
            quantity: item.productId.quantity, 
            unitPrice: product.price, 
            totalPrice: item.productId.quantity * product.price,
            } 
          
        }),
  
   }
   res.status(200).json(ordersWithAggregation);
  }
  else{
    res.status(400).json({
      message:'order not found'
    });
  }
})


// update order 

const updateOrderById = asyncHandler (async (req, res, next) => {
   const {id} = req.params;
   
   const order = await Order.findById({id})

   if(order){
    order.status = req.body.status
    res.status(200).json(
      {
        "status": 200,
        "message": "order status updated successfully"
      }
    )
   }
   else{
    res.status(404).json({
      "status": 404,
      "message": "invalid order id"
    })
   }

})

module.exports = {
 createNewOrder,
 getAllOrders,
 getOrderById,
 updateOrderById
}