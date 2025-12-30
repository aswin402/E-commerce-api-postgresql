import prisma from "../config/prisma.js";

export const createOrder = async (req, res) => {
  try {
    const { items } = req.body;

    const order = await prisma.order.create({
      data: {
        items: {
          create: items.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
          })),
        },
      },
      include: { items: true },
    });

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
