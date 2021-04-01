const express = require('express')
const router = express.Router()
const multer = require('../middleware/multer-config')
const productCtrl = require('../controllers/products')

router.get('/', productCtrl.getAllProducts)
router.post('/', multer, productCtrl.createProduct)

module.exports = router
