const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
 customerId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Customer',
  },
 customer_id:{type:String,required:true},
 order_items:[{
  productId: {
   type: mongoose.Schema.Types.ObjectId,
   ref: 'Product'
  },
  
 

}],
 order_date:{
  type:Date
 },
 cart_total_price: {
  type:Number},
 status:{
  type:String,
  default:'open'
 }
},
{timestamps: true}
);


const Order = mongoose.model("Order",orderSchema)


module.exports = Order


