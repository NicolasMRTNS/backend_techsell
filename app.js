import express, { json, static } from 'express'
import { connect } from 'mongoose'
require('dotenv').config()
import productRoutes from './routes/products'
import userRoutes from './routes/users'
import { join } from 'path'

const app = express()

//Connection to MongoDB Atlas
connect(process.env.MONGO_ATLAS_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'))

//Headers to handle CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, enctype'
  )
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  )
  next()
})

app.use(json())

app.use('/images', static(join(__dirname, 'images')))
app.use('/api/products', productRoutes)
app.use('/api/auth', userRoutes)

export default app
