import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'
import cors from 'cors';
import {notFound,errorHandler} from './middleware/errorMiddleware.js'
import connectDB from './config/db.js';
dotenv.config();
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js'
const port = process.env.PORT;

connectDB()

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// cookie parser middleware
app.use(cookieParser());

app.use(cors());


app.get('/',(req,res) => {
  res.send('API is running...')
});

app.use('/api/products',productRoutes);
app.use('/api/users',userRoutes);

app.use(notFound);
app.use(errorHandler);


app.listen(port,() => {
 console.log(`Server running on port ${port}`);
})