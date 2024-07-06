export const storeFile = `import { configureStore } from '@reduxjs/toolkit'
import {
  productListReducer,
  productDetailsReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
  productReviewCreateReducer,
  productTopRatedReducer,
} from './reducers/productReducers'
import { categoryReducers } from './reducers/categoryReducers'
import userChoices from './userChoices.json'

// Inicializar os reducers
let reducers = {
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productReviewCreate: productReviewCreateReducer,
  productTopRated: productTopRatedReducer,
  categories: categoryReducers,
}

/*** Aditional Reducers Will Be Inserted Here ***/

/* Standard Local Storage Data */
/* Get Cart Items from Local Storage */
const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

/* Get UserInfo from Local Storage */
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

/* Get SavedShippingAddress from Local Storage */
const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}

/* Load Above Data From Local Storage into Initial State */
const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
}




export const store = configureStore({
  reducer: reducers,
  preloadedState: initialState,
})

export default store


`
