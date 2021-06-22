import express from 'express'
import dotenv from 'dotenv'
import { notFound, errorHandler } from './middleware/error.js'
import connectDB from './config/db.js'

import products from './routes/products.js'

dotenv.config()

connectDB()

const app = express();

app.get('/', (req, res) => {
    res.send('API is running')
})

app.use('/api/products', products)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));