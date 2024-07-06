/* Exports */
import { FooterFile } from '../export/Footer'
import { HeaderFile } from '../export/Header'
import { SearchBoxFile } from '../export/SearchBox'
import { UseHomeFile } from '../export/UseHome'
import { ProductEditScreenFile } from '../export/ProductEditScreen'
import { AppFile } from '../export/App'
import { indexcssFile } from '../export/indexcss'
import { indexFile } from '../export'
import { packageFile, packageGeralFile } from '../export/package'
import { storeFile } from '../export/store'
import { productModelFile } from '../export/productModel'
import { cmsModelFile } from '../export/cmsModel'
import { categoryModelFile } from '../export/categoryModel'
import { productcontrollerFile } from '../export/productcontroller'
import { categorycontrollerFile } from '../export/categoryController'
import { ProductListScreenFile } from '../export/ProductListScreen'
import { categoryScreenFile } from '../export/categoryScreen'
import { productactionsFile } from '../export/productActions'
import { productReducerFile } from '../export/productReducer'
import { productconstantFile } from '../export/productconstant'
import { productRoutesFile } from '../export/productRoutes'
import { serverFile } from '../export/server'
import { uploadFile } from '../export/uploadRoutes'
import { categoryActionsFile } from '../export/categoryActions'
import { categoryReducerFile } from '../export/categoryReducer'
import { indexhtmlFile } from '../export/indexhtml'
import { FormContainerFile } from '../export/formContainer'
import { connectDBFile } from '../export/connectDb'
import { loaderFile } from '../export/loader'
import { messageFile } from '../export/message'
import { customMessageFile } from '../export/CustomMessage'
import { cmsControllerFile } from '../export/cmsController'
import { cmsRoutesFile } from '../export/cmsRoutes'
import { logoModelfile } from '../export/logoModel'
import { readme } from '../export/readme'

/* Constants Exports */
import {
  categoryConstantFile,
  categoryRoutesFile,
} from '../export/categoryCosntant'

/* Middleware Exports */
import { authMiddlewareFile } from '../export/authMiddleware'
import { errorMiddlewareFile } from '../export/errorMiddleware'

/* Utils Export */
import { generateTokenFile } from '../export/generateToken'

/* Models Exports */
import { orderModelFile } from '../export/orderModel'
import { userModelFile } from '../export/userModel'

/* Shopping Cart Exports */
import { cartActionsFile } from '../export/cartActions'
import { cartConstantFile } from '../export/cartConstants'
import { cartReducerFile } from '../export/cartReducers'
import { cartScreenFile } from '../export/CartScreen'

/* Home Screen Exports */
import { homeScreenFile } from '../export/HomeScreen'
import { productScreenFile } from '../export/ProductScreen'
import { productComponentFile } from '../export/Product'
import { ratingFile } from '../export/Rating'
import { customSpinnerFile } from '../export/CustomSpinner'
import { filterCardFile } from '../export/FilterCard'

/* Bootstrap Themes Exports */
import { sketchyThemeFile } from '../export/sketchyThemeFile'
import { flatlyThemeFile } from '../export/flatlyThemeFile'
import { darklyThemeFile } from '../export/darklyThemeFile'

/* Auth Exports */
import { loginScreenFile } from '../export/LoginScreen'
import { registerScreenFile } from '../export/RegisterScreen'
import { userActionsFile } from '../export/userActions'
import { userConstantsFile } from '../export/userConstants'
import { userReducersFile } from '../export/userReducers'
import { userControllerFile } from '../export/userController'
import { userRoutesFile } from '../export/userRoutes'
import { orderConstantsFile } from '../export/orderConstants'
import { orderReducersFile } from '../export/orderReducers'

/* Place Order Exports */
import { placeOrderSceenFile } from '../export/PlaceOrderScreen'
import { shippingScreenFile } from '../export/ShippingScreen'
import { selectPaymentScreenFile } from '../export/SelectPaymentScreen'
import { orderScreenFile } from '../export/OrderScreen'

import { checkoutStepsFile } from '../export/CheckoutSteps'
import { orderActionsFile } from '../export/orderActions'
import { orderControllerFile } from '../export/orderController'
import { orderRoutesFile } from '../export/orderRoutes'

import React from 'react'
import { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'
import './Home.css' // Importe o seu arquivo CSS

/* Framework Components */
import useHome from '../components/useHome'
import Message from '../components/Message'

/* Framework Sections Imports */
import StoreDetailsCard from '../sections/StoreDetailsCard'
import BootstrapSelectorCard from '../sections/BootstrapSelectorCard'
import MongoDBCard from '../sections/MongoDBCard'
import AdminFeatureSelectorCard from '../sections/AdminFeatureSelectorCard'
import AuthFeaturesCard from '../sections/AuthFeaturesCard'
import UserFeatureSelectorCard from '../sections/UserFeatureSelectorCard'

const NewStoreConfigScreen = ({ exemplo }) => {
  const navigate = useNavigate()
  const { state } = useLocation()

  /* FORM CONSTS AND SETTERS */
  const {
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
  } = useHome()

  /* FORM ON CLICK METHODS */
  const resetForm = () => {
    setDarkMode(false)
    setTextColor('#ffffff')
    setMarca('')
    setNovoCampo(false)
    setNovoCampoNome('')
    setEmail('')
    setName('')
    setRodape('')
    setTitle('')
    setNavColor('#4582ec')
    setFooter(false)
    setTamanhoNavBar('')
    setColor('#4582ec')
    setShow(false)
    setNavbar(false)
    setTamanhoImagem('100')
    setImage('')
  }

  const onClickSave = () => {
    const userChoices = {
      // Detalhes da Loja
      owner_name: name,
      owner_email: email,
      title: title,
      landingPage: landingPage,

      // Tema Bootstrap
      selectedBootstrap: selectedBootstrap,
      selectedBootstrap_File: selectedBootstrap.includes('flatly')
        ? flatlyThemeFile
        : selectedBootstrap.includes('darkly')
        ? darklyThemeFile
        : sketchyThemeFile,

      // Configuração da Base de Dados MongoDB
      MONGODB_URI: mongoURI,

      // Configurações da ProductListScreen
      includeProductListScreen: includeProductListScreen,
      productListScreen: {
        navbar: navbar,
        footer: footer,
        rodape: rodape,
        color: color,
        tamanhoimagem: tamanhoimagem,
      },

      /* Authentication Pages (auto include whene enabling place order)*/
      includeAuthPages: includeAuthPages || includePlaceOrder,
      authPages: {
        registerScreenFile: registerScreenFile,
        loginScreenFile: loginScreenFile,

        userConstantsFile: userConstantsFile,
        userActionsFile: userActionsFile,
        userReducersFile: userReducersFile,
        userRoutesFile: userRoutesFile,
        userControllerFile: userControllerFile,
        orderReducersFile: orderReducersFile,
        orderConstantsFile: orderConstantsFile,

        showAppBarInRegister: showAppBarInRegister,
        showAppBarInLogin: showAppBarInLogin,
        showCartIcon: showCartIcon,
        JWT_SECRET: 'jbravo1998',
      },

      // Configurações da Home Screen
      includeHomeScreen: includeHomeScreen,
      homeScreen: {
        homeScreenFile: homeScreenFile,
        productScreenFile: productScreenFile,
        productComponentFile: productComponentFile,
        ratingFile: ratingFile,
        filterCardFile: filterCardFile,

        showAppBarInHome: showAppBarInHome,
        homeTitle: homeTitle,
        homeMessage: homeMessage,
      },

      // Configurações do CartScreen
      includeShopCart: includeShopCart,
      cartScreen: {
        showAppBarInCart: showAppBarInCart,
        showCartIcon: showCartIcon,
        cartMessage: cartMessage,
      },

      // Configuraçoes do PLACE ORDER
      includePlaceOrder: includePlaceOrder,
      placeOrderScreens: {
        orderControllerFile: orderControllerFile,
        orderRoutesFile: orderRoutesFile,

        placeOrderSceenFile: placeOrderSceenFile,
        shippingScreenFile: shippingScreenFile,
        selectPaymentScreenFile: selectPaymentScreenFile,
        orderScreenFile: orderScreenFile,

        checkoutStepsCompFile: checkoutStepsFile,
        orderActionsFile: orderActionsFile,
        //orderConstants -> Created on the Auth

        showAppBarInPlaceOrder: showAppBarInPlaceOrder,
        PAYPAL_CLIENT_ID:
          'ASHZsxfLcCAg2SmXSXxJgxWD7CJJN62PMHVZOjjajfMhWxgHQK055fBggPi6JbYElIpfkzneF1eNEX55',
      },
    }
    navigate('/save', {
      state: {
        /* EXPORT FILES */
        footer_file: FooterFile,
        header_file: HeaderFile,

        searchbox_file: SearchBoxFile,
        usehome_file: UseHomeFile,
        productedit_file: ProductEditScreenFile,
        productlist_file: ProductListScreenFile,

        app_file: AppFile,
        indexcss_file: indexcssFile,
        index_file: indexFile,
        package_file: packageFile,
        packagegeral_file: packageGeralFile,
        store_file: storeFile,

        productmodel_file: productModelFile,
        cmsmodel_file: cmsModelFile,
        categorymodel_file: categoryModelFile,

        productcontroller_file: productcontrollerFile,
        categorycontroller_file: categorycontrollerFile,
        categoryactions_file: categoryActionsFile,

        categoryscreen_file: categoryScreenFile,
        categoryreducer_file: categoryReducerFile,
        categoryconstant_file: categoryConstantFile,
        categoryroutes_file: categoryRoutesFile,

        productaction_file: productactionsFile,
        productreducer_file: productReducerFile,
        productconstant_file: productconstantFile,
        productroutes_file: productRoutesFile,

        server_file: serverFile,
        upload_file: uploadFile,
        html_file: indexhtmlFile,
        formcontainer_file: FormContainerFile,
        connectDB_file: connectDBFile,
        loader_file: loaderFile,
        customSpinnerFile: customSpinnerFile,

        message_file: messageFile,
        customMessage_file: customMessageFile,
        cmscontroller_file: cmsControllerFile,
        cmsroutes_file: cmsRoutesFile,
        logomodel_file: logoModelfile,

        readme: readme,

        /* Shopping Cart Exports */
        cartActions_File: cartActionsFile,
        cartConstant_File: cartConstantFile,
        cartReducer_File: cartReducerFile,
        cartScreen_File: cartScreenFile,

        /* Backend Middleware + Util Files */
        authMiddlewareFile: authMiddlewareFile,
        errorMiddlewareFile: errorMiddlewareFile,
        generateTokenFile: generateTokenFile,

        /* Model Files */
        userModelFile: userModelFile,
        orderModelFile: orderModelFile,

        /* USER INPUTS */
        userChoices: userChoices,
      },
    })
  }

  const handleDownload = async () => {
    const userChoices = {
      // Detalhes da Loja
      owner_name: name,
      owner_email: email,
      title: title,
      landingPage: landingPage,

      // Tema Bootstrap
      selectedBootstrap: selectedBootstrap,
      selectedBootstrap_File: selectedBootstrap.includes('flatly')
        ? flatlyThemeFile
        : selectedBootstrap.includes('darkly')
        ? darklyThemeFile
        : sketchyThemeFile,

      // Configuração da Base de Dados MongoDB
      MONGODB_URI: mongoURI,

      // Configurações da ProductListScreen
      includeProductListScreen: includeProductListScreen,
      productListScreen: {
        navbar: navbar,
        footer: footer,
        rodape: rodape,
        color: color,
        tamanhoimagem: tamanhoimagem,
      },

      /* Authentication Pages (auto include whene enabling place order)*/
      includeAuthPages: includeAuthPages || includePlaceOrder,
      authPages: {
        registerScreenFile: registerScreenFile,
        loginScreenFile: loginScreenFile,

        userConstantsFile: userConstantsFile,
        userActionsFile: userActionsFile,
        userReducersFile: userReducersFile,
        userRoutesFile: userRoutesFile,
        userControllerFile: userControllerFile,
        orderReducersFile: orderReducersFile,
        orderConstantsFile: orderConstantsFile,

        showAppBarInRegister: showAppBarInRegister,
        showAppBarInLogin: showAppBarInLogin,
        showCartIcon: showCartIcon,
        JWT_SECRET: 'jbravo1998',
      },

      // Configurações da Home Screen
      includeHomeScreen: includeHomeScreen,
      homeScreen: {
        homeScreenFile: homeScreenFile,
        productScreenFile: productScreenFile,
        productComponentFile: productComponentFile,
        ratingFile: ratingFile,
        filterCardFile: filterCardFile,

        showAppBarInHome: showAppBarInHome,
        homeTitle: homeTitle,
        homeMessage: homeMessage,
      },

      // Configurações do CartScreen
      includeShopCart: includeShopCart,
      cartScreen: {
        showAppBarInCart: showAppBarInCart,
        showCartIcon: showCartIcon,
        cartMessage: cartMessage,
      },

      // Configuraçoes do PLACE ORDER
      includePlaceOrder: includePlaceOrder,
      placeOrderScreens: {
        orderControllerFile: orderControllerFile,
        orderRoutesFile: orderRoutesFile,

        placeOrderSceenFile: placeOrderSceenFile,
        shippingScreenFile: shippingScreenFile,
        selectPaymentScreenFile: selectPaymentScreenFile,
        orderScreenFile: orderScreenFile,

        checkoutStepsCompFile: checkoutStepsFile,
        orderActionsFile: orderActionsFile,
        //orderConstants -> Created on the Auth

        showAppBarInPlaceOrder: showAppBarInPlaceOrder,
        PAYPAL_CLIENT_ID:
          'ASHZsxfLcCAg2SmXSXxJgxWD7CJJN62PMHVZOjjajfMhWxgHQK055fBggPi6JbYElIpfkzneF1eNEX55',
      },
    }
    navigate('/download', {
      state: {
        /* EXPORT FILES */
        footer_file: FooterFile,
        header_file: HeaderFile,

        searchbox_file: SearchBoxFile,
        usehome_file: UseHomeFile,
        productedit_file: ProductEditScreenFile,
        productlist_file: ProductListScreenFile,

        app_file: AppFile,
        indexcss_file: indexcssFile,
        index_file: indexFile,
        package_file: packageFile,
        packagegeral_file: packageGeralFile,
        store_file: storeFile,

        productmodel_file: productModelFile,
        cmsmodel_file: cmsModelFile,
        categorymodel_file: categoryModelFile,

        productcontroller_file: productcontrollerFile,
        categorycontroller_file: categorycontrollerFile,
        categoryactions_file: categoryActionsFile,

        categoryscreen_file: categoryScreenFile,
        categoryreducer_file: categoryReducerFile,
        categoryconstant_file: categoryConstantFile,
        categoryroutes_file: categoryRoutesFile,

        productaction_file: productactionsFile,
        productreducer_file: productReducerFile,
        productconstant_file: productconstantFile,
        productroutes_file: productRoutesFile,

        server_file: serverFile,
        upload_file: uploadFile,
        html_file: indexhtmlFile,
        formcontainer_file: FormContainerFile,
        connectDB_file: connectDBFile,
        loader_file: loaderFile,
        customSpinnerFile: customSpinnerFile,

        message_file: messageFile,
        customMessage_file: customMessageFile,
        cmscontroller_file: cmsControllerFile,
        cmsroutes_file: cmsRoutesFile,
        logomodel_file: logoModelfile,

        readme: readme,

        /* Shopping Cart Exports */
        cartActions_File: cartActionsFile,
        cartConstant_File: cartConstantFile,
        cartReducer_File: cartReducerFile,
        cartScreen_File: cartScreenFile,

        /* Backend Middleware + Util Files */
        authMiddlewareFile: authMiddlewareFile,
        errorMiddlewareFile: errorMiddlewareFile,
        generateTokenFile: generateTokenFile,

        /* Model Files */
        userModelFile: userModelFile,
        orderModelFile: orderModelFile,

        /* USER INPUTS */
        userChoices: userChoices,
      },
    })
  }

  const handleLandingPageChange = (selectedOption) => {
    setLandingPage(selectedOption)
    // Activar a página seleccionada
    switch (selectedOption) {
      case 'Home':
        setIncludeHomeScreen(true)
        break
      case 'Shopping Cart':
        setIncludeShopCart(true)
        break
      case 'Product List':
        setIncludeProductListScreen(true)
        break
      default:
        // Caso de opção desconhecida, se necessário
        break
    }
  }

  return (
    <>
      <Row>
        <Col span={24}>
          {/* STORE DETAILS */}
          <StoreDetailsCard
            isEditMode={false}
            title={title}
            name={name}
            email={email}
            setTitle={setTitle}
            setName={setName}
            setEmail={setEmail}
          />
          <p></p>

          {/* BOOTSTRAP THEME */}
          <BootstrapSelectorCard
            selectedBootstrap={selectedBootstrap}
            setSelectedBootstrap={setSelectedBootstrap}
          />

          {/* MONGO DB */}
          <MongoDBCard mongoURI={mongoURI} setMongoURI={setMongoURI} />

          {/* Authentication */}
          <AuthFeaturesCard
            includeAuthPages={includeAuthPages}
            setIncludeAuthPages={setIncludeAuthPages}
            expandAuthPages={expandAuthPages}
            setExpandAuthPages={setExpandAuthPages}
            title={title}
            showCartIcon={showCartIcon}
            showAppBarInRegister={showAppBarInRegister}
            setShowAppBarInRegister={setShowAppBarInRegister}
            showAppBarInLogin={showAppBarInLogin}
            setShowAppBarInLogin={setShowAppBarInLogin}
          />
          <p></p>

          {/* PAGES - ADMIN USER */}
          <AdminFeatureSelectorCard
            title={title}
            showCartIcon={showCartIcon}
            /* PRODUCT LIST FIELDS */
            includeProductListScreen={includeProductListScreen}
            setIncludeProductListScreen={setIncludeProductListScreen}
            navbar={navbar}
            setNavbar={setNavbar}
            footer={footer}
            setFooter={setFooter}
            rodape={rodape}
            setRodape={setRodape}
            darkmode={darkmode}
            setDarkMode={setDarkMode}
            color={color}
            setColor={setColor}
            tamanhoimagem={tamanhoimagem}
            setTamanhoImagem={setTamanhoImagem}
            productlist={productlist}
            setproductlist={setproductlist}
            marca={marca}
            /* STATISTICS FIELDS */
            showAppBarInStatistics={showAppBarInStatistics}
            setShowAppBarInStatistics={setShowAppBarInStatistics}
            previewStatistics={previewStatistics}
            setPreviewStatistics={setPreviewStatistics}
            includeStatisticsScreen={includeStatisticsScreen}
            setIncludeStatisticsScreen={setIncludeStatisticsScreen}
            /* Expand/Collapse Section */
            expandAdminUserPages={expandAdminUserPages}
            setExpandAdminUserPages={setExpandAdminUserPages}
          />
          <p></p>

          {/* PAGES - STANDARD USER */}
          <UserFeatureSelectorCard
            landingPage={landingPage}
            handleLandingPageChange={handleLandingPageChange}
            expandStandardUserPages={expandStandardUserPages}
            setExpandStandardUserPages={setExpandStandardUserPages}
            footer={footer}
            rodape={rodape}
            title={title}
            email={email}
            name={name}
            /* Home Page Section */
            includeHomeScreen={includeHomeScreen}
            setIncludeHomeScreen={setIncludeHomeScreen}
            homeTitle={homeTitle}
            setHomeTitle={setHomeTitle}
            homeMessage={homeMessage}
            setHomeMessage={setHomeMessage}
            showAppBarInHome={showAppBarInHome}
            setShowAppBarInHome={setShowAppBarInHome}
            previewHomePage={previewHomePage}
            setPreviewHomePage={setPreviewHomePage}
            /* Cart Screen */
            showAppBarInCart={showAppBarInCart}
            setShowAppBarInCart={setShowAppBarInCart}
            includeShopCart={includeShopCart}
            setIncludeShopCart={setIncludeShopCart}
            showCartIcon={showCartIcon}
            setShowCartIcon={setShowCartIcon}
            cartMessage={cartMessage}
            setCartMessage={setCartMessage}
            shoppingCart={shoppingCart}
            setShoppingCart={setShoppingCart}
            /* Place Order Screen  */
            includePlaceOrder={includePlaceOrder}
            setIncludePlaceOrder={setIncludePlaceOrder}
            showAppBarInPlaceOrder={showAppBarInPlaceOrder}
            setShowAppBarInPlaceOrder={setShowAppBarInPlaceOrder}
            previewPlaceOrder={previewPlaceOrder}
            setPreviewPlaceOrder={setPreviewPlaceOrder}
          />
          <p></p>
        </Col>
      </Row>
      <p></p>

      {/* BUTTON SECTION */}
      <>
        <Button
          onClick={(e) => {
            resetForm()
            onClickSave()
          }}
        >
          {' '}
          Save
          <svg
            className='ml-2'
            stroke='currentColor'
            fill='currentColor'
            stroke-width='0'
            viewBox='0 0 24 24'
            height='1.5em'
            width='1.5em'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path fill='none' d='M9 14H15V19H9zM11 5H13V7H11z'></path>
            <path
              fill='none'
              d='M7,14c0-1.103,0.897-2,2-2h6c1.103,0,2,0.897,2,2v5h2.001L19,8.414L15.586,5H15v4h-1h-1h-2H9H7V5H5v14h2V14z'
            ></path>
            <path d='M5,21h14c1.103,0,2-0.897,2-2V8c0-0.265-0.105-0.52-0.293-0.707l-4-4C16.52,3.105,16.266,3,16,3H5C3.897,3,3,3.897,3,5v14 C3,20.103,3.897,21,5,21z M15,19H9v-5h6V19z M13,7h-2V5h2V7z M5,5h2v4h2h2h2h1h1V5h0.586L19,8.414L19.001,19H17v-5 c0-1.103-0.897-2-2-2H9c-1.103,0-2,0.897-2,2v5H5V5z'></path>
          </svg>
        </Button>

        <Button
          variant='info'
          className='ml-2 mr-2'
          onClick={(e) => {
            resetForm()
            handleDownload()
          }}
        >
          {' '}
          Download
          <svg
            className='ml-2'
            stroke='currentColor'
            fill='currentColor'
            stroke-width='0'
            viewBox='0 0 1024 1024'
            height='1.5em'
            width='1.5em'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z'></path>
          </svg>
        </Button>
        <Button
          style={{ border: '1px solid grey' }}
          variant='error'
          className='mr-3'
          onClick={resetForm}
        >
          {' '}
          Clear
          <svg
            className='ml-2'
            stroke='currentColor'
            fill='currentColor'
            stroke-width='0'
            viewBox='0 0 1024 1024'
            height='1.5em'
            width='1.5em'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z'></path>
          </svg>
        </Button>
        <p></p>
      </>
      {state == null ? <p></p> : <Message>Download feito com sucesso</Message>}
    </>
  )
}

export default NewStoreConfigScreen
