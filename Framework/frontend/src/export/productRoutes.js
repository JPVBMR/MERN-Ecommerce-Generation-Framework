export const productRoutesFile = `import express from 'express'
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  getTopProducts,
  getNumbers,
  updateFields,
} from './productController.js'

const router = express.Router()

router.route('/').get(getProducts).post(createProduct)

router.get('/top', getTopProducts)
router.get('/numbers', getNumbers)
router.route('/teste').put(updateFields)
router
  .route('/:id')
  .get(getProductById)
  .delete(deleteProduct)
  .put(updateProduct)

export default router
`
