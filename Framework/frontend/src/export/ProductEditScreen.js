export const ProductEditScreenFile = ` import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  Form,
  Button,
  FormGroup,
  FormLabel,
  FormControl,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listProductDetails, updateProduct } from '../actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'

import useHome from '../components/useHome'

const ProductEditScreen = () => {
  const navigate = useNavigate()
  const params = useParams() 
  const productId = params.id

  
  const categories = useSelector((state) => state.categories)
  const [category, setCategory] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')
  const [brand, setBrand] = useState('')
  const [content, setContent] = useState('')

  const { novocamponome } = useHome()

  const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState('')
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const productUpdate = useSelector((state) => state.productUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET })
      navigate('/')
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetails(productId))
      } else {
        setName(product.name)
        setPrice(product.price)
        setImage(product.image)
        setBrand(product.brand)
        setCategory(product.category)
        setCountInStock(product.countInStock)
        setDescription(product.description)
        setContent(product.novocampo)
      }
    }
  }, [dispatch, product, productId, navigate, successUpdate])

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('/api/upload', formData, config)

      setImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()

    

    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        image,
        brand,
        category,
        description,
        countInStock,
        content,
      })
    )
  }

  const createCategoryList = (categories, options = []) => {
   
    for (let category of categories) {
      options.push({ value: category._id, category: category.category })
      if (category.children.length > 0) {
        createCategoryList(category.children, options)
      }
    }
    return options
  }

  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Atrás
      </Link>
      <FormContainer>
        <h1>Editar Produto</h1>
        {loadingUpdate && <Loader></Loader>}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}

        {loading ? (
          <Loader></Loader>
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <FormGroup controlId="name">
              <FormLabel>Nome</FormLabel>
              <FormControl
                type="name"
                placeholder="Introduza nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></FormControl>
            </FormGroup>

            <FormGroup controlId="price">
              <FormLabel>Preço</FormLabel>
              <FormControl
                type="number"
                placeholder="Introduza preço"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></FormControl>
            </FormGroup>

            <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <FormControl
                type="file"
                label="Choose File"
                custom="true"
                onChange={uploadFileHandler}
              ></FormControl>
              {uploading && <Loader />}
            </Form.Group>

            <FormGroup controlId="brand">
              <FormLabel>Marca</FormLabel>
              <FormControl
                type="text"
                placeholder="Introduza marca "
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></FormControl>
            </FormGroup>

            <FormGroup controlId="novocampo">
              <FormLabel>{novocamponome}</FormLabel>
              <FormControl
                type="name"
                placeholder=""
                value={content || ''}
                onChange={(e) => setContent(e.target.value)}
              ></FormControl>
            </FormGroup>

            <FormGroup controlId="countInStock">
              <FormLabel>Stock</FormLabel>
              <FormControl
                type="number"
                placeholder="Introduza stock"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></FormControl>
            </FormGroup>

            <FormGroup controlId="category">
              <FormLabel>Categoria</FormLabel>

              <select
                className="form-control"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>selecionar categoria</option>
                {React.Children.toArray(
                  createCategoryList(categories.categories).map((option) => (
                    <option value={option.value}>{option.category}</option>
                  ))
                )}
              </select>
            </FormGroup>

            {/* <FormGroup controlId="category">
              <FormLabel>Categoria</FormLabel> */}

            {/* <FormControl
                <select
                  
                  className="custom-select mr-sm-2"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">escolhe</option>
                  {categories &&
                    categories.map((c) => (
                      <option key={c._id} value={c._id}>
                        {c.category}
                      </option>
                    ))}
                </select>
              ></FormControl>
            </FormGroup> */}

            <FormGroup controlId="description">
              <FormLabel>Descrição</FormLabel>
              <FormControl
                type="text"
                placeholder="Introduza descrição "
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></FormControl>
            </FormGroup>

            <Button type="submit" variant="primary">
              Editar
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default ProductEditScreen
`
