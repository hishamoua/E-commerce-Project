import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {notFound,errorHandler} from './middleware/errorMiddleware.js'
import connectDB from './config/db.js';
dotenv.config();
import productRoutes from './routes/productRoutes.js';
const port = process.env.PORT;

connectDB()

const app = express();

app.use(cors());


app.get('/',(req,res) => {
  res.send('API is running...')
});

app.use('/api/products',productRoutes);

app.use(notFound);
app.use(errorHandler);


app.listen(port,() => {
 console.log(`Server running on port ${port}`);
})