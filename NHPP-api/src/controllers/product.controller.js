import prisma from "../db/prisma.js";

export const createProduct = async (c) => {
  try {
    const body = await c.req.json();
    const { name, price, stock } = body;

    const product = await prisma.product.create({
      data: { name, price, stock },
    });

    return c.json(product, 201);
  } catch (error) {
    console.error(error);
    return c.json(
      { message: "Failed to create product" },
      500
    );
  }
};

export const getProducts = async (c) => {
  try {
    const products = await prisma.product.findMany();
    return c.json(products);
  } catch (error) {
    console.error(error);
    return c.json(
      { message: "Failed to fetch products" },
      500
    );
  }
};
