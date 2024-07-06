export const productScreenFile = `import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating'

import { useParams, useNavigate } from 'react-router-dom'
import { listProductDetails } from '../actions/productActions'

import CustomSpinner from '../components/CustomSpinner'
import CustomMessage from '../components/CustomMessage'

const ProductScreen = () => {
  /* Get Page parameteres (Product ID) */
  const params = useParams()
  const navigate = useNavigate()

  /* Product Available Quantity Will be a Property of our Component State that's why I'm using the useState with 0 by default */
  const [selectedQuantity, setSelectedQuantity] = useState(1)

  /* Get Product Details with the Reducer and Action */
  const dispatch = useDispatch()
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product = {} } = productDetails

  /* As soon as the component Loads this will fire */
  useEffect(() => {
    dispatch(listProductDetails(params.id))
  }, [dispatch, params])

  const addToCartOnClick = () => {
    /* Redirect To Cart */

    navigate(\`/cart/\${params.id}?selected-qty=\${selectedQuantity}\`)
  }

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Back
      </Link>
      {loading ? (
        <CustomSpinner />
      ) : error ? (
        <CustomMessage variant='danger'>{error}</CustomMessage>
      ) : (
        <Row>
          {/* Product Image SECTION */}
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>

          {/* Product Description SECTION */}
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>

              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={\`\${product.numberReviews} reviews\`}
                ></Rating>
              </ListGroup.Item>

              <ListGroup.Item>Price: {product.price} €</ListGroup.Item>

              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* ADD TO CART SECTION */}
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>{product.price} €</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.stockCount > 0 ? 'In Stock' : 'Out Of Stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.stockCount > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Quantity</Col>
                      <Col>
                        <Form.Control
                          as='select'
                          value={selectedQuantity}
                          onChange={(e) => setSelectedQuantity(e.target.value)}
                        >
                          {/* If Product.stockCount = 3 then user can only select one of the following qtys [1,2,3] */}
                          {[...Array(product.stockCount).keys()].map((qty) => (
                            <option key={qty + 1} value={qty + 1}>
                              {' '}
                              {qty + 1}{' '}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}

                <ListGroup.Item>
                  <Button
                    className='btn-block'
                    type='button'
                    disabled={product.stockCount === 0}
                    onClick={addToCartOnClick}
                  >
                    Add to cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  )
}

export default ProductScreen
`
