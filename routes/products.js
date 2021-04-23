const express = require('express')
const router = express.Router()
// const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')
const productCtrl = require('../controllers/products')

router.get('/', productCtrl.getAllProducts)
router.post('/', multer, productCtrl.createProduct)
router.delete('/:id', productCtrl.deleteProduct)

module.exports = router
