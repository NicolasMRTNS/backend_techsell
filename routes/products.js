import { Router } from 'express'
const router = Router()
// const auth = require('../middleware/auth')
import multer from '../middleware/multer-config'
import {
  getAllProducts,
  createProduct,
  deleteProduct,
} from '../controllers/products'

router.get('/', getAllProducts)
router.post('/', multer, createProduct)
router.delete('/:id', deleteProduct)

export default router
