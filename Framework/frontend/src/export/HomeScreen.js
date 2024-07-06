export const homeScreenFile = `import React, { useEffect, useState } from 'react'
import {
  Row,
  Col,
  Button,
  Modal,
  Card,
  Form,
  Badge,
  Stack,
} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'

import Product from '../components/Product'
import CustomSpinner from '../components/CustomSpinner'
import CustomMessage from '../components/CustomMessage'
import FilterCard from '../components/FilterCard'

import userChoices from '../userChoices.json'
import Header from '../components/Header'

const HomeScreen = () => {
  const params = useParams()
  const dispatch = useDispatch()

  const [showModal, setShowModal] = useState(false) // State for modal visibility
  const [selectedBrand, setSelectedBrand] = useState('')
  const [selectedPriceRange, setSelectedPriceRange] = useState('')
  const [selectedSort, setSelectedSort] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  var appliedFilters = {
    selectedBrand: selectedBrand,
    selectedPriceRange: selectedPriceRange,
    selectedSort: selectedSort,
    selectedCategory: selectedCategory,
  }

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value)
  }

  const handlePriceRangeChange = (e) => {
    setSelectedPriceRange(e.target.value)
  }

  const handleSortChange = (e) => {
    setSelectedSort(e.target.value)
  }

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  /* SELECT the productList from the reducer of our store.js */
  const productList = useSelector((state) => state.productList)
  /* We want the following fields from this reducer */
  const { loading, error, products } = productList

  const [filteredProducts, setFilteredProducts] = useState([])

  /* FILTER SEARCH */
  const searchString = params.searchString

  // Handler to toggle modal visibility
  const toggleModal = () => {
    setShowModal(!showModal)
  }

  // Handler to Apply Filters in the Modal
  const applyFiltersOnClick = () => {
    const appliedFilters = {
      selectedBrand: selectedBrand,
      selectedPriceRange: selectedPriceRange,
      selectedSort: selectedSort,
      selectedCategory: selectedCategory,
    }
    console.log('Filteres ', appliedFilters)
    // Filter the products based on the selected filters
    if (products) {
      const filteredProducts = filterProducts()
      setFilteredProducts(filteredProducts)
    }

    setShowModal(!showModal)
  }

  const filterProducts = () => {
    const filteredProducts = products.filter((product) => {
      // Check if the selectedBrand matches or if no brand is selected
      const isBrandMatched =
        appliedFilters.selectedBrand === '' ||
        product.brand === appliedFilters.selectedBrand

      // Check if the price is within the selectedPriceRange or if no range is selected
      const [minPrice, maxPrice] = appliedFilters.selectedPriceRange.split('-')
      const isPriceRangeMatched =
        appliedFilters.selectedPriceRange === '' ||
        (product.price >= Number(minPrice) && product.price <= Number(maxPrice))

      // Check if the selectedCategory matches or if no category is selected
      const isCategoryMatched =
        appliedFilters.selectedCategory === '' ||
        product.category === appliedFilters.selectedCategory

      return isBrandMatched && isPriceRangeMatched && isCategoryMatched
    })

    return filteredProducts
  }
  /* Fire Redux Action - As soon as the component Loads this will fire */
  useEffect(() => {
    dispatch(listProducts(searchString))
  }, [dispatch, searchString])

  /* Helper Methods */

  const removeBrandFilter = () => {
    appliedFilters.selectedBrand = ''
    setSelectedBrand('')
    const filteredProducts = filterProducts()
    setFilteredProducts(filteredProducts)
  }

  const removeRangeFilter = () => {
    appliedFilters.selectedPriceRange = ''
    setSelectedPriceRange('')
    const filteredProducts = filterProducts()
    setFilteredProducts(filteredProducts)
  }

  const removeSortFilter = () => {
    appliedFilters.selectedSort = ''
    setSelectedSort('')
    const filteredProducts = filterProducts()
    setFilteredProducts(filteredProducts)
  }

  const removeCategoryFilter = () => {
    appliedFilters.selectedCategory = ''
    setSelectedCategory('')
    const filteredProducts = filterProducts()
    setFilteredProducts(filteredProducts)
  }

  /** DISPLAY: If Loading --> Show Spinner , else if error --> show error, else List the Products */
  return (
    <>
      {/* SHOW APP BAR IF USER SELECTED IT */}
      <Header
        shouldBeDisplayed={userChoices.homeScreen.showAppBarInHome}
        storeName={userChoices.title}
        showCartIcon={userChoices.cartScreen.showCartIcon}
      ></Header>

      {/* HEADER AND FILTERS */}
      <h1 className='mb-0'>
        <Button onClick={toggleModal} variant='light' className='mr-0 mb-2'>
          <svg
            stroke='currentColor'
            fill='none'
            strokeWidth='0'
            viewBox='0 0 24 24'
            height='2em'
            width='2em'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            ></path>
          </svg>
        </Button>
        {userChoices.homeScreen.homeTitle}{' '}
      </h1>
      {appliedFilters &&
        (appliedFilters.selectedBrand ||
          appliedFilters.selectedSort ||
          appliedFilters.selectedPriceRange ||
          appliedFilters.selectedCategory) && (
          <Stack direction='horizontal' gap={2} className='ml-4 mb-4'>
            Selected Filters:
            {appliedFilters.selectedBrand && (
              <Badge pill bg='light' className='ml-2 mr-2'>
                {appliedFilters.selectedBrand}
                <span onClick={removeBrandFilter}>
                  <i className='fas fa-times ml-1' />
                </span>
              </Badge>
            )}
            {appliedFilters.selectedCategory && (
              <Badge pill bg='light' className='mr-2'>
                {appliedFilters.selectedCategory}
                <span onClick={removeCategoryFilter}>
                  <i className='fas fa-times ml-1' />
                </span>
              </Badge>
            )}
            {appliedFilters.selectedPriceRange && (
              <Badge pill bg='light' className='mr-2'>
                {appliedFilters.selectedPriceRange} €
                <span onClick={removeRangeFilter}>
                  <i className='fas fa-times ml-1' />
                </span>
              </Badge>
            )}
            {appliedFilters.selectedSort && (
              <Badge pill bg='light' className='mr-2'>
                {appliedFilters.selectedSort === 'priceLowToHigh'
                  ? 'Price: Low To Hight'
                  : appliedFilters.selectedSort === 'priceHighToLow'
                  ? 'Price: Hight To Low'
                  : appliedFilters.selectedSort === 'rating'
                  ? 'Rating: Low To Hight '
                  : ''}
                <span onClick={removeSortFilter}>
                  <i className='fas fa-times ml-1' />
                </span>
              </Badge>
            )}
          </Stack>
        )}
      {/* LIST PRODUCTS SECTION */}
      {loading ? (
        <CustomSpinner />
      ) : error ? (
        <CustomMessage variant='danger'>{error}</CustomMessage>
      ) : (
        <Row>
          {appliedFilters.selectedBrand ||
          appliedFilters.selectedSort ||
          appliedFilters.selectedPriceRange ||
          appliedFilters.selectedCategory ? (
            filteredProducts.length === 0 ? (
              <Col>
                <CustomMessage variant='info'>
                  {userChoices.homeScreen.homeMessage}{' '}
                </CustomMessage>
              </Col>
            ) : (
              filteredProducts.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))
            )
          ) : (
            products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))
          )}
        </Row>
      )}

      {/* APPLY FILTERS MODAL */}
      <Modal show={showModal} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Filter Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Body>
              {/* Brand Filter */}
              <Form.Group controlId='brandFilter'>
                <Form.Label>Brand</Form.Label>
                <Form.Control
                  as='select'
                  value={selectedBrand}
                  onChange={handleBrandChange}
                >
                  <option value=''>Select Brand...</option>
                  <option value='Cannon'>Cannon</option>
                  <option value='Apple'>Apple</option>
                  <option value='Samsung'>Samsung</option>
                  <option value='Xiaomi'>Xiaomi</option>
                  <option value='Marshall'>Marshall</option>
                  <option value='JBL'>JBL</option>
                  <option value='LG'>LG</option>

                  {/* Add more brands */}
                </Form.Control>
              </Form.Group>

              {/* Category Filter */}
              <Form.Group controlId='categoryFilter'>
                <Form.Label>Category</Form.Label>
                <Form.Control
                  as='select'
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option value=''>Select Category...</option>
                  <option value='Electronics'>Electronics</option>
                  <option value='category2'>Category 2</option>
                  {/* Add more brands */}
                </Form.Control>
              </Form.Group>

              {/* Price Range Filter */}
              <Form.Group controlId='priceRangeFilter'>
                <Form.Label>Price Range</Form.Label>
                <Form.Control
                  as='select'
                  value={selectedPriceRange}
                  onChange={handlePriceRangeChange}
                >
                  <option value=''>Select a price range...</option>
                  <option value='0-50'>0€ - 50€</option>
                  <option value='50-100'>50€ - 100€</option>
                  <option value='100-1000'>100€ - 1.000€</option>
                  <option value='1000-10000'>1.000€ - 10.000€</option>
                  {/* Add more price ranges */}
                </Form.Control>
              </Form.Group>

              {/* Sort By Filter */}
              <Form.Group controlId='sortFilter'>
                <Form.Label>Sort By</Form.Label>
                <Form.Control
                  as='select'
                  value={selectedSort}
                  onChange={handleSortChange}
                >
                  <option value=''>Select Sorting...</option>
                  <option value='priceLowToHigh'>Price: Low to High</option>
                  <option value='priceHighToLow'>Price: High to Low</option>
                  <option value='rating'>Rating</option>
                  {/* Add more sorting options */}
                </Form.Control>
              </Form.Group>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='btn btn-primary btn-block mt-3'
            onClick={() => applyFiltersOnClick()}
          >
            Apply Filters
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default HomeScreen
`
