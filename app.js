const express = require('express')
const bodyParser = require('body-parser')

const app = express()

//Headers to handle CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  )
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  )
  next()
})

//Body parser
app.use(express.json())

//Post route
app.post('/api/products', (req, res, next) => {
  console.log(req.body)
  res.status(201).json({
    message: 'Objet créé !',
  })
  next()
})

//Get route
app.use('/api/products', (req, res, next) => {
  const productData = [
    {
      id: '2153248944598',
      name: 'Xiaomi Redmi Note 8T',
      price: 500,
      category: 'Portable Android',
      description: "Un PC vendu comme neuf, n'a quasiment jamais été utilisé.",
      image: 'https://picsum.photos/250/200',
    },
    {
      id: '54542318415',
      name: 'Ordinateur portable HP',
      price: 1500,
      category: 'Ordinateur Portable',
      description: "Un PC vendu comme neuf, n'a quasiment jamais été utilisé.",
      image: 'https://picsum.photos/250/200',
    },
    {
      id: '5498454542318415',
      name: 'MacBook Pro 17 pouces',
      price: 2000,
      category: 'Ordinateur MacOS',
      description: "Un PC vendu comme neuf, n'a quasiment jamais été utilisé.",
      image: 'https://picsum.photos/250/200',
    },
    {
      id: '778742318415',
      name: 'iPhone X Max',
      price: 400,
      category: 'Portable Apple',
      description: "Un PC vendu comme neuf, n'a quasiment jamais été utilisé.",
      image: 'https://picsum.photos/250/200',
    },
  ]
  res.status(200).json(productData)
  next()
})

module.exports = app
