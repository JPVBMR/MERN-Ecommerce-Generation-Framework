import React from 'react'
import Footer from '../components/Footer'
import { Table, Button, Row, Col, Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'

import styled from 'styled-components'

const DynamicButton = styled(Button)`
  background-color: ${(props) => props.color || '#007bff'};
`

const ProductListScreenPreview = (props) => {
  const {
    navbar,
    footer,
    rodape,
    colorBtn,
    tamanhoimagem,
    showCartIcon,
    title,
  } = props

  // Define a static array of dummy products
  const dummyProducts = [
    {
      _id: '1',
      name: 'Dummy Product 1',
      image: 'dummy1.jpg',
      price: 50,
      brand: 'Dummy Brand 1',
      category: 'Electronics',
      // Add other fields as needed
    },
    {
      _id: '2',
      name: 'Dummy Product 2',
      image: 'dummy2.jpg',
      price: 100,
      brand: 'Dummy Brand 2',
      category: 'Electronics',
      // Add other fields as needed
    },
    {
      _id: '3',
      name: 'Dummy Product 4',
      image: 'dummy2.jpg',
      price: 100,
      brand: 'Dummy Brand 3',
      category: 'Electronics',
      // Add other fields as needed
    },
    // Add more dummy products as needed
  ]

  // Use the dummyProducts array to initialize the products state
  const products = dummyProducts

  /* Customization Properties */
  const userChoices = {
    // Detalhes da Loja
    title: title,
    // Configurações da ProductListScreen
    productListScreen: {
      navbar: navbar,
      footer: footer,
      rodape: rodape,
      color: colorBtn,
      tamanhoimagem: tamanhoimagem,
    },

    // Configurações do CartScreen
    cartScreen: {
      showCartIcon: showCartIcon,
    },
  }

  const { state } = useLocation()

  const deleteHandler = (id) => {
    alert(`Producto com ID ${id} eliminado com sucesso.`)
  }

  const createProductHandler = () => {
    alert(`You will be redirected to the create product page.`)
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

      {
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
                ? products.map((product, index) => (
                    <tr key={product._id}>
                      <td>
                        <Image
                          src={`./sample${index}.jpg`}
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
                        <LinkContainer to={`/product/${product._id}/edit`}>
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
                          <LinkContainer to={`/product/${product._id}/edit`}>
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
      }
      {userChoices.productListScreen.footer === true && (
        <Footer rodape={userChoices.productListScreen.rodape}></Footer>
      )}
    </>
  )
}

export default ProductListScreenPreview
