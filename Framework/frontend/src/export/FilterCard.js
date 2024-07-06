export const filterCardFile = `import React, { useState } from 'react'
import { Card, Form } from 'react-bootstrap'

const FilterCard = () => {
  const [selectedBrand, setSelectedBrand] = useState('')
  const [selectedPriceRange, setSelectedPriceRange] = useState('')
  const [selectedSort, setSelectedSort] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

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

  return (
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
            <option value='brand1'>Brand 1</option>
            <option value='brand2'>Brand 2</option>
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
            <option value='category1'>Category 1</option>
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
  )
}

export default FilterCard
`
