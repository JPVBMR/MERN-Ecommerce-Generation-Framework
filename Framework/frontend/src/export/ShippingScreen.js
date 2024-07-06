export const shippingScreenFile = `import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddressAction } from '../actions/cartActions'

import userChoices from '../userChoices.json'
import Header from '../components/Header'

const ShippingScreen = ({ history }) => {
  /* GET USER CHOICES  */
  const showAppBarInPlaceOrder =
    userChoices.placeOrderScreens.showAppBarInPlaceOrder
  const title = userChoices.title
  const showCartIcon = userChoices.cartScreen.showCartIcon

  /* Get Shipping Address Details from State */
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postCode, setPostCode] = useState(shippingAddress.postCode)
  const [country, setCountry] = useState(shippingAddress.country)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  /* OnClick: Navigate to PaymentScreen */
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddressAction({ address, city, postCode, country }))
    navigate('/payment')
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
        <CheckoutSteps step1 step2 />

        <h1>Shipping Information</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='address' className='mb-2'>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter your address...'
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='city' className='mb-2'>
            <Form.Label>City</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter your city...'
              value={city}
              required
              onChange={(e) => setCity(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='postCode' className='mb-2'>
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter your Postal Code...'
              value={postCode}
              required
              onChange={(e) => setPostCode(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='country' className='mb-4'>
            <Form.Label>Country</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter your country...'
              value={country}
              required
              onChange={(e) => setCountry(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type='submit' variant='primary'>
            Continue to Payment
          </Button>
        </Form>
      </FormContainer>
    </>
  )
}

export default ShippingScreen
`
