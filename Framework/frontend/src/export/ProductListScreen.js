export const ProductListScreenFile = `import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import { Table, Button, Row, Col, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {
  listProducts,
  deleteProduct,
  createProduct,
} from '../actions/productActions'
import { LinkContainer } from 'react-router-bootstrap'
import { useNavigate, useParams, useLocation } from 'react-router-dom'

import { PRODUCT_CREATE_RESET } from '../constants/productConstants'
import Header from '../components/Header'

import styled from 'styled-components'

import useHome from '../components/useHome'
import axios from 'axios'
import userChoices from '../userChoices.json'

const DynamicButton = styled(Button)\`
  background-color: \${(props) => props.color || '#007bff'};
\`

const ProductListScreen = () => {
  const color =
    userChoices && userChoices.productListScreen
      ? userChoices.productListScreen.color
      : null

  const { state } = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()

  /* Get User Selected Customization */
  const productListScreenProps = userChoices.productListScreen
  /*       productListScreen: {
        navbar: navbar, Include Header
        footer: footer, Include Footer
        rodape: rodape, Footer Message
        color: color,   Create Product Button Color
        tamanhoimagem:  Image Size,
      }, */

  const pageNumber = params.pageNumber || 1

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  const productDelete = useSelector((state) => state.productDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete

  const productCreate = useSelector((state) => state.productCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET })

    if (successCreate) {
      navigate(\`/product/\${createdProduct._id}/edit\`)
    } else {
      dispatch(listProducts('', pageNumber))
    }
  }, [
    dispatch,
    navigate,

    successDelete,
    successCreate,
    createdProduct,
    pageNumber,
  ])

  const deleteHandler = (id) => {
    if (window.confirm('Tem a certeza?')) {
      dispatch(deleteProduct(id))
    }
  }

  const createProductHandler = () => {
    dispatch(createProduct())
  }

  /* HTML HELPER METHODS */

  return (
    <>
      {/* SHOW APP BAR IF USER SELECTED IT */}
      <Header
        shouldBeDisplayed={userChoices.productListScreen.navbar}
        storeName={userChoices.title}
        showCartIcon={userChoices.cartScreen.showCartIcon}
      ></Header>

      <p></p>
      <Row className='align-items-center'>
        <Col>
          <h1>Produtos</h1>
        </Col>
        <Col className='text-right'>
          <DynamicButton
            color={userChoices.productListScreen.color}
            onClick={createProductHandler}
          >
            <i className='fas fa-plus'></i> Create Product
          </DynamicButton>
        </Col>
      </Row>
      {loadingDelete && <Loader></Loader>}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
      {loadingCreate && <Loader></Loader>}
      {errorCreate && <Message variant='danger'>{errorCreate}</Message>}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>IMAGEM</th>
                <th>ID</th>
                <th>NOME</th>
                <th>PREÇO</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {state == null
                ? products
                    // .filter((product) => {
                    //   return state.keyword.toLowerCase() === ''
                    //     ? product
                    //     : product.name.toLowerCase().includes(state.keyword)
                    // })
                    .map((product) => (
                      <tr key={product._id}>
                        <td>
                          <Image
                            src={product.image}
                            className='img-thumbnail '
                            width={userChoices.productListScreen.tamanhoimagem}
                            fluid
                          ></Image>
                        </td>
                        <td> {product._id}</td>
                        <td> {product.name}</td>
                        <td>{product.price}€</td>

                        <td>{product.brand}</td>

                        <td>
                          <LinkContainer to={\`/product/\${product._id}/edit\`}>
                            <Button variant='light' className='btn-sm'>
                              <i className='fas fa-edit'></i>
                            </Button>
                          </LinkContainer>
                          <Button
                            variant='danger'
                            className='btn-sm'
                            onClick={() => deleteHandler(product._id)}
                          >
                            <i className='fas fa-trash'></i>
                          </Button>
                        </td>
                      </tr>
                    ))
                : products
                    .filter((product) => {
                      return state.keyword === '' //tirei o lowecase
                        ? product
                        : product.name.toLowerCase().includes(state.keyword)
                    })
                    .map((product) => (
                      <tr key={product._id}>
                        <td>
                          <Image
                            src={product.image}
                            className='img-thumbnail '
                            width={userChoices.productListScreen.tamanhoimagem}
                            fluid
                          ></Image>
                        </td>
                        <td> {product._id}</td>
                        <td> {product.name}</td>
                        <td>{product.price}€</td>

                        <td>{product.brand}</td>

                        <td>
                          <LinkContainer to={\`/product/\${product._id}/edit\`}>
                            <Button variant='light' className='btn-sm'>
                              <i className='fas fa-edit'></i>
                            </Button>
                          </LinkContainer>
                          <Button
                            variant='danger'
                            className='btn-sm'
                            onClick={() => deleteHandler(product._id)}
                          >
                            <i className='fas fa-trash'></i>
                          </Button>
                        </td>
                      </tr>
                    ))}
            </tbody>
          </Table>
        </>
      )}
      {userChoices.productListScreen.footer === true && (
        <Footer rodape={userChoices.productListScreen.rodape}></Footer>
      )}
    </>
  )
}

export default ProductListScreen



`
