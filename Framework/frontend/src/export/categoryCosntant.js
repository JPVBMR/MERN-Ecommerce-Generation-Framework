export const categoryConstantFile = `export const GET_CATEGORIES = 'GET_CATEGORIES'
export const CREATE_CATEGORY = 'CREATE_CATEGORY'
`
export const categoryRoutesFile = `import express from 'express'

import {
  create,
  readAll,
  removeCategory,
  getCategories,
  addCategory,
  deleteCategories,
} from './categoryController.js'

const router = express.Router()

router.route('/').post(addCategory)
router.route('/').get(getCategories)
router.route('/delete').post(deleteCategories)
router.route('/:id').delete(removeCategory)

export default router
`
