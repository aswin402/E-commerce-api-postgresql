import express from 'express';
import dotenv from 'dotenv';
import productRoutes from './routes/product.routes.js';
import orderRoutes from './routes/order.routes.js';

dotenv.config();
const app = express();
app.use(express.json());

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`server is running on port ${process.env.PORT}`);
})
