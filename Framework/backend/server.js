import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import morgan from 'morgan'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import cors from 'cors'

import storeRoutes from './routes/storeRoutes.js'

dotenv.config()

/* Database to save created stores configurations */
connectDB()

const app = express()
const __dirname = path.resolve()
app.use(cors())
app.use(express.json())

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

/** Create a simple route to  localhost:5000/ */
app.get('/', (req, res) => {
  res.send('API is running')
})

/**  Server API Routes **/
app.use('/api/store', storeRoutes)
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

/* Error to when the user selects any Route (URL) that it's not defined ex. {{DOMAIN_NAME}}/api/asdasdasd */
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}`))
