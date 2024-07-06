import React from 'react'
import {
  Button,
  Card,
  Col,
  Dropdown,
  FormLabel,
  Row,
  Form,
} from 'react-bootstrap'
import Switch from '../components/Switch'
import HomeScreenPreview from '../previews/HomeScreenPreview'
import Footer from '../components/Footer'
import CartScreenPreview from '../previews/CartScreenPreview'
import PlaceOrderScreenPreview from '../previews/PlaceOrderScreenPreview'

const UserFeatureSelectorCard = (props) => {
  const {
    landingPage,
    handleLandingPageChange,
    expandStandardUserPages,
    setExpandStandardUserPages,

    footer,
    rodape,
    title,
    email,
    name,

    /* Home Page Section */
    includeHomeScreen,
    setIncludeHomeScreen,
    homeTitle,
    setHomeTitle,
    homeMessage,
    setHomeMessage,
    showAppBarInHome,
    setShowAppBarInHome,
    previewHomePage,
    setPreviewHomePage,

    /* Cart Screen */
    showAppBarInCart,
    setShowAppBarInCart,
    includeShopCart,
    setIncludeShopCart,
    showCartIcon,
    setShowCartIcon,
    cartMessage,
    setCartMessage,
    shoppingCart,
    setShoppingCart,

    /* Place Order Screen */
    includePlaceOrder,
    setIncludePlaceOrder,
    showAppBarInPlaceOrder,
    setShowAppBarInPlaceOrder,
    previewPlaceOrder,
    setPreviewPlaceOrder,
  } = props

  const onClickPreviewHomeScreen = () => {
    /*  const homeScreenParameters = {
      // Detalhes da Loja
      name: name,
      email: email,
      title: title,

      // Configurações da Página Inicial
      homeScreen: {
        /* Page Properties *
        showAppBarInHome: showAppBarInHome,
        homeTitle: homeTitle,
        homeMessage: homeMessage,
      },

      cartScreen: {
        showAppBarInCart: showAppBarInCart,
        showCartIcon: showCartIcon,
      },
    } */
    //REPLACE CONTENT OF import userChoices from '../userChoices.json' with the json value of homeScreenParameters
    setPreviewHomePage(!previewHomePage)
  }

  /* RENDER:  HOME SELECTOR  */
  const renderHomePageSection = () => {
    return (
      <>
        <Card className='my-3'>
          <Card.Body>
            <Card.Title>
              <h2>
                <Switch
                  isToggled={includeHomeScreen}
                  onToggle={() => setIncludeHomeScreen(!includeHomeScreen)}
                ></Switch>{' '}
                Home Page
              </h2>
            </Card.Title>
            <Card.Text>
              The Home Page is your online store's standard gateway, providing
              an overview of the products to sell and includes the following
              features:
              <ul>
                <li>
                  <strong>Browse Products:</strong> Scroll through our
                  collection of products
                </li>
                <li>
                  <strong>Product Details:</strong> Includes a page to display
                  the product details for each individual product
                </li>
                <li>
                  <strong>Apply Filters:</strong> Filter by brand, category,
                  price range, and even sorting preferences.
                </li>
              </ul>
            </Card.Text>

            <p></p>

            <Form.Group controlId='homeTitle'>
              <Form.Label>Home page title:</Form.Label>
              <Form.Control
                type='text'
                value={homeTitle}
                onChange={(e) => setHomeTitle(e.target.value)}
                placeholder='Ex. Welcome to our home page'
              />
            </Form.Group>
            <p></p>

            <Form.Group controlId='emptyHomeMsg' className='mb-3'>
              <Form.Label>Empty catalog message (optional):</Form.Label>
              <Form.Control
                type='text'
                value={homeMessage}
                onChange={(e) => setHomeMessage(e.target.value)}
                placeholder='Ex. There are no products to show. Please try again later'
              />
            </Form.Group>

            <Switch
              isToggled={showAppBarInHome}
              onToggle={() => setShowAppBarInHome(!showAppBarInHome)}
            ></Switch>
            <FormLabel>Include navigation bar </FormLabel>

            <p></p>
            <Button onClick={() => onClickPreviewHomeScreen()}>
              {!previewHomePage ? 'Preview' : 'Hide'}
              {!previewHomePage ? (
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
                  <path d='M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z'></path>
                </svg>
              ) : (
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
                  <path d='M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z'></path>
                  <path d='M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z'></path>
                </svg>
              )}
            </Button>
            <p></p>
            {previewHomePage && (
              <>
                <h2>
                  <i className='fa-solid fa-magnifying-glass'></i>{' '}
                </h2>
                <HomeScreenPreview
                  title={title}
                  homeTitle={homeTitle}
                  homeMessage={homeMessage}
                  showAppBarInHome={showAppBarInHome}
                  showCartIcon={showCartIcon}
                ></HomeScreenPreview>

                {footer === true && <Footer rodape={rodape}></Footer>}
              </>
            )}
          </Card.Body>
        </Card>
      </>
    )
  }

  /* RENDER:  CART SELECTOR  */
  const renderShoppingCartSection = () => {
    return (
      <>
        <Card className='my-3'>
          <Card.Body>
            <Card.Title>
              <h2>
                <Switch
                  isToggled={includeShopCart}
                  onToggle={() => setIncludeShopCart(!includeShopCart)}
                ></Switch>{' '}
                Shopping Cart Page
              </h2>
            </Card.Title>
            <Card.Text>
              To include the Shopping Cart Page component, simply check the
              corresponding checkbox. This page shows the list of products in
              the cart and displays the individual and total amount of the
              products. You can also provide an optional message to display to
              the users when the shopping cart is empty.
            </Card.Text>

            <Switch
              isToggled={showAppBarInCart}
              onToggle={() => setShowAppBarInCart(!showAppBarInCart)}
            ></Switch>
            <FormLabel>Include navigation bar </FormLabel>
            <p></p>
            <Switch
              isToggled={showCartIcon}
              onToggle={() => setShowCartIcon(!showCartIcon)}
            ></Switch>
            <FormLabel>Include navbar icon </FormLabel>

            <Form.Group controlId='emptyCartMsg'>
              <Form.Label>Empty cart message (optional):</Form.Label>
              <Form.Control
                type='text'
                value={cartMessage}
                onChange={(e) => setCartMessage(e.target.value)}
                placeholder='Ex. There are no products in your cart.'
              />
            </Form.Group>

            <p></p>
            <Button onClick={() => setShoppingCart(!shoppingCart)}>
              {!shoppingCart ? 'Preview' : 'Hide'}
              {!shoppingCart ? (
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
                  <path d='M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z'></path>
                </svg>
              ) : (
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
                  <path d='M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0-51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z'></path>
                  <path d='M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z'></path>
                </svg>
              )}
            </Button>
            <p></p>
            {shoppingCart && (
              <>
                <h2>
                  <i className='fa-solid fa-magnifying-glass'></i>{' '}
                </h2>

                <CartScreenPreview
                  isPreviewMode={true}
                  showAppBarInCart={showAppBarInCart}
                  title={title}
                  showCartIcon={showCartIcon}
                  cartMessage={cartMessage}
                ></CartScreenPreview>

                {footer === true && <Footer rodape={rodape}></Footer>}
              </>
            )}
          </Card.Body>
        </Card>
      </>
    )
  }

  /* RENDER:  PLACE ORDER SELECTOR  */
  const renderPlaceOrderSection = () => {
    return (
      <>
        <Card className='my-3'>
          <Card.Body>
            <Card.Title>
              <h2>
                <Switch
                  isToggled={includePlaceOrder}
                  onToggle={() => setIncludePlaceOrder(!includePlaceOrder)}
                ></Switch>{' '}
                Place Order Page
              </h2>
            </Card.Title>
            <Card.Text>
              To include the Place Order Page , simply check the corresponding
              checkbox. This page allow you to create an order based on the
              items that you have in your cart. This feature does not require
              user authentication as it is a template feature. Make sure to
              incorporate the right security measures for your application
              before deploying.
            </Card.Text>

            <Switch
              isToggled={showAppBarInPlaceOrder}
              onToggle={() =>
                setShowAppBarInPlaceOrder(!showAppBarInPlaceOrder)
              }
            ></Switch>
            <FormLabel>Include navigation bar </FormLabel>

            <p></p>

            <p></p>
            <Button onClick={() => setPreviewPlaceOrder(!previewPlaceOrder)}>
              {!previewPlaceOrder ? 'Preview' : 'Hide'}
              {!previewPlaceOrder ? (
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
                  <path d='M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z'></path>
                </svg>
              ) : (
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
                  <path d='M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0-51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z'></path>
                  <path d='M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z'></path>
                </svg>
              )}
            </Button>
            <p></p>
            {previewPlaceOrder && (
              <>
                <PlaceOrderScreenPreview
                  showAppBarInPlaceOrder={showAppBarInPlaceOrder}
                  title={title}
                  showCartIcon={showCartIcon}
                />
              </>
            )}
          </Card.Body>
        </Card>
      </>
    )
  }

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            <h2>
              <svg
                stroke='currentColor'
                fill='currentColor'
                stroke-width='0'
                viewBox='0 0 1024 1024'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M512.5 390.6c-29.9 0-57.9 11.6-79.1 32.8-21.1 21.2-32.8 49.2-32.8 79.1 0 29.9 11.7 57.9 32.8 79.1 21.2 21.1 49.2 32.8 79.1 32.8 29.9 0 57.9-11.7 79.1-32.8 21.1-21.2 32.8-49.2 32.8-79.1 0-29.9-11.7-57.9-32.8-79.1a110.96 110.96 0 0 0-79.1-32.8zm412.3 235.5l-65.4-55.9c3.1-19 4.7-38.4 4.7-57.7s-1.6-38.8-4.7-57.7l65.4-55.9a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a442.5 442.5 0 0 0-79.6-137.7l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.2 28.9c-30-24.6-63.4-44-99.6-57.5l-15.7-84.9a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52-9.4-106.8-9.4-158.8 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.3a353.44 353.44 0 0 0-98.9 57.3l-81.8-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a445.93 445.93 0 0 0-79.6 137.7l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.2 56.5c-3.1 18.8-4.6 38-4.6 57 0 19.2 1.5 38.4 4.6 57l-66 56.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.3 44.8 96.8 79.6 137.7l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.8-29.1c29.8 24.5 63 43.9 98.9 57.3l15.8 85.3a32.05 32.05 0 0 0 25.8 25.7l2.7.5a448.27 448.27 0 0 0 158.8 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-84.9c36.2-13.6 69.6-32.9 99.6-57.5l81.2 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.5-87.4 79.6-137.7l.9-2.6c4.3-12.4.6-26.3-9.5-35zm-412.3 52.2c-97.1 0-175.8-78.7-175.8-175.8s78.7-175.8 175.8-175.8 175.8 78.7 175.8 175.8-78.7 175.8-175.8 175.8z'></path>
              </svg>
              <span className='ml-3 mr-5'>Standard User Features</span>
            </h2>
          </Card.Title>

          <Card.Text>
            In this section you can add the Home, Shopping Cart and Place Order
            pages to your application. You can also change the landing page of
            your application which is the Home page by default.
            <Row>
              <Col>
                <Dropdown onSelect={handleLandingPageChange} className='mt-3'>
                  <Dropdown.Toggle variant='danger' id='dropdown-basic'>
                    Landing Page: {landingPage}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item eventKey='Home'>Home</Dropdown.Item>
                    <Dropdown.Item eventKey='Product List'>
                      Product List
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='Shopping Cart'>
                      Shopping Cart
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col>
                <button
                  onClick={() =>
                    setExpandStandardUserPages(!expandStandardUserPages)
                  }
                  className='btn btn-link ml-3 mt-2'
                >
                  {expandStandardUserPages ? 'Show Less' : 'Show More'}

                  {expandStandardUserPages ? (
                    <svg
                      className='ml-2'
                      stroke='currentColor'
                      fill='currentColor'
                      stroke-width='0'
                      version='1'
                      viewBox='0 0 48 48'
                      enable-background='new 0 0 48 48'
                      height='1.5em'
                      width='1.5em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <polygon
                        fill='#2196F3'
                        points='5,30.9 8.1,34 24,18.1 39.9,34 43,30.9 24,12'
                      ></polygon>
                    </svg>
                  ) : (
                    <svg
                      className='ml-2'
                      stroke='currentColor'
                      fill='currentColor'
                      stroke-width='0'
                      version='1'
                      viewBox='0 0 48 48'
                      enable-background='new 0 0 48 48'
                      height='1.5em'
                      width='1.5em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <polygon
                        fill='#2196F3'
                        points='43,17.1 39.9,14 24,29.9 8.1,14 5,17.1 24,36'
                      ></polygon>
                    </svg>
                  )}
                </button>
              </Col>
            </Row>
          </Card.Text>

          {expandStandardUserPages && (
            <>
              {/* HOME SCREEN */}
              {renderHomePageSection()}
              {/* SHOPPING CART */}
              {renderShoppingCartSection()}
              {/* PLACE ORDER */}
              {renderPlaceOrderSection()}
            </>
          )}
        </Card.Body>
      </Card>
    </>
  )
}

export default UserFeatureSelectorCard
