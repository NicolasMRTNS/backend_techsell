const Product = require('../models/Product')

//POST controller
exports.createProduct = (req, res) => {
  const product = new Product({
    ...req.body,
    image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
  })
  console.log(product)
  return product
    .save()
    .then(() =>
      res.status(201).json({
        message: 'Objet créé !',
      })
    )
    .catch((error) => res.status(400).json({ error }))
}

//GET controller
exports.getAllProducts = (req, res) => {
  Product.find()
    .then((products) => res.status(200).json(products))
    .catch((error) => res.status(400).json({ error }))
}

//Delete controller
exports.deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: 'Deleted!' })
    })
    .catch((error) => res.status(400).json({ error }))
}
