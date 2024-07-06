export const productcontrollerFile = `import asyncHandler from 'express-async-handler'
import Product from './productModel.js'

import Category from '../categorias/categoryModel.js'

// fetch os produtos
//GET /api/products
//@acesso publico
const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1
  const keyword = req.query.keyword
    ? {
        $or: [
          {
            name: {
              $regex: req.query.keyword,
              $options: 'i',
            },
          },
        ],
      }
    : {}
  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))
  res.json({ products, page, pages: Math.ceil(count / pageSize) })
})
// fetch 1 produtoGET /api/products/:id @acesso publico
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id) //id que estiver no url

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc Apagar produto
// @route DELETE /api/products/:id
// @acess Privado/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    await product.remove()
    res.json({ message: 'Produto eliminado' })
  } else {
    res.status(404)
    throw new Error('Produto não encontrado')
  }
})

// @desc Criar produto
// @route POST /api/products
// @acess Privado/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Nome exemplo',
    price: 0,

    image: '/images/sample.jpg',
    brand: 'Exemplo',
    //category,
    countInStock: 0,
    numReviews: 0,
    description: 'Descrição exemplo',
  })

  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
})

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  console.log(req.body)
  const {
    name,
    price,
    description,
    image,
    brand,
    category,
    countInStock,
    content,
  } = req.body //retirei category

  const product = await Product.findById(req.params.id)

  if (product) {
    product.name = name || product.name
    product.price = price || product.price
    product.description = description || product.description
    product.image = image || product.image
    product.brand = brand || product.brand

    product.category = category || product.category
    product.countInStock = countInStock || product.countInStock
    product.novocampo.content = content || product.novocampo.content
    const updatedProduct = await product.save()
    res.json(updatedProduct)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc criar nova review
// @route POST /api/products/:id/review
// @acess Privado
// @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  Private

// @desc    get top rated products
// @route   GET /api/products/top
// @access  Public
const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(3)
  res.json(products)
})

const getNumbers = asyncHandler(async (req, res) => {
  try {
    const products = await Product.countDocuments()

    const orders = await Order.countDocuments()
    const categories = await Category.countDocuments()

    return res.json({ products, orders, categories })
  } catch (error) {
    console.log(error)
  }
})

//testar adicionar fields

const updateFields = asyncHandler(async (req, res) => {
  console.log('dentrodocontrolador', req.body)
  const { name } = req.body
  console.log('reboduy', { name })
  const campo = {
    name: name,
  }

  const edited = await Product.updateMany(
    {},
    {
      $set: {
        novocampo: campo,
      },
    },
    { upsert: false }
  )

  // edited.opa.push(campo)

  if (edited) {
    res.json(edited)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  getTopProducts,
  getNumbers,
  updateFields,
}
`
