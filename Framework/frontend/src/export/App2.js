export const AppFile = `import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//import RegisterScreen from './screens/RegisterScreen'


import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import CartScreen from './screens/CartScreen'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'


import CategoriesList from './screens/CategoriesList'

import { useDispatch } from 'react-redux'
import { getAllCategory } from './actions/categoryActions'


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllCategory())
  }, [dispatch])

  return (
    <Router>
      <main className="py-3">
        <Container>
          <Routes>
            <Route path='/admin/productList' element={<ProductListScreen />} />
            <Route path="/admin/productlist/:pageNumber" element={<ProductListScreen />} exact />

            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path="/product/:id/edit" element={<ProductEditScreen />} />
            <Route path='/cart/:id?' element={<CartScreen />} />

            <Route path="/categories" element={<CategoriesList />} exact />
            
            {/* LANDING PAGE */}
            <Route path='/search/:searchString' element={<HomeScreen />} />
            <Route path='/' element={<HomeScreen />} />
          </Routes>
        </Container>
      </main>
    </Router>
  )
}

export default App
`
