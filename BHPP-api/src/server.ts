import { Hono } from "hono";
import productRoutes from "./routes/product.route";
import { serve } from "bun";
import dotenv from "dotenv";

dotenv.config();

const app = new Hono();

app.route("/products", productRoutes);

app.get("/", (c) => c.text("Bun + Hono + Prisma 🚀"));

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT) || 3000,
});

console.log(`Server running on http://localhost:${process.env.PORT}`);
