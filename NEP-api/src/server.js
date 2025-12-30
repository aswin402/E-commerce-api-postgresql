import express from 'express'
import productRoutes from './routes/product.routes.js'
import orderRoutes from './routes/order.routes.js'

const app = express()

app.use(express.json())

app.use('/products', productRoutes)
app.use('/orders', orderRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
