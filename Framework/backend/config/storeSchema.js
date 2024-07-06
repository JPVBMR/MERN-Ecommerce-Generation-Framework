  
 {
  'package.json': string,
 'readme.md':string,

  frontendMap = {
    'package.json': string,
    public: {
      'index.html': string
    },
    src: {
      'index.css': string,
      'index.js': string,
      'userChoices.json': {
            "owner_name": string,
            "owner_email": string,
            "title": string,
            "landingPage": string,
            "selectedBootstrap": string,
            "selectedBootstrap_File": string
            "MONGODB_URI": string,
            "includeProductListScreen": Boolean,
            productListScreen: {
              "navbar": Boolean,
              "footer": Boolean,
              "rodape": string,
              "color": string,
              "tamanhoimagem": string,
            },

            /* Authentication Pages (auto include when enabling place order) */
            includeAuthPages: Boolean,
            authPages: {
              "registerScreenFile": string,
              "loginScreenFile": string,

              "userConstantsFile": string,
              "userActionsFile": string,
              "userReducersFile": string,
              "userRoutesFile": string,
              "userControllerFile": string,
              "orderReducersFile": string,
              "orderConstantsFile": string,

              "showAppBarInRegister": Boolean,
              "showAppBarInLogin": Boolean,
              "showCartIcon": Boolean,
              "JWT_SECRET": 'jbravo1998',
            },

            // Configurações da Home Screen
            "includeHomeScreen": Boolean,
            homeScreen: {
              "homeScreenFile": string,
              "productScreenFile": string,
              "productComponentFile": string,
              "ratingFile": string,
              "filterCardFile": string,

              "showAppBarInHome": Boolean,
              "homeTitle": string,
              "homeMessage": string,
            },

            // Configurações do CartScreen
            "includeShopCart": Boolean,
            cartScreen: {
              "showAppBarInCart": Boolean,
              "showCartIcon": Boolean,
              "cartMessage": string,
            },

            // Configurações do PLACE ORDER
            "includePlaceOrder": Boolean,
            "placeOrderScreens": {
              "orderControllerFile": string,
              "orderRoutesFile": string,

              "placeOrderSceenFile": string,
              "shippingScreenFile": string,
              "selectPaymentScreenFile": string,
              "orderScreenFile": string,

              "checkoutStepsCompFile": string,
              "orderActionsFile": string,
              // orderConstants -> Created on the Auth

              "showAppBarInPlaceOrder": Boolean,
              "PAYPAL_CLIENT_ID":
                'ASHZsxfLcCAg2SmXSXxJgxWD7CJJN62PMHVZOjjajfMhWxgHQK055fBggPi6JbYElIpfkzneF1eNEX55',
            },
          },
      'bootstrap.min.css': string,

      'App.js': string,
      'store.js': string,

      components: {
        'Footer.js': string,
        'Header.js': string,
        'SearchBox.js': string,
        'Message.js': string,
        'CustomMessage.js': string,
        'CustomSpinner.js': string,
        'useHome.js': string,
        'FormContainer.js': string,
        'Loader.js': string,
        'Product.js': string,
        'Rating.js': string,
        'FilterCard.js': string,
        'CheckoutSteps.js':string,
      },

      actions: {
        'productActions.js': string,
        'categoryActions.js': string,
        'cartActions.js': string,
        'userActions.js': string,
        'orderActions.js':string,
      },

      reducers: {
        'productReducers.js': string,
        'categoryReducers.js': string,
        'cartReducers.js': string,
        'userReducers.js': string,
        'orderReducers.js': string,
      },

      constants: {
        'productConstants.js': string,
        'categoryConstants.js': string,

        'cartConstants.js': string,

        'userConstants.js': string,
        'orderConstants.js': string,
      },

      screens: {
          'ProductEditScreen.js': string,
          'ProductListScreen.js': string,
          'CategoriesList.js': string,
          'HomeScreen.js': string,
          'ProductScreen.js': string,
          'CartScreen.js': string,
          'LoginScreen.js': string,
          'RegisterScreen.js': string,
          'PlaceOrderScreen.js':
            string,
          'ShippingScreen.js':
            string,
          'SelectPaymentScreen.js':
            string,
          'OrderScreen.js': string,
      },
    },
  },

  /* DEFINE BACKEND STRUCTURE */
  backendMap = {
    'server.js': string,

    utils: {
      'generateToken.js': string,
    },
    models: {
      'productModel.js': string,
      'userModel.js': string,
      'orderModel.js': string,
    },
    middleware: {
      'authMiddleware.js': string,
      'errorMiddleware.js': string,
    },
    controllers: {
        'userController.js': string,
        'orderController.js':
          string,
      
    },
    routes: {
        'userRoutes.js': string,
        'orderRoutes.js': string,
    },
    config: {
      'db.js': string,
    },
    produtos: {
      'productModel.js': string,
      'productController.js': string,
      'uploadRoutes.js': string,
      'productRoutes.js': string,
    },
    categorias: {
      'categoryController.js': string,
      'categoryRoutes.js': string,
      'categoryModel.js': string,
    },
    cms: {
      'cmsModel.js': string,
      'cmsRoutes.js': string,
      'cmsController.js': string,
    },
    // Continue adicionando mais arquivos e diretórios condicionalmente.
  }

}