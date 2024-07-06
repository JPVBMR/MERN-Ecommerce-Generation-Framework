export const cartScreenFile = `import React, { useEffect } from 'react'
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import CustomMessage from '../components/CustomMessage'
import { addToCartAction, removeFromCartAction } from '../actions/cartActions'
import userChoices from '../userChoices.json'
import Header from '../components/Header'

const CartScreen = ({ isPreviewMode }) => {
  const params = useParams()
  const location = useLocation()
  const navigate = useNavigate()

  const productId = params.id
  const selectedQty = location.search
    ? Number(location.search.split('=')[1])
    : 1

  const dispatch = useDispatch()

  const cartFromState = useSelector((state) => state.cart)
  let cartItems = []

  if (isPreviewMode) {
    // Use dummy data
    cartItems = [
      {
        product: 'SampleID1',
        name: 'Sample Product 1',
        image: 'marshall2.jpg',
        price: 50,
        stockCount: 5,
        selectedQuantity: 2,
      },
      {
        product: 'SampleID2',
        name: 'Sample Product 2',
        image: 'router.jpg',
        price: 100,
        stockCount: 3,
        selectedQuantity: 1,
      },
    ]
  } else {
    // Use data from state, if available
    if (cartFromState && cartFromState.cartItems) {
      cartItems = cartFromState.cartItems
    }
  }
  useEffect(() => {
    if (!isPreviewMode && productId) {
      dispatch(addToCartAction(productId, selectedQty))
    }
  }, [dispatch, productId, selectedQty, isPreviewMode])

  const removeFromCartOnClick = (id) => {
    dispatch(removeFromCartAction(id))
  }

  const checkoutOnClick = () => {
    navigate('/login?redirect=shipping')
  }

  /* HTML CODE SECTION */
  return (
    <>
      {/* SHOW APP BAR IF USER SELECTED IT */}
      <Header
        shouldBeDisplayed={userChoices.cartScreen.showAppBarInCart}
        storeName={userChoices.title}
        showCartIcon={userChoices.cartScreen.showCartIcon}
      ></Header>
      <Row>
        <Col md={8}>
          <h1>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <CustomMessage>
              {userChoices.cartScreen.cartMessage} <Link to='/'>Go Back</Link>{' '}
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
                      <Link to={\`/product/\${item.product}\`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>{item.price} € </Col>
                    <Col md={2}>
                      <Form.Control
                        as='select'
                        value={item.selectedQuantity}
                        onChange={(e) =>
                          dispatch(
                            addToCartAction(item.product, e.target.value)
                          )
                        }
                      >
                        {/* If Product.stockCount = 3 then user can only select one of the following qtys [1,2,3] */}
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

export default CartScreen
`
