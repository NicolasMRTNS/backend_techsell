import Product from '../models/Product'

//POST controller
export async function createProduct(req, res) {
  const product = new Product({
    ...req.body,
    image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
  })
  try {
    await product.save()
    return res.status(201).json({
      message: 'Objet créé !',
    })
  } catch (error) {
    return res.status(400).json({ error })
  }
}

//GET controller
export function getAllProducts(req, res) {
  Product.find()
    .then((products) => res.status(200).json(products))
    .catch((error) => res.status(400).json({ error }))
}

//Delete controller
export function deleteProduct(req, res) {
  Product.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: 'Deleted!' })
    })
    .catch((error) => res.status(400).json({ error }))
}
