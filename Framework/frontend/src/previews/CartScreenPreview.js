import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import CustomMessage from '../components/CustomMessage'
import Header from '../components/Header'

const CartScreenPreview = (props) => {
  const { isPreviewMode, showAppBarInCart, title, showCartIcon, cartMessage } =
    props

  var cartItems = []

  if (isPreviewMode) {
    // Use dummy data
    cartItems = [
      {
        product: 'SampleID1',
        name: 'Sample Product 1',
        image: 'sample2.jpg',
        price: 50,
        stockCount: 5,
        selectedQuantity: 2,
      },
      {
        product: 'SampleID2',
        name: 'Sample Product 2',
        image: 'sample3.jpg',
        price: 100,
        stockCount: 3,
        selectedQuantity: 1,
      },
    ]
  }

  const removeFromCartOnClick = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.product !== id)
    cartItems = updatedCartItems
    alert(`Item com ID ${id} removido do carrinho.`)
  }

  const checkoutOnClick = () => {
    alert('Proceed To Checkout Clicked. You will be redirected ')
  }

  /* HTML CODE SECTION */
  return (
    <>
      {/* SHOW APP BAR IF USER SELECTED IT */}
      <Header
        shouldBeDisplayed={showAppBarInCart}
        storeName={title}
        showCartIcon={showCartIcon}
      ></Header>
      <Row>
        <Col md={8}>
          <h1>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <CustomMessage>
              {cartMessage} <Link to='/'>Go Back</Link>{' '}
            </CustomMessage>
          ) : (
            <ListGroup variant='flush'>
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>{item.price} € </Col>
                    <Col md={2}>
                      <Form.Control as='select' value={item.selectedQuantity}>
                        {[...Array(item.stockCount).keys()].map((qty) => (
                          <option key={qty + 1} value={qty + 1}>
                            {' '}
                            {qty + 1}{' '}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>

                    <Col md={2}>
                      <Button
                        type='button'
                        variant='light'
                        onClick={() => removeFromCartOnClick(item.product)}
                      >
                        <i className='fas fa-trash'></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>

        <Col md={4}>
          <Card className='mt-4'>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>
                  Subtotal (
                  {cartItems.reduce(
                    (acc, item) => Number(acc) + item.selectedQuantity,
                    0
                  )}
                  ) items
                </h2>
                €
                {cartItems
                  .reduce(
                    (acc, item) =>
                      Number(acc) + item.selectedQuantity * item.price,
                    0
                  )
                  .toFixed(2)}
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  type='button'
                  className='btn-block'
                  disabled={cartItems.length === 0}
                  onClick={checkoutOnClick}
                >
                  Proceed To Checkout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default CartScreenPreview
