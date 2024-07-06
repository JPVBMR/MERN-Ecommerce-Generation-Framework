export const categorycontrollerFile = `import Category from './categoryModel.js'
import asyncHandler from 'express-async-handler'

function createCategories(categories, parentId = null) {
  const categoryList = []
  let category
  if (parentId == null) {
    category = categories.filter((cat) => cat.parentId == undefined)
  } else {
    category = categories.filter((cat) => cat.parentId == parentId)
  }

  for (let cate of category) {
    categoryList.push({
      _id: cate._id,
      category: cate.category,
      parentId: cate.parentId,

      children: createCategories(categories, cate._id),
    })
  }

  return categoryList
}

const addCategory = (req, res) => {
  const categoryObj = {
    category: req.body.category,
  }

  if (req.body.parentId) {
    categoryObj.parentId = req.body.parentId
  }

  const cat = new Category(categoryObj)
  cat.save((error, category) => {
    if (error) return res.status(400).json({ error })
    if (category) {
      return res.status(201).json({ category })
    }
  })
}

const getCategories = (req, res) => {
  Category.find({}).exec((error, categories) => {
    if (error) return res.status(400).json({ error })
    if (categories) {
      const categoryList = createCategories(categories)
      res.status(200).json({ categoryList })
    }
  })
}
const create = asyncHandler(async (req, res) => {
  const { category } = req.body
  try {
    const categoryExist = await Category.findOne({ category })
    if (categoryExist) {
      return res.status(400).json({ errorMessage: 'ja existe' })
      //falta por o erro em json
    }
    let newCategory = new Category()
    newCategory.category = category

    newCategory = await newCategory.save()

    res.status(200).json({ category: newCategory })
  } catch (err) {
    console.log('erro ao criar categoria', err)
  }
  console.log('inside')
})

const readAll = asyncHandler(async (req, res) => {
  try {
    const categories = await Category.find({})

    res.status(200).json({ categories })
  } catch (err) {
    console.log('erro ao ler categoria', err)
  }
  console.log('inside2')
})

const removeCategory = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params
    const category = await Category.findOneAndDelete({ id })

    res.json(category)
  } catch (error) {
    console.log(error)
  }
})

const deleteCategories = asyncHandler(async (req, res) => {
  const { ids } = req.body.payload
  const deletedCategories = []
  for (let i = 0; i < ids.length; i++) {
    const deleteCategory = await Category.findOneAndDelete({ _id: ids[i]._id })
    deletedCategories.push(deleteCategory)
  }

  if (deletedCategories.length == ids.length) {
    res.status(200).json({ message: 'categoria removida' })
  } else {
    res.status(400).json({ message: 'categoria removida erro' })
  }
})

export {
  deleteCategories,
  getCategories,
  addCategory,
  create,
  readAll,
  removeCategory,
}
`
