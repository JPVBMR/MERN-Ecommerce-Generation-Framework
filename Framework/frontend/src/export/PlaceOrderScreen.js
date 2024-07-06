export const placeOrderSceenFile = `/*********************************************************************************************************************************
  @description This component, PlaceOrderScreen, utilizes the 'cart' object from the Redux state to display information 
  about the user's cart and calculate prices for the items, shipping, tax, and total order cost.
  The component also includes functionality to create an order when the user clicks the "Place Order" button.

  @parameters The @cart object contains the following properties:
  - cartItems: An array of items in the cart, including product details, quantities, and prices.
  - shippingAddress: The shipping address selected by the user.
  - paymentMethod: The chosen payment method for the order.
  - itemsPrice: The total price of all items in the cart.
  - shippingPrice: The cost of shipping, determined based on cart value.
  - taxPrice: The calculated tax amount based on the 'itemsPrice'.
  - totalPrice: The total cost of the order, including items, shipping, and tax.

  @example Here is an example of the 'cart' parameter:
            const cart = {
            cartItems: [
                {
                product: PRODUCT_ID_1,
                name: 'Sample Product 1',
                image: '/images/sample-product-1.jpg',
                price: 29.99,
                selectedQuantity: 2,
                },
                {
                product: PRODUCT_ID_2,
                name: 'Sample Product 2',
                image: '/images/sample-product-2.jpg',
                price: 19.99,
                selectedQuantity: 3,
                },
            ],
            shippingAddress: {
                address: '123 Sample Street',
                postCode: '12345',
                city: 'Sample City',
                country: 'Sample Country',
            },
            paymentMethod: 'PayPal', // Change this to your desired payment method
            itemsPrice: 0, // This will be calculated
            shippingPrice: 0, // This will be calculated
            taxPrice: 0, // This will be calculated
            totalPrice: 0, // This will be calculated
            };

  @note This component depends on Redux for state management and React Router for navigation.





***************************************************************************************************************************/
import React, { useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import CustomMessage from '../components/CustomMessage'
import { createOrderAction } from '../actions/orderActions'
import CheckoutSteps from '../components/CheckoutSteps'
import Header from '../components/Header'
import Footer from '../components/Footer'

import userChoices from '../userChoices.json'

const calculateCartPrices = (cart) => {
  const updatedCart = {
    ...cart,
    itemsPrice: cart.cartItems
      .reduce((acc, item) => acc + item.price * item.selectedQuantity, 0)
      .toFixed(2),
  }

  updatedCart.shippingPrice = (updatedCart.itemsPrice > 150 ? 10 : 20).toFixed(
    2
  )

  updatedCart.taxPrice = (0.1 * updatedCart.itemsPrice).toFixed(2)

  updatedCart.totalPrice = (
    Number(updatedCart.itemsPrice) +
    Number(updatedCart.shippingPrice) +
    Number(updatedCart.taxPrice)
  ).toFixed(2)

  return updatedCart
}

const PlaceOrderScreen = () => {
  /* GET USER CHOICES  */
  const showAppBarInPlaceOrder =
    userChoices.placeOrderScreens.showAppBarInPlaceOrder
  const title = userChoices.title
  const showCartIcon = userChoices.cartScreen.showCartIcon

  const navigate = useNavigate()
  const dispatch = useDispatch()

  /* Get Cart From State & Calculate Prices */
  const cartFromState = useSelector((state) => state.cart)
  const cart = calculateCartPrices(cartFromState)

  /* Check if the order was created successfully from STATE */
  const orderCreate = useSelector((state) => state.orderCreate)
  const { order, success, error } = orderCreate

  useEffect(() => {
    if (success) {
      navigate(\`/orders/\${order._id}\`)
    }
    // eslint-disable-next-line
  }, [navigate, success])

  /** OnClick: Create Order */
  const onClickCreateOrder = () => {
    dispatch(
      createOrderAction({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    )
  }

  return (
    <>
      {/* SHOW APP BAR IF USER SELECTED IT */}
      <Header
        shouldBeDisplayed={showAppBarInPlaceOrder}
        storeName={title}
        showCartIcon={showCartIcon}
      ></Header>

      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Address: </strong>
                {cart.shippingAddress.address}, {cart.shippingAddress.postCode}{' '}
                {cart.shippingAddress.city}, {cart.shippingAddress.country}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <strong>Method: </strong>
              {cart.paymentMethod}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Products</h2>
              {cart.cartItems.length === 0 ? (
                <CustomMessage>Your cart is empty</CustomMessage>
              ) : (
                <ListGroup variant='flush'>
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={\`/product/\${item.product}\`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.selectedQuantity} x {item.price} € ={' '}
                          {item.selectedQuantity * item.price} €
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>{cart.itemsPrice} € </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>{cart.shippingPrice} € </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>{cart.taxPrice} € </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Total Price</Col>
                  <Col>{cart.totalPrice} € </Col>
                </Row>
              </ListGroup.Item>

              {/*               <ListGroup.Item>
                {error && (
                  <CustomMessage variant='danger'>{error}</CustomMessage>
                )}
              </ListGroup.Item> */}

              <ListGroup.Item>
                <Button
                  type='button'
                  className='btn-block'
                  disabled={cart.cartItems === 0}
                  onClick={onClickCreateOrder}
                >
                  Place Order
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>

      <Footer rodape={title}></Footer>
    </>
  )
}

export default PlaceOrderScreen
`
