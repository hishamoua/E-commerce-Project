const express = require("express");
const app = express();
const connectDB = require('./config/database');
require('dotenv').config()




const port = process.env.PORT || 5000;

const start = async () => {
  try {
   await connectDB(process.env.MONGO_URI)
   console.log('connected to db');
   app.listen(port,() => {
    console.log(`Server is listening port ${port}...`);
   })
  }
  catch(error) {
    console.log(error);
  }
 }
 start();
// Example route


