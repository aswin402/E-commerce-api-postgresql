import prisma from "../db/prisma.js";

export const createOrder = async (c) => {
  try {
    const body = await c.req.json();
    const { items } = body; // items = [{ productId, quantity }, ...]

    if (!items || items.length === 0) {
      return c.json({ message: "No items provided" }, 400);
    }

    // Calculate total for each item
    const itemsWithTotal = await Promise.all(
      items.map(async (item) => {
        const product = await prisma.product.findUnique({
          where: { id: item.productId },
        });

        if (!product) throw new Error(`Product ID ${item.productId} not found`);

        return {
          productId: item.productId,
          quantity: item.quantity,
          total: product.price * item.quantity,
        };
      })
    );

    const order = await prisma.order.create({
      data: {
        items: {
          create: itemsWithTotal,
        },
      },
      include: { items: true },
    });

    return c.json(order, 201);
  } catch (err) {
    console.error(err);
    return c.json({ error: err.message }, 500);
  }
};
