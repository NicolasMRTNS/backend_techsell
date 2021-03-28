const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  userId: { type: String, required: false },
})

module.exports = mongoose.model('Product', productSchema)
