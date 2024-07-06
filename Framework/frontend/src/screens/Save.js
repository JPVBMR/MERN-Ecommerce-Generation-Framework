import React, { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'
import { insertUserChoices, updateStoreAction } from '../actions/actions' // Importe a ação

const getUserChoicesToSave = (userChoices, storeID) => {
  const userChoicesToSave = {
    _id: storeID ? storeID : null,

    // Detalhes da Loja
    ownerName: userChoices.owner_name || ' ',
    ownerEmail: userChoices.owner_email || ' ',
    title: userChoices.title || ' ',
    landingPage: userChoices.landingPage || ' ',

    // Tema Bootstrap
    selectedBootstrap: userChoices.selectedBootstrap || ' ',

    // Configuração da Base de Dados MongoDB
    mongoURI: userChoices.MONGODB_URI || ' ',

    // Configurações da ProductListScreen
    includeProductListScreen: userChoices.includeProductListScreen,
    productListScreen: userChoices.productListScreen || null,

    /* Authentication Pages (auto include whene enabling place order)*/
    includeAuthPages: userChoices.includeAuthPages,
    authPages: {
      showAppBarInRegister: userChoices.authPages.showAppBarInRegister,
      showAppBarInLogin: userChoices.authPages.showAppBarInLogin,
      showCartIcon: userChoices.authPages.showCartIcon,
      JWT_SECRET: userChoices.authPages.JWT_SECRET || ' ',
    },

    // Configurações da Home Screen
    includeHomeScreen: userChoices.includeHomeScreen,
    homeScreen: {
      showAppBarInHome: userChoices.homeScreen.showAppBarInHome,
      homeTitle: userChoices.homeScreen.homeTitle || ' ',
      homeMessage: userChoices.homeScreen.homeMessage || ' ',
    },

    // Configurações do CartScreen
    includeShopCart: userChoices.includeShopCart,
    cartScreen: {
      showAppBarInCart: userChoices.cartScreen.showAppBarInCart,
      showCartIcon: userChoices.cartScreen.showCartIcon,
      cartMessage: userChoices.cartScreen.cartMessage,
    },

    // Configuraçoes do PLACE ORDER
    includePlaceOrder: userChoices.includePlaceOrder,
    placeOrderScreens: {
      showAppBarInPlaceOrder:
        userChoices.placeOrderScreens.showAppBarInPlaceOrder,
      PAYPAL_CLIENT_ID: userChoices.placeOrderScreens.PAYPAL_CLIENT_ID || ' ',
    },
  }
  return userChoicesToSave
}

function Save() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const dispatch = useDispatch() // Obtém a função dispatch do Redux
  const params = useParams()

  const storeID_toUpdate = params.id
  console.log('Save Store ID: ', storeID_toUpdate)

  /* Auto Include Auth Pages If Some Functionalities were selected */
  state.userChoices.includeAuthPages =
    state.userChoices.includeAuthPages || state.userChoices.includePlaceOrder

  /* REMOVE FILES FROM USER CHOICES TO REDUCE THE SIZE */
  const userChoicesRequestBody = getUserChoicesToSave(
    state.userChoices,
    storeID_toUpdate
  )
  console.log('Request: ', userChoicesRequestBody)

  /* CREATE LOGIC TO SAVE INTO MONGO DB */
  if (storeID_toUpdate === userChoicesRequestBody._id) {
    dispatch(updateStoreAction(userChoicesRequestBody))
  } else {
    dispatch(insertUserChoices(userChoicesRequestBody))
  }

  useEffect(() => {
    navigate('/', { state: { exemplo: false } })
  }, [navigate])

  return <div></div>
}

export default Save
