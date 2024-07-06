import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'

/* Import Components */
import FrameworkHeader from './components/FrameworkHeader'
import Footer from './components/Footer'

/* Import Screens */
import Home from './screens/Home'
import Download from './screens/Download'
import Save from './screens/Save'
import EditScreen from './screens/EditScreen'

/* Import Actions */

const App = () => {
  return (
    <Router>
      <FrameworkHeader />
      <main className='py-3'>
        <Container className='justifyleft'>
          <Routes>
            <Route path='/save' element={<Save />} exact />
            <Route path='/save/:id' element={<Save />} exact />

            <Route path='/download' element={<Download />} exact />
            <Route path='/edit/:id' element={<EditScreen />} />

            <Route path='/' element={<Home />} exact />
          </Routes>
        </Container>
      </main>
      <Footer rodape='Copyright &copy; José Bravo' />
    </Router>
  )
}

export default App
