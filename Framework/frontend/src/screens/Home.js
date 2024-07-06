import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import StoreListScreen from './StoreListScreen'
import NewStoreConfigScreen from './NewStoreConfigScreen'
import { useDispatch, useSelector } from 'react-redux'
import { getStoreDetails } from '../actions/actions'
import { STORE_DETAILS_RESET } from '../constants/constants'
import { useNavigate } from 'react-router-dom'

const Home = ({ exemplo }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [showEditScreen, setShowEditScreen] = useState(false)
  const [selectedStoreId, setSelectedStoreId] = useState(null) // Adicione esta linha

  /* ONCLICK EDIT STORE FROM STORES LIST SCREEN */
  const handleEditStore = (storeId) => {
    dispatch({
      type: STORE_DETAILS_RESET,
    })
    navigate(`/edit/${storeId}`)
  }

  return (
    <Row className='mainRow'>
      <Col md={3} ld={1}>
        <StoreListScreen
          onClickCreateStore={() => setShowEditScreen(false)}
          onClickEditStore={handleEditStore}
        />
      </Col>
      <Col>
        <NewStoreConfigScreen />
        {/* 
        {showEditScreen && selectedStoreId !== null ? (
          <EditStoreConfigScreen selectedStoreId={selectedStoreId} />
        ) : (
        )} */}
      </Col>
    </Row>
  )
}

export default Home
