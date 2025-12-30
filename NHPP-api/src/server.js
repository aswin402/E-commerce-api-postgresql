import { Hono } from "hono";
import { serve } from "@hono/node-server";
import productRoutes from "./routes/product.route.js";
import orderRoutes from "./routes/order.route.js";
import dotenv from "dotenv";

dotenv.config();

const app = new Hono();


app.route("/products", productRoutes);
app.route("/orders", orderRoutes)


app.get("/", (c) => c.text("Hono API running"));

const PORT = process.env.PORT || 3000;

serve({
  fetch: app.fetch,
  port: PORT,
});

console.log(`Server running on http://localhost:${PORT}`);
