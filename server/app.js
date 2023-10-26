import express  from "express"
import dotenv from 'dotenv'
import connectDB from "./config/database.js"
import userRoutes from "./routes/userRoutes.js"
dotenv.config()
import { notFound , errorHandler } from "./middleware/errorMiddleWare.js"

const port = process.env.PORT || 5000

const app = express();

app.use(express.json());

app.use('/api',userRoutes)

app.use(notFound);
app.use(errorHandler);

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