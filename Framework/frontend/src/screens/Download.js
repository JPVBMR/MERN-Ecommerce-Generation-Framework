import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import JSZip from 'jszip'
import { saveAs } from 'file-saver'

/**
 * Helper method to filter the userChoices object by removing keys containing 'file' or 'File' in their names to reduce size.
 *
 * @param {object} userChoices - The user choices object to be filtered.
 * @returns {string} - A JSON string representation of the filtered user choices.
 */
const filterUserChoices = (userChoices) => {
  // User Choices Create a filtered copy of state.userChoices
  const filteredUserChoices = Object.keys(userChoices).reduce((acc, key) => {
    if (!key.includes('file') && !key.includes('File')) {
      acc[key] = userChoices[key]
    }
    return acc
  }, {})
  const userChoicesFilteredContent = JSON.stringify(
    filteredUserChoices,
    null,
    2
  )

  return userChoicesFilteredContent
}

/* Helper method to create Root Directory Files like package.json and README.md */
const createRootFiles = (rootDir, rootFilesMap) => {
  Object.entries(rootFilesMap).forEach(([fileName, content]) => {
    rootDir.file(fileName, content)
  })
}

/**
 * @param {Object} userChoices - User choices/configuration.
 * @param {string} templateContent - App.js Template content to modify.
 * @returns {string} - Modified template content with screen imports and routes.
 */
const generateAppJSRoutes = (userChoices, templateContent) => {
  /* Check Pages & Functionalities to Add to our Store */
  var landingPage = userChoices.landingPage
  const shouldAdd_HomePage = userChoices.includeHomeScreen
  const shouldAdd_ProductList = userChoices.includeProductListScreen
  const shouldAdd_ShoppingCart = userChoices.includeShopCart
  const shouldAdd_AuthPages = userChoices.includeAuthPages
  const shouldAdd_PlaceOrder = userChoices.includePlaceOrder

  /* Replace Screens Import Tag  */
  let screenImports = ''
  let routes = ''

  if (shouldAdd_HomePage) {
    screenImports += `import HomeScreen from './screens/HomeScreen'\n`
    screenImports += `import ProductScreen from './screens/ProductScreen'\n`

    routes += `<Route path='/home' element={<HomeScreen />} />\n`
    routes += `<Route path='/home/product/:id' element={<ProductScreen />} />\n`
    routes += `<Route path='/product/:id' element={<ProductScreen />} />\n`
  }

  if (shouldAdd_ProductList) {
    screenImports += `import ProductListScreen from './screens/ProductListScreen'\n`
    screenImports += `import ProductEditScreen from './screens/ProductEditScreen'\n`
    screenImports += `import CategoriesList from './screens/CategoriesList'\n`

    routes += `<Route path='/admin/productList' element={<ProductListScreen />} />\n`
    routes += `<Route path="/admin/productlist/:pageNumber" element={<ProductListScreen />} exact />\n`
    routes += `<Route path="/product/:id/edit" element={<ProductEditScreen />} />\n`
    routes += `<Route path="/categories" element={<CategoriesList />} exact />\n`
  }

  if (shouldAdd_ShoppingCart) {
    screenImports += `import CartScreen from './screens/CartScreen'\n`
    routes += `<Route path='/cart/:id?' element={<CartScreen />} />\n`
    routes += `<Route path='/home/cart/:id?' element={<CartScreen />} />\n`
  }

  if (shouldAdd_AuthPages) {
    screenImports += `import LoginScreen from './screens/LoginScreen'\n`
    screenImports += `import RegisterScreen from './screens/RegisterScreen'\n`

    routes += `<Route path='/login' element={<LoginScreen />} />\n`
    routes += `<Route path='/register' element={<RegisterScreen />} />\n`
  }

  if (shouldAdd_PlaceOrder) {
    screenImports += `import PlaceOrderScreen from './screens/PlaceOrderScreen'\n`
    screenImports += `import ShippingScreen from './screens/ShippingScreen'\n`
    screenImports += `import SelectPaymentScreen from './screens/SelectPaymentScreen'\n`
    screenImports += `import OrderScreen from './screens/OrderScreen'\n`

    routes += `<Route path='/placeorder' element={<PlaceOrderScreen />} />\n`
    routes += `<Route path='/shipping' element={<ShippingScreen />} />\n`
    routes += `<Route path='/payment' element={<SelectPaymentScreen />} />\n`
    routes += `<Route path='/orders/:id' element={<OrderScreen />} />\n`
  }

  /* Set Landing Page */
  if (
    !shouldAdd_HomePage &&
    !shouldAdd_ShoppingCart &&
    !shouldAdd_ProductList
  ) {
    landingPage = ''
  }
  switch (landingPage) {
    case 'Home':
      routes +=
        "<Route path='/search/:searchString' element={<HomeScreen />} />"
      routes += "<Route path='/' element={<HomeScreen />} />\n"
      break
    case 'Shopping Cart':
      routes +=
        "<Route path='/search/:searchString' element={<CartScreen />} />"
      routes += "<Route path='/' element={<CartScreen />} />\n"
      break
    case 'Product List':
      routes +=
        "<Route path='/search/:searchString' element={<ProductListScreen />} />"
      routes += "<Route path='/' element={<ProductListScreen />} />\n"
      break
    default:
      routes += "<Route path='/' />\n"
      break
  }

  let appJScontent = templateContent.replace(
    '/** Screens Imports will be inserted here **/',
    screenImports
  )
  appJScontent = appJScontent.replace(
    '/** Insert your Application Routes here **/',
    routes
  )
  return appJScontent
}

/**
 * @param {Object} userChoices - User choices/configuration.
 * @param {string} templateContent - store.js Template content to modify.
 * @returns {string} - Modified template content with added reducers.
 */
const generateStoreJSReducers = (userChoices, templateContent) => {
  /* Check Pages & Functionalities to Add to our Store */
  const shouldAdd_ShoppingCart = userChoices.includeShopCart
  const shouldAdd_AuthPages = userChoices.includeAuthPages
  const shouldAdd_PlaceOrder = userChoices.includePlaceOrder

  let reducersTag = ''

  /* Add Shopping Cart Reducers */
  if (shouldAdd_ShoppingCart) {
    reducersTag +=
      '// Shopping Cart Reducer \n' +
      'if (userChoices.includeShopCart) {\n' +
      "const cartReducer = require('./reducers/cartReducers').cartReducer\n" +
      'reducers.cart = cartReducer\n' +
      '}\n'
  }

  /* Add User Login + Register Reducers */
  if (shouldAdd_AuthPages) {
    reducersTag +=
      '\n// Authorization Reducers\n' +
      'if (userChoices.includeAuthPages) {\n' +
      "const userLoginReducer = require('./reducers/userReducers').userLoginReducer\n" +
      "const userRegisterReducer = require('./reducers/userReducers').userRegisterReducer\n" +
      'reducers.userLogin = userLoginReducer\n' +
      'reducers.userRegister = userRegisterReducer\n' +
      '}\n'
  }

  /* Add PlaceOrder Reducers */
  if (shouldAdd_PlaceOrder) {
    reducersTag +=
      '\n// Order Reducers\n' +
      'if (userChoices.includePlaceOrder) {\n' +
      "const orderCreateReducer = require('./reducers/orderReducers').orderCreateReducer\n" +
      "const orderDetailsReducer = require('./reducers/orderReducers').orderDetailsReducer\n" +
      "const orderPayReducer = require('./reducers/orderReducers').orderPayReducer\n" +
      "const orderDeliveryReducer = require('./reducers/orderReducers').orderDeliveryReducer\n" +
      'reducers.orderCreate = orderCreateReducer\n' +
      'reducers.orderDetails = orderDetailsReducer\n' +
      'reducers.orderPay = orderPayReducer\n' +
      'reducers.orderDelivery = orderDeliveryReducer\n' +
      '}\n'
  }

  let storeJScontent = templateContent.replace(
    '/*** Aditional Reducers Will Be Inserted Here ***/',
    reducersTag
  )

  return storeJScontent
}

const generateServerJSRoutes = (userChoices, templateContent) => {
  const shouldAdd_AuthPages = userChoices.includeAuthPages
  const shouldAdd_PlaceOrder = userChoices.includePlaceOrder

  /* Check Server API Routes to add to our backend */
  var serverJS_importsTag = ''
  var serverJS_routesTag = ''
  var serverJS_paypalRoutesTag = ''

  if (shouldAdd_AuthPages) {
    serverJS_importsTag += "import userRoutes from './routes/userRoutes.js'\n"
    serverJS_routesTag += "app.use('/api/users', userRoutes)\n"
  }

  if (shouldAdd_PlaceOrder) {
    serverJS_importsTag += "import orderRoutes from './routes/orderRoutes.js'\n"
    serverJS_routesTag += "app.use('/api/orders', orderRoutes)\n"
    serverJS_paypalRoutesTag +=
      '/** PAYPAL ROUTE TO GET CLIENT ID FROM .userChoices file */\n' +
      "app.get('/api/config/paypal', (req, resp) =>\n" +
      'resp.send(userChoices.placeOrderScreens.PAYPAL_CLIENT_ID)\n' +
      ')\n'
  }

  /* Replace Tags */
  var updatedServerJScontent = templateContent
    .replace(
      '/* Aditional Imports Will Be Inserted Here */',
      serverJS_importsTag
    )
    .replace(
      '/** Aditional API Routes Will Be Inserted Here **/',
      serverJS_routesTag
    )
    .replace(
      '/** PayPal API Routes Will Be Inserted Here **/',
      serverJS_paypalRoutesTag
    )

  return updatedServerJScontent
}

/**
 * Creates the content for the root directory, including frontend, backend, and root files.
 * @param {object} state - The application state.
 * @param {JSZip} root - The root directory.
 * @param {JSZip} frontend - The frontend directory.
 * @param {JSZip} backend - The backend directory.
 */
const createRootContent = (state, root, frontend, backend) => {
  /* DEFINE FRONTEND STRUCTURE */
  const frontendMap = {
    'package.json': state.package_file,
    public: {
      'index.html': state.html_file,
    },
    src: {
      'index.css': state.indexcss_file,
      'index.js': state.index_file,
      'userChoices.json': filterUserChoices(state.userChoices),
      'bootstrap.min.css': state.userChoices.selectedBootstrap_File,

      'App.js': generateAppJSRoutes(state.userChoices, state.app_file),
      'store.js': generateStoreJSReducers(state.userChoices, state.store_file),

      components: {
        'Footer.js': state.footer_file,
        'Header.js': state.header_file,
        'SearchBox.js': state.searchbox_file,
        'Message.js': state.message_file,
        'CustomMessage.js': state.customMessage_file,
        'CustomSpinner.js': state.customSpinnerFile,
        'useHome.js': state.usehome_file,
        'FormContainer.js': state.formcontainer_file,
        'Loader.js': state.loader_file,

        ...(state.userChoices.includeHomeScreen && {
          'Product.js': state.userChoices.homeScreen.productComponentFile,
          'Rating.js': state.userChoices.homeScreen.ratingFile,
          'FilterCard.js': state.userChoices.homeScreen.filterCardFile,
        }),

        ...(state.userChoices.includePlaceOrder && {
          'CheckoutSteps.js':
            state.userChoices.placeOrderScreens.checkoutStepsCompFile,
        }),
      },

      actions: {
        'productActions.js': state.productaction_file,
        'categoryActions.js': state.categoryactions_file,

        ...(state.userChoices.includeShopCart && {
          'cartActions.js': state.cartActions_File,
        }),

        ...(state.userChoices.includeAuthPages && {
          'userActions.js': state.userChoices.authPages.userActionsFile,
        }),

        ...(state.userChoices.includePlaceOrder && {
          'orderActions.js':
            state.userChoices.placeOrderScreens.orderActionsFile,
        }),
      },

      reducers: {
        'productReducers.js': state.productreducer_file,
        'categoryReducers.js': state.categoryreducer_file,

        ...(state.userChoices.includeShopCart && {
          'cartReducers.js': state.cartReducer_File,
        }),

        ...(state.userChoices.includeAuthPages && {
          'userReducers.js': state.userChoices.authPages.userReducersFile,
          'orderReducers.js': state.userChoices.authPages.orderReducersFile,
        }),
      },

      constants: {
        'productConstants.js': state.productconstant_file,
        'categoryConstants.js': state.categoryconstant_file,

        ...(state.userChoices.includeShopCart && {
          'cartConstants.js': state.cartConstant_File,
        }),

        ...(state.userChoices.includeAuthPages && {
          'userConstants.js': state.userChoices.authPages.userConstantsFile,
          'orderConstants.js': state.userChoices.authPages.orderConstantsFile,
        }),
      },

      screens: {
        ...(state.userChoices.includeProductListScreen && {
          'ProductEditScreen.js': state.productedit_file,
          'ProductListScreen.js': state.productlist_file,
          'CategoriesList.js': state.categoryscreen_file,
        }),

        ...(state.userChoices.includeHomeScreen && {
          'HomeScreen.js': state.userChoices.homeScreen.homeScreenFile,
          'ProductScreen.js': state.userChoices.homeScreen.productScreenFile,
        }),

        ...(state.userChoices.includeShopCart && {
          'CartScreen.js': state.cartScreen_File,
        }),

        ...(state.userChoices.includeAuthPages && {
          'LoginScreen.js': state.userChoices.authPages.loginScreenFile,
          'RegisterScreen.js': state.userChoices.authPages.registerScreenFile,
        }),

        ...(state.userChoices.includePlaceOrder && {
          'PlaceOrderScreen.js':
            state.userChoices.placeOrderScreens.placeOrderSceenFile,
          'ShippingScreen.js':
            state.userChoices.placeOrderScreens.shippingScreenFile,
          'SelectPaymentScreen.js':
            state.userChoices.placeOrderScreens.selectPaymentScreenFile,
          'OrderScreen.js': state.userChoices.placeOrderScreens.orderScreenFile,
        }),
      },
    },
  }

  /* DEFINE BACKEND STRUCTURE */
  const backendMap = {
    'server.js': generateServerJSRoutes(state.userChoices, state.server_file),

    utils: {
      'generateToken.js': state.generateTokenFile,
    },
    models: {
      'productModel.js': state.productmodel_file,
      'userModel.js': state.userModelFile,
      'orderModel.js': state.orderModelFile,
    },
    middleware: {
      'authMiddleware.js': state.authMiddlewareFile,
      'errorMiddleware.js': state.errorMiddlewareFile,
    },
    controllers: {
      ...(state.userChoices.includeAuthPages && {
        'userController.js': state.userChoices.authPages.userControllerFile,
      }),
      ...(state.userChoices.includePlaceOrder && {
        'orderController.js':
          state.userChoices.placeOrderScreens.orderControllerFile,
      }),
      // Adicione mais controllers condicionalmente aqui, se necessário.
    },
    routes: {
      ...(state.userChoices.includeAuthPages && {
        'userRoutes.js': state.userChoices.authPages.userRoutesFile,
      }),
      ...(state.userChoices.includePlaceOrder && {
        'orderRoutes.js': state.userChoices.placeOrderScreens.orderRoutesFile,
      }),
      // Adicione mais rotas condicionalmente aqui, se necessário.
    },
    config: {
      'db.js': state.connectDB_file,
    },
    produtos: {
      'productModel.js': state.productmodel_file,
      'productController.js': state.productcontroller_file,
      'uploadRoutes.js': state.upload_file,
      'productRoutes.js': state.productroutes_file,
    },
    categorias: {
      'categoryController.js': state.categorycontroller_file,
      'categoryRoutes.js': state.categoryroutes_file,
      'categoryModel.js': state.categorymodel_file,
    },
    cms: {
      'cmsModel.js': state.cmsmodel_file,
      'cmsRoutes.js': state.cmsroutes_file,
      'cmsController.js': state.cmscontroller_file,
    },
    // Continue adicionando mais arquivos e diretórios condicionalmente.
  }

  /* DEFINE ROOT FILES */
  const rootFilesMap = {
    'package.json': state.packagegeral_file,
    'README.txt': state.readme,
  }
  createRootFiles(root, rootFilesMap)

  const createFilesAndDirectories = (map, dir) => {
    for (const [key, value] of Object.entries(map)) {
      if (typeof value === 'object') {
        // It's a directory, create the directory and go deeper
        const newDir = dir.folder(key)
        createFilesAndDirectories(value, newDir)
      } else {
        // It's a file, create the file
        dir.file(key, value)
      }
    }
  }

  /* Create Frontend & Backend Structure based on the user choices  */
  createFilesAndDirectories(frontendMap, frontend)
  createFilesAndDirectories(backendMap, backend)
}

function Download() {
  const navigate = useNavigate()
  const { state } = useLocation()

  const storeName = state.userChoices.title
  state.userChoices.includeAuthPages =
    state.userChoices.includeAuthPages || state.userChoices.includePlaceOrder

  /* Root + Frontend + Backend  */
  var root = new JSZip()
  var frontend = root.folder('frontend')
  var backend = root.folder('backend')
  createRootContent(state, root, frontend, backend)

  root.generateAsync({ type: 'blob' }).then((content) => {
    saveAs(content, storeName + '.zip')
  })

  useEffect(() => {
    navigate('/', { state: { exemplo: false } })
  }, [navigate])
  return <div></div>
}

export default Download
