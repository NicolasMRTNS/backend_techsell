const express = require('express')
const router = express.Router()
const productCtrl = require('../controllers/products')
const multer = require('../middleware/multer-config')

router.post('/', multer, productCtrl.createProduct)
router.get('/', productCtrl.getAllProducts)

module.exports = router
