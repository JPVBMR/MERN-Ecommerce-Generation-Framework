import asyncHandler from 'express-async-handler'
import UserChoiceModel from '../models/userChoicesModel.js'

// Criar um novo registro de escolhas do user
const insertUserChoices = asyncHandler(async (req, res) => {
  /* GET userChoices object from request body */
  var { userChoices } = req.body

  const {
    ownerName,
    ownerEmail,
    title,
    landingPage,
    selectedBootstrap,
    mongoURI,
    includeProductListScreen,
    productListScreen,
    includeAuthPages,
    authPages,
    includeHomeScreen,
    homeScreen,
    includeShopCart,
    cartScreen,
    includePlaceOrder,
    placeOrderScreens,
  } = userChoices

  /* Create the record based on the Model */
  const userChoicesRecord = new UserChoiceModel({
    ownerName,
    ownerEmail,
    title,
    landingPage,
    selectedBootstrap,
    mongoURI,
    includeProductListScreen,
    productListScreen,
    includeAuthPages,
    authPages,
    includeHomeScreen,
    homeScreen,
    includeShopCart,
    cartScreen,
    includePlaceOrder,
    placeOrderScreens,
  })

  const createdUserChoicesRecord = await userChoicesRecord.save()

  /* Respond to the request **/
  if (createdUserChoicesRecord) {
    res.status(201).json(createdUserChoicesRecord)
  } else {
    res.status(500).json(userChoicesRecord)
    throw new Error('Error Inserting the User Choices Record')
  }
})

/* GET ALL STORES CONFIGURATION RECORDS */
const getAllStores = asyncHandler(async (req, resp) => {
  const stores = await UserChoiceModel.find({})
  resp.json(stores)
})

/* GET STORE CONFIG BY ID */
const getStoreById = asyncHandler(async (req, res) => {
  const store = await UserChoiceModel.findById(req.params.id)

  if (store) {
    res.json(store)
  } else {
    res.status(404)
    throw new Error('Loja não encontrada')
  }
})

const updateStore = asyncHandler(async (req, resp) => {
  const store = await UserChoiceModel.findById(req.params.id)
  console.log(' updateStore; ', req.body.title)
  if (store) {
    store.ownerName = req.body.ownerName || store.ownerName
    store.ownerEmail = req.body.ownerEmail || store.ownerEmail
    store.title = req.body.title || store.title
    store.landingPage = req.body.landingPage || store.landingPage
    store.selectedBootstrap =
      req.body.selectedBootstrap || store.selectedBootstrap
    store.mongoURI = req.body.mongoURI || store.mongoURI
    store.includeProductListScreen =
      req.body.includeProductListScreen !== undefined
        ? req.body.includeProductListScreen
        : store.includeProductListScreen
    store.productListScreen =
      req.body.productListScreen || store.productListScreen
    store.includeAuthPages =
      req.body.includeAuthPages !== undefined
        ? req.body.includeAuthPages
        : store.includeAuthPages
    store.authPages = req.body.authPages || store.authPages
    store.includeHomeScreen =
      req.body.includeHomeScreen !== undefined
        ? req.body.includeHomeScreen
        : store.includeHomeScreen
    store.homeScreen = req.body.homeScreen || store.homeScreen
    store.includeShopCart =
      req.body.includeShopCart !== undefined
        ? req.body.includeShopCart
        : store.includeShopCart
    store.cartScreen = req.body.cartScreen || store.cartScreen
    store.includePlaceOrder =
      req.body.includePlaceOrder !== undefined
        ? req.body.includePlaceOrder
        : store.includePlaceOrder
    store.placeOrderScreens =
      req.body.placeOrderScreens || store.placeOrderScreens

    const updatedstore = await store.save()
    resp.status(200).json(updatedstore)
  } else {
    resp.status(404)
    throw new Error('Store Not Found')
  }
})

export { insertUserChoices, getAllStores, getStoreById, updateStore }
