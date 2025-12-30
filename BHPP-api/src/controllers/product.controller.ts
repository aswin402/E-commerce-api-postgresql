import prisma from "../db/prisma";

export const createProduct = async (c: any) => {
  const { name, price, stock } = await c.req.json();
  const product = await prisma.product.create({
    data: { name, price, stock },
  });
  return c.json(product, 201);
};

export const getProducts = async (c: any) => {
  const products = await prisma.product.findMany();
  return c.json(products);
};