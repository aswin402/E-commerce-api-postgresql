import { Hono } from "hono";
import { createProduct, getProducts } from "../controllers/product.controller.js";

const productRoute = new Hono();

productRoute.post("/", createProduct);
productRoute.get("/", getProducts);

export default productRoute;
