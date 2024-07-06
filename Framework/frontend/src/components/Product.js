import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from '../components/Rating'

import { Link } from 'react-router-dom'

const Product = (props) => {
  const { product, index } = props
  return (
    <Card className='my-3 p-3 rounded text-center'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={'sample' + `${index}` + '.jpg'} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={` ${product.numberReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>{product.price}€</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
