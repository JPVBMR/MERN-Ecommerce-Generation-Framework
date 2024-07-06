export const AppFile = `import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'

/** Screens Imports will be inserted here **/ 

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
                /** Insert your Application Routes here **/
          </Routes>
        </Container>
      </main>
    </Router>
  )
}

export default App
`
