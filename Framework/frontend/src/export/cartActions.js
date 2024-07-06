export const cartActionsFile = `import axios from 'axios'

import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
} from '../constants/cartConstants'

export const addToCartAction = (id, selectedQuantity) => async (
  dispatch,
  getState
) => {
  try {
    const { data } = await axios.get(\`/api/products/\${id}\`)
    
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        stockCount: data.stockCount,
        selectedQuantity,
      },
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
  } catch (error) {
    // Tratar do erro aqui
  }
}

export const removeFromCartAction = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const saveShippingAddressAction = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  })

  localStorage.setItem('shippingAddress', JSON.stringify(data))
}

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  })

  localStorage.setItem('paymentMethod', JSON.stringify(data))
}
`
