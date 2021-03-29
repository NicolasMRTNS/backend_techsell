const express = require('express')
const router = express.Router()
const productCtrl = require('../controllers/products')

router.post('/', productCtrl.createProduct)
router.get('/', productCtrl.getAllProducts)

module.exports = router
