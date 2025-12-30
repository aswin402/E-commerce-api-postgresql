import {Hono} from 'hono';
import { createOrder } from '../controllers/order.controller.js';

const orderRouter = new Hono();

orderRouter.post("/", createOrder);

export default orderRouter;