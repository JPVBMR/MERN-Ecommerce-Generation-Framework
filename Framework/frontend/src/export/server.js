export const serverFile = `import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import morgan from 'morgan'
import cors from 'cors'

import productRoutes from './produtos/productRoutes.js'
import uploadRoutes from './produtos/uploadRoutes.js'
import categoryRoutes from './categorias/categoryRoutes.js'
import cmsRoutes from './cms/cmsRoutes.js'

/* Aditional Imports Will Be Inserted Here */

import fs from 'fs'

/* Get User Selected Options */
dotenv.config()
const rawData = fs.readFileSync('./frontend/src/userChoices.json')
const userChoices = JSON.parse(rawData)
connectDB(userChoices.MONGODB_URI)

const app = express()
app.use(cors())

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.get('/', (req, res) => {
  res.send('API IS RUNN')
})


app.use('/api/products', productRoutes)
app.use('/api/upload', uploadRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/cms', cmsRoutes)

/** Aditional API Routes Will Be Inserted Here **/


const __dirname = path.resolve()
app.use('/backend/produtos/uploads', express.static(path.join(__dirname, '/backend/produtos/uploads')))

/** PayPal API Routes Will Be Inserted Here **/

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(\`Server running on port \${PORT}\`))


`
