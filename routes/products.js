const express = require('express')
const router = express.Router()
const multer = require('../middleware/multer-config')
const productCtrl = require('../controllers/products')

router.post('/', multer, productCtrl.createProduct)
router.get('/', productCtrl.getAllProducts)

module.exports = router
