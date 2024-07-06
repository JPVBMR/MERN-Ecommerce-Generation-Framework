export const selectPaymentScreenFile = `import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'
import userChoices from '../userChoices.json'
import Header from '../components/Header'

const SelectPaymentScreen = ({ history }) => {
  /* GET USER CHOICES  */
  const showAppBarInPlaceOrder =
    userChoices.placeOrderScreens.showAppBarInPlaceOrder
  const title = userChoices.title
  const showCartIcon = userChoices.cartScreen.showCartIcon

  /* Get Shipping Address Details from State */
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  /** Redirect if there isn't any shipping address */
  if (!shippingAddress) {
    navigate('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('Paypal')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  /* OnClick: Navigate to Place Order Screen */
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    navigate('/placeorder')
  }

  /* OnClick: Back */
  const onClickBack = (e) => {
    e.preventDefault()
    navigate('/cart')
  }

  return (
    <>
      {/* SHOW APP BAR IF USER SELECTED IT */}
      <Header
        shouldBeDisplayed={showAppBarInPlaceOrder}
        storeName={title}
        showCartIcon={showCartIcon}
      ></Header>
      <FormContainer>
        <CheckoutSteps step1 step2 step3 />

        <h1>Payment Method</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label as='legend'>Select the Payment Method</Form.Label>
          </Form.Group>

          <Col>
            <Form.Check
              type='radio'
              label='PayPal or Credit Card'
              id='PayPal'
              name='paymentMethod'
              value='PayPal'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
              className='mb-4'
            ></Form.Check>

            {/* ADD MORE OPTIONS */}

            {/*           <Form.Check
            type='radio'
            label='MBway'
            id='MBway'
            name='paymentMethod'
            value='MBway'
            onChange={(e) => setPaymentMethod(e.target.value)}
            className='mb-4'
          ></Form.Check> */}
          </Col>

          <Button type='submit' variant='primary'>
            Continue
          </Button>
        </Form>
      </FormContainer>
    </>
  )
}

export default SelectPaymentScreen
`
