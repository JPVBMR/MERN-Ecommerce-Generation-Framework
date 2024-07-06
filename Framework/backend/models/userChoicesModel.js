import mongoose from 'mongoose'

const userChoicesSchema = new mongoose.Schema(
  {
    /* STORE DETAILS */
    ownerName: {
      type: String,
      required: true,
    },

    ownerEmail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },

    /* BOOTSTRAP & MONGO */
    landingPage: {
      type: String,
      required: true,
    },
    selectedBootstrap: {
      type: String,
      required: true,
    },
    mongoURI: {
      type: String,
      required: true,
    },

    /* ADD Product List Page */
    includeProductListScreen: {
      type: Boolean,
      default: false,
    },
    productListScreen: {
      navbar: {
        type: Boolean,
        default: false,
      },
      footer: {
        type: Boolean,
        default: false,
      },
      rodape: {
        type: String,
        required: false,
        default: ' ',
      },
      color: {
        type: String,
        required: false,
      },
      tamanhoimagem: {
        type: String,
        required: false,
      },
    },

    includeAuthPages: {
      type: Boolean,
      default: false,
    },
    authPages: {
      showAppBarInRegister: {
        type: Boolean,
        default: false,
      },
      showAppBarInLogin: {
        type: Boolean,
        default: false,
      },
      showCartIcon: {
        type: Boolean,
        default: false,
      },
      JWT_SECRET: {
        type: String,
        required: false,
        default: '',
      },
    },

    includeHomeScreen: {
      type: Boolean,
      default: false,
    },
    homeScreen: {
      showAppBarInHome: {
        type: Boolean,
        default: false,
      },
      homeTitle: {
        type: String,
        required: false,
        default: ' ',
      },
      homeMessage: {
        type: String,
        required: false,
        default: ' ',
      },
    },

    includeShopCart: {
      type: Boolean,
      default: false,
    },
    cartScreen: {
      showAppBarInCart: {
        type: Boolean,
        default: false,
      },
      showCartIcon: {
        type: Boolean,
        default: false,
      },
      cartMessage: {
        type: String,
        required: false,
        default: ' ',
      },
    },

    includePlaceOrder: {
      type: Boolean,
      default: false,
    },
    placeOrderScreens: {
      showAppBarInPlaceOrder: {
        type: Boolean,
        default: false,
      },
      PAYPAL_CLIENT_ID: {
        type: String,
        required: false,
        default: ' ',
      },
    },
  },
  {
    timestamps: true,
  }
)

const UserChoiceModel = mongoose.model('Configuration', userChoicesSchema)
export default UserChoiceModel
