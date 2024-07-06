import React, { useEffect } from 'react'
import { useState } from 'react'

import axios from 'axios'

const useHome = () => {
  /* STORE DETAILS */
  const [title, setTitle] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  /* BOOTSTRAP THEME */
  const [selectedBootstrap, setSelectedBootstrap] = useState('flatly')

  /* DATABASE */
  const [mongoURI, setMongoURI] = useState('')

  /* Include Page Toogles + Landing Page */
  const [landingPage, setLandingPage] = useState('Home')
  const [includeAuthPages, setIncludeAuthPages] = useState(false)
  const [includeHomeScreen, setIncludeHomeScreen] = useState(true)
  const [includeShopCart, setIncludeShopCart] = useState(false)
  const [includePlaceOrder, setIncludePlaceOrder] = useState(false)
  const [includeProductListScreen, setIncludeProductListScreen] =
    useState(false)
  const [includeStatisticsScreen, setIncludeStatisticsScreen] = useState(false)

  /* Collaps/Expand Sections  */
  const [expandStandardUserPages, setExpandStandardUserPages] = useState(false)
  const [expandAdminUserPages, setExpandAdminUserPages] = useState(false)
  const [expandAuthPages, setExpandAuthPages] = useState(false)

  /* PRODUCT LIST  CONFIG*/
  const [productlist, setproductlist] = useState(false)
  const [tamanhoimagem, setTamanhoImagem] = useState('100')
  const [tamanhonavbar, setTamanhoNavBar] = useState('')
  const [show, setShow] = useState(false)
  const [footer, setFooter] = useState(false)
  const [navbar, setNavbar] = useState(false)
  const [darkmode, setDarkMode] = useState(false)
  const [logo, setLogo] = useState('')
  const [rodape, setRodape] = useState('')
  const [marca, setMarca] = useState('')
  const [color, setColor] = useState('#4582ec')
  const [navcolor, setNavColor] = useState('#4582ec')
  const [image, setImage] = useState('')
  const [novocamponome, setNovoCampoNome] = useState('')
  const [novocampo, setNovoCampo] = useState(false)
  const [textcolor, setTextColor] = useState('#ffffff')

  /* AUTHORIZATION CONFIG */
  const [showAppBarInRegister, setShowAppBarInRegister] = useState(false)
  const [showAppBarInLogin, setShowAppBarInLogin] = useState(false)

  /* HOME SCREEN CONFIG */
  const [previewHomePage, setPreviewHomePage] = useState(false)
  const [showAppBarInHome, setShowAppBarInHome] = useState(false)
  const [homeMessage, setHomeMessage] = useState('')
  const [homeTitle, setHomeTitle] = useState('')

  /* STATISTICS SCREEN CONFIG */
  const [previewStatistics, setPreviewStatistics] = useState(false)
  const [showAppBarInStatistics, setShowAppBarInStatistics] = useState(false)

  /* Shopping Cart */
  const [shoppingCart, setShoppingCart] = useState(false)
  const [cartMessage, setCartMessage] = useState('')
  const [showCartIcon, setShowCartIcon] = useState(false)
  const [showAppBarInCart, setShowAppBarInCart] = useState(false)

  /* PLACE ORDER CONFIG */
  const [previewPlaceOrder, setPreviewPlaceOrder] = useState(false)
  const [showAppBarInPlaceOrder, setShowAppBarInPlaceOrder] = useState(false)

  return {
    /* STORE DETAILS */
    title,
    setTitle,
    name,
    setName,
    email,
    setEmail,

    /* BOOTSTRAP THEME */
    selectedBootstrap,
    setSelectedBootstrap,

    /* DATABASE */
    mongoURI,
    setMongoURI,

    /* Include Page Toggles + Landing Page */
    landingPage,
    setLandingPage,
    includeAuthPages,
    setIncludeAuthPages,
    includeHomeScreen,
    setIncludeHomeScreen,
    includeShopCart,
    setIncludeShopCart,
    includePlaceOrder,
    setIncludePlaceOrder,
    includeProductListScreen,
    setIncludeProductListScreen,
    includeStatisticsScreen,
    setIncludeStatisticsScreen,

    /* Collapse/Expand Sections */
    expandStandardUserPages,
    setExpandStandardUserPages,
    expandAdminUserPages,
    setExpandAdminUserPages,
    expandAuthPages,
    setExpandAuthPages,

    /* PRODUCT LIST CONFIG */
    productlist,
    setproductlist,
    tamanhoimagem,
    setTamanhoImagem,
    tamanhonavbar,
    setTamanhoNavBar,
    show,
    setShow,
    footer,
    setFooter,
    navbar,
    setNavbar,
    darkmode,
    setDarkMode,
    logo,
    setLogo,
    rodape,
    setRodape,
    marca,
    setMarca,
    color,
    setColor,
    navcolor,
    setNavColor,
    image,
    setImage,
    novocamponome,
    setNovoCampoNome,
    novocampo,
    setNovoCampo,
    textcolor,
    setTextColor,

    /* AUTHORIZATION CONFIG */
    showAppBarInRegister,
    setShowAppBarInRegister,
    showAppBarInLogin,
    setShowAppBarInLogin,

    /* HOME SCREEN CONFIG */
    previewHomePage,
    setPreviewHomePage,
    showAppBarInHome,
    setShowAppBarInHome,
    homeMessage,
    setHomeMessage,
    homeTitle,
    setHomeTitle,

    /* STATISTICS SCREEN CONFIG */
    previewStatistics,
    setPreviewStatistics,
    showAppBarInStatistics,
    setShowAppBarInStatistics,

    /* Shopping Cart */
    shoppingCart,
    setShoppingCart,
    cartMessage,
    setCartMessage,
    showCartIcon,
    setShowCartIcon,
    showAppBarInCart,
    setShowAppBarInCart,

    /* PLACE ORDER CONFIG */
    previewPlaceOrder,
    setPreviewPlaceOrder,
    showAppBarInPlaceOrder,
    setShowAppBarInPlaceOrder,
  }
}

export default useHome
