import React from 'react'
import { Bar, Pie } from 'react-chartjs-2'
import 'chart.js/auto' // Import necessary chart.js styles
import { Card, Col, Row } from 'react-bootstrap'
import Header from '../components/Header'

// Create dummy user data
const dummyUsers = [
  {
    _id: '63bb247fe8dc45983e2c2c19',
    name: 'José Bravo',
    email: 'admin@example.com',
    password: '$2a$10$1OFaIIwOxE7bu/sGzIcOj.YCk4NiqTzaxJWvLV7JTYPn1LVBblzKa',
    isAdmin: true,
  },
  {
    _id: '2',
    name: 'Maria',
    email: 'admin2@example.com',
    password: '$2a$10$1OFaIIwOxE7bu/sGzIcOj.YCk4NiqTzaxJWvLV7JTYPn1LVBblzKa',
    isAdmin: true,
  },
  // Add more dummy user data as needed
]

// Create dummy product data
const dummyProducts = [
  {
    _id: '64e3744cf3d64924c3784dca',
    owner: '2',
    name: 'Router TP-Link AXE75',
    image: '/images/router.jpg',
    brand: 'TP-Link',
    category: 'Electronics',
    description: 'AXE5400 Tri-Band – AXE5400 Tri-Band Wi-Fi...',
    rating: 0,
    numberReviews: 0,
    price: 169.9,
    stockCount: 5,
  },
  {
    _id: '2',
    owner: '63bb247fe8dc45983e2c2c19',
    name: 'Apple Product',
    image: '/images/router.jpg',
    brand: 'Apple',
    category: 'Electronics',
    description: 'AXE5400 Tri-Band – AXE5400 Tri-Band Wi-Fi...',
    rating: 0,
    numberReviews: 0,
    price: 169.9,
    stockCount: 5,
  },
  {
    _id: '3',
    owner: '63bb247fe8dc45983e2c2c19',
    name: 'Marshall Product',
    image: '/images/router.jpg',
    brand: 'Marshall',
    category: 'Electronics',
    description: 'AXE5400 Tri-Band – AXE5400 Tri-Band Wi-Fi...',
    rating: 0,
    numberReviews: 0,
    price: 33.9,
    stockCount: 5,
  },
  // Add more dummy product data as needed
]

// Create dummy order data
const dummyOrders = [
  {
    _id: '64d3aea3c445cba463905ea8',
    owner: '2',
    orderItems: [
      {
        name: 'Sony Playstation 4 Pro White Version',
        selectedQuantity: 1,
        image: '/images/playstation.jpg',
        price: 399.99,
        product: '64e3744cf3d64924c3784dca',
      },
    ],
    shippingAddress: {
      address: 'PRT',
      city: 'PRT',
      postCode: '4710',
      country: 'PT',
    },
    paymentMethod: 'Paypal',
    taxPrice: 40,
    shippingPrice: 10,
    totalPrice: 449.99,
    isPaid: true,
    isDelivered: true,
  },
  {
    _id: '64d3aea3c445cba463905ea8',
    owner: '2',
    orderItems: [
      {
        name: 'Apple Product',
        selectedQuantity: 1,
        image: '/images/playstation.jpg',
        price: 399.99,
        product: '2',
      },
    ],
    shippingAddress: {
      address: 'PRT',
      city: 'PRT',
      postCode: '4710',
      country: 'PT',
    },
    paymentMethod: 'Paypal',
    taxPrice: 40,
    shippingPrice: 10,
    totalPrice: 50,
    isPaid: true,
    isDelivered: true,
  },
  {
    _id: '64d3aea3c445cba463905ea8',
    owner: '63bb247fe8dc45983e2c2c19',
    orderItems: [
      {
        name: 'Apple Product',
        selectedQuantity: 1,
        image: '/images/playstation.jpg',
        price: 399.99,
        product: '2',
      },
    ],
    shippingAddress: {
      address: 'PRT',
      city: 'PRT',
      postCode: '4710',
      country: 'PT',
    },
    paymentMethod: 'Paypal',
    taxPrice: 40,
    shippingPrice: 10,
    totalPrice: 120,
    isPaid: true,
    isDelivered: true,
  },
  {
    _id: '64d3aea3c445cba463905ea8',
    owner: '63bb247fe8dc45983e2c2c19',
    orderItems: [
      {
        name: 'Apple Product',
        selectedQuantity: 1,
        image: '/images/playstation.jpg',
        price: 399.99,
        product: '2',
      },
    ],
    shippingAddress: {
      address: 'PRT',
      city: 'PRT',
      postCode: '4710',
      country: 'PT',
    },
    paymentMethod: 'Paypal',
    taxPrice: 40,
    shippingPrice: 10,
    totalPrice: 45,
    isPaid: true,
    isDelivered: true,
  },
  {
    _id: '64d3aea3c445cba463905ea8',
    owner: '63bb247fe8dc45983e2c2c19',
    orderItems: [
      {
        name: 'Marshall Product',
        selectedQuantity: 1,
        image: '/images/playstation.jpg',
        price: 33.99,
        product: '3',
      },
    ],
    shippingAddress: {
      address: 'PRT',
      city: 'PRT',
      postCode: '4710',
      country: 'PT',
    },
    paymentMethod: 'Paypal',
    taxPrice: 40,
    shippingPrice: 10,
    totalPrice: 150,
    isPaid: true,
    isDelivered: true,
  },
  // Add more dummy order data as needed
]

const countOrdersPerBrand = (orders, products) => {
  const brandCountMap = new Map()

  orders.forEach((order) => {
    order.orderItems.forEach((orderItem) => {
      const product = products.find((p) => p._id === orderItem.product)

      if (product) {
        const brand = product.brand
        if (brandCountMap.has(brand)) {
          brandCountMap.set(brand, brandCountMap.get(brand) + 1)
        } else {
          brandCountMap.set(brand, 1)
        }
      }
    })
  })

  return Array.from(brandCountMap.entries())
}

const StatisticsScreenPreview = (props) => {
  const { showAppBarInStatistics, showCartIcon, title } = props
  const brandCounts = countOrdersPerBrand(dummyOrders, dummyProducts)

  // Extract brand names and order counts
  const brandNames = brandCounts.map(([brand]) => brand)
  const orderCounts = brandCounts.map(([, count]) => count)

  const data = {
    labels: brandNames,
    datasets: [
      {
        label: 'Number of Orders',
        data: orderCounts,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  }

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Orders',
        },
      },
    },
  }

  // Create a map to count orders per owner's name
  const countOrdersPerOwner = new Map()

  dummyOrders.forEach((order) => {
    const owner = dummyUsers.find((user) => user._id === order.owner)

    if (owner) {
      const ownerName = owner.name
      if (countOrdersPerOwner.has(ownerName)) {
        countOrdersPerOwner.set(
          ownerName,
          countOrdersPerOwner.get(ownerName) + 1
        )
      } else {
        countOrdersPerOwner.set(ownerName, 1)
      }
    }
  })

  const ownerNames = Array.from(countOrdersPerOwner.keys())
  const orderCountsOwner = Array.from(countOrdersPerOwner.values())

  const dataOwner = {
    labels: ownerNames,
    datasets: [
      {
        label: 'Number of Orders',
        data: orderCountsOwner,
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Color for bars
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  }

  const optionsOwner = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Owners',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Número de Pedidos',
        },
      },
    },
  }

  // Lógica para calcular as vendas por faixa de preço
  const priceRanges = ['< $50', '$50 - $100', '$100 - $200', '> $200']
  const salesByPriceRange = [0, 0, 0, 0]

  dummyOrders.forEach((order) => {
    const price = order.totalPrice
    if (price < 50) {
      salesByPriceRange[0] += 1
    } else if (price >= 50 && price <= 100) {
      salesByPriceRange[1] += 1
    } else if (price > 100 && price <= 200) {
      salesByPriceRange[2] += 1
    } else {
      salesByPriceRange[3] += 1
    }
  })

  const dataPrices = {
    labels: priceRanges,
    datasets: [
      {
        label: 'Vendas por Faixa de Preço',
        data: salesByPriceRange,
        backgroundColor: [
          'rgba(206, 0, 45, 0.6)', // Color for '< $50'
          'rgba(255, 206, 86, 0.6)', // Color for '$50 - $100'
          'rgba(54, 162, 235, 0.6)', // Color for '$100 - $200'
          'rgba(75, 192, 192, 0.6)', // Color for '> $200'
        ],
        borderColor: [
          'rgba(206, 0, 45, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const optionsPrices = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
    },
  }

  return (
    <>
      {/* SHOW APP BAR IF USER SELECTED IT */}
      <Header
        shouldBeDisplayed={showAppBarInStatistics}
        storeName={title}
        showCartIcon={showCartIcon}
      ></Header>
      <h1 className='px-3 py-4'>Statistics Dashboard</h1>

      <Row>
        <Col>
          <h5 className='px-3 py-2'>Orders per Brand</h5>
          <Card className='mb-2'>
            <Bar className='px-3' data={data} options={options} />
          </Card>

          <h5 className='px-3 py-2'>Orders per Owner</h5>
          <Card>
            <Bar className='px-3' data={dataOwner} options={optionsOwner} />
          </Card>
        </Col>
        <Col>
          <h5 className='px-3 py-2'>Orders per Price Range</h5>
          <Card>
            <Row></Row>
            <p></p>
            <Row></Row>
            <p></p>
            <Row></Row>
            <p></p>
            <Pie data={dataPrices} options={optionsPrices}></Pie>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default StatisticsScreenPreview
