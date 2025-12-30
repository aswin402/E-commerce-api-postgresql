import { pool } from '../db.js'

export const createOrder = async (req, res) => {
  const client = await pool.connect()

  try {
    const { items } = req.body
    let total = 0

    await client.query('BEGIN')

    for (const item of items) {
      const productRes = await client.query(
        'SELECT price, stock FROM products WHERE id = $1',
        [item.productId]
      )

      const product = productRes.rows[0]

      if (!product || product.stock < item.quantity) {
        throw new Error('Product unavailable')
      }

      total += product.price * item.quantity
    }

    const orderRes = await client.query(
      'INSERT INTO orders (total) VALUES ($1) RETURNING id',
      [total]
    )

    const orderId = orderRes.rows[0].id

    for (const item of items) {
      const productRes = await client.query(
        'SELECT price FROM products WHERE id = $1',
        [item.productId]
      )

      await client.query(
        `INSERT INTO order_items (order_id, product_id, quantity, price)
         VALUES ($1, $2, $3, $4)`,
        [orderId, item.productId, item.quantity, productRes.rows[0].price]
      )

      await client.query(
        'UPDATE products SET stock = stock - $1 WHERE id = $2',
        [item.quantity, item.productId]
      )
    }

    await client.query('COMMIT')
    res.status(201).json({ orderId, total })
  } catch (err) {
    await client.query('ROLLBACK')
    res.status(500).json({ error: err.message })
  } finally {
    client.release()
  }
}
