export const orderScreenFile = `import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { PayPalButton } from 'react-paypal-button-v2'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Card, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CustomMessage from '../components/CustomMessage'
import CustomSpinner from '../components/CustomSpinner'
import {
  getOrderDetailsAction,
  payOrderAction,
  deliveryOrderAction,
} from '../actions/orderActions'
import {
  ORDER_PAY_RESET,
  ORDER_DELIVER_RESET,
} from '../constants/orderConstants'

import userChoices from '../userChoices.json'
import Header from '../components/Header'

const OrderScreen = () => {
  /* GET USER CHOICES  */
  const showAppBarInPlaceOrder =
    userChoices.placeOrderScreens.showAppBarInPlaceOrder
  const title = userChoices.title
  const showCartIcon = userChoices.cartScreen.showCartIcon

  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [sdkReady, setSDKReady] = useState(false)

  const orderID = params.id
  const orderDetails = useSelector((state) => state.orderDetails)
  const { order, loading, error } = orderDetails

  const orderPay = useSelector((state) => state.orderPay)
  const { loading: loadingPay, success: successPay } = orderPay

  const orderDelivery = useSelector((state) => state.orderDelivery)
  const { loading: loadingDelivery, success: successDelivery } = orderDelivery

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  if (!loading) {
    /** Calculate Order Items Price */
    order.itemsPrice = order.orderItems.reduce(
      (acc, item) => acc + item.price * item.selectedQuantity,
      0
    )
  }

  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    }

    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get('/api/config/paypal')

      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = \`https://www.paypal.com/sdk/js?client-id=\${clientId}\`
      script.async = true
      script.onload = () => {
        setSDKReady(true)
      }
      document.body.appendChild(script)
    }

    if (!order || successPay || successDelivery) {
      dispatch({ type: ORDER_PAY_RESET })
      dispatch({ type: ORDER_DELIVER_RESET })
      dispatch(getOrderDetailsAction(orderID))
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript()
      } else {
        setSDKReady(true)
      }
    } else if (orderID !== order._id) {
      dispatch(getOrderDetailsAction(orderID))
    }
  }, [
    dispatch,
    navigate,
    orderID,
    successPay,
    successDelivery,
    order,
    userInfo,
  ])

  const onSuccessPaymentHandler = (paymentResult) => {
    dispatch(payOrderAction(orderID, paymentResult))
  }

  const deliveryHandler = () => {
    dispatch(deliveryOrderAction(order))
  }

  return loading ? (
    <CustomSpinner />
  ) : error ? (
    <CustomMessage variant='danger'>{error}</CustomMessage>
  ) : (
    <>
      {/* SHOW APP BAR IF USER SELECTED IT */}
      <Header
        shouldBeDisplayed={showAppBarInPlaceOrder}
        storeName={title}
        showCartIcon={showCartIcon}
      ></Header>

      <h1>Order {order._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Name:</strong> {order.owner.name}
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a href={\`mailto:\${order.owner.email}\`}>{order.owner.email}</a>
              </p>
              <p>
                <strong>Address: </strong>
                {order.shippingAddress.address},{' '}
                {order.shippingAddress.postCode} {order.shippingAddress.city},{' '}
                {order.shippingAddress.country}
              </p>

              {order.isDelivered ? (
                <CustomMessage variant='success'>
                  Delivered on {order.delivery_timestamp}
                </CustomMessage>
              ) : (
                <CustomMessage variant='warning'>
                  Order Not Delivered
                </CustomMessage>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong>
                {order.paymentMethod}
              </p>
              {order.isPaid ? (
                <CustomMessage variant='success'>
                  Paid on {order.payment_timestamp}
                </CustomMessage>
              ) : (
                <CustomMessage variant='warning'>Order Not Paid</CustomMessage>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Products</h2>
              {order.orderItems.length === 0 ? (
                <CustomMessage>Order is empty</CustomMessage>
              ) : (
                <ListGroup variant='flush'>
                  {order.orderItems.map((item, index) => (
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
                  <Col>{order.itemsPrice} € </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>{order.shippingPrice} € </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>{order.taxPrice} € </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Total Price</Col>
                  <Col>{order.totalPrice} € </Col>
                </Row>
              </ListGroup.Item>

              {!order.isPaid && (
                <ListGroup.Item>
                  {loadingPay && <CustomSpinner />}
                  {!sdkReady ? (
                    <CustomSpinner />
                  ) : (
                    <PayPalButton
                      amount={order.totalPrice}
                      onSuccess={onSuccessPaymentHandler}
                    />
                  )}
                </ListGroup.Item>
              )}

              {loadingDelivery && <CustomSpinner />}
              {userInfo &&
                userInfo.isAdmin &&
                order.isPaid &&
                !order.isDelivered && (
                  <ListGroup.Item>
                    <Button
                      type='button'
                      className='btn btn-block'
                      onClick={deliveryHandler}
                    >
                      Mark as Delivered
                    </Button>
                  </ListGroup.Item>
                )}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default OrderScreen
`
