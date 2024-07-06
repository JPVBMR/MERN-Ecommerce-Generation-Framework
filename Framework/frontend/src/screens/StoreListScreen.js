import React, { useEffect, useState } from 'react'
import { Badge, Button, Card } from 'react-bootstrap'
import '../components/helper.css'

import ListSubheader from '@mui/material/ListSubheader'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import StarBorder from '@mui/icons-material/StarBorder'
import { useDispatch, useSelector } from 'react-redux'
import { listAllStoresAction } from '../actions/actions'

// Exemplo de dados da lista de registros (você pode substituir isso pelos seus próprios dados)

const transformDataToListItem = (data) => {
  return data.map((store) => ({
    id: store._id, // Use o campo _id como identificador
    name: store.title, // Use o campo title como nome
    fields: [
      `Owner Name: ${store.ownerName}`,
      `Owner Email: ${store.ownerEmail}`,
      `Mongo URI: ${store.mongoURI}`,
      `Selected Bootstrap: ${store.selectedBootstrap}`,
      `Landing Page: ${store.landingPage}`,

      `Authentication: ${store.includeAuthPages ? 'Included' : 'Not Included'}`,

      `User Management: ${
        store.includeProductListScreen ? 'Included' : 'Not Included'
      }`,
      `Order Management: ${
        store.includeProductListScreen ? 'Included' : 'Not Included'
      }`,
      `Product Management: ${
        store.includeProductListScreen ? 'Included' : 'Not Included'
      }`,

      `Home Screen: ${store.includeHomeScreen ? 'Included' : 'Not Included'}`,
      `Shopping Cart: ${store.includeShopCart ? 'Included' : 'Not Included'}`,
      `Place Order: ${store.includePlaceOrder ? 'Included' : 'Not Included'}`,
      // Adicione outros campos conforme necessário
    ],
  }))
}

const StoreListScreen = (props) => {
  const { onClickEditStore, onClickCreateStore } = props
  const dispatch = useDispatch()

  const [openItems, setOpenItems] = useState([])
  const [records, setRecords] = useState([]) // Mova records para o estado
  const [selectedStores, setSelectedStores] = useState([])

  /* Get Data From State */
  const allStoresList = useSelector((state) => state.allStoresList)
  const { loading, error, listAllStores } = allStoresList

  useEffect(() => {
    if (!listAllStores || listAllStores.length === 0) {
      dispatch(listAllStoresAction())
    }
  }, [dispatch, listAllStores])

  useEffect(() => {
    if (!loading && Array.isArray(listAllStores)) {
      const newRecords = listAllStores.map((store) =>
        transformDataToListItem([store])
      )
      setRecords(newRecords.flat()) // Atualize o estado de records
    }
  }, [loading, listAllStores])

  const handleClick = (recordId) => {
    if (openItems.includes(recordId)) {
      // Se o registro já estiver aberto, recolha-o
      setOpenItems(openItems.filter((id) => id !== recordId))
    } else {
      // Caso contrário, abra-o
      setOpenItems([...openItems, recordId])
    }
  }

  const handleSelectStore = (store) => {
    setSelectedStores([...selectedStores, store])
  }

  return (
    <>
      <Card className='my-3' style={{ height: '100%' }}>
        <Card.Body>
          <Card.Title>
            <h2>
              <svg
                className='mr-2 mb-2'
                stroke='currentColor'
                fill='currentColor'
                stroke-width='0'
                version='1'
                viewBox='0 0 48 48'
                enable-background='new 0 0 48 48'
                height='1.3em'
                width='1.3em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill='#FFA000'
                  d='M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z'
                ></path>
                <path
                  fill='#FFCA28'
                  d='M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z'
                ></path>
              </svg>
              Created Stores
              <Button
                variant='error'
                className='mb-2'
                onClick={onClickCreateStore.bind(this)}
              >
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  stroke-width='0'
                  viewBox='0 0 24 24'
                  height='2em'
                  width='1.8em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M15 2.013L9 2.013 9 9 2 9 2 15 9 15 9 21.987 15 21.987 15 15 22 15 22 9 15 9z'></path>
                </svg>
              </Button>
            </h2>
          </Card.Title>
          <Card.Text></Card.Text>

          <List sx={{ width: '100%', maxWidth: 360 }}>
            {records.map((record) => (
              <div key={record.id}>
                <ListItemButton onClick={() => handleClick(record.id)}>
                  <ListItemIcon>
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      stroke-width='0'
                      version='1'
                      viewBox='0 0 48 48'
                      enable-background='new 0 0 48 48'
                      height='1.3em'
                      width='1.3em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <polygon
                        fill='#90CAF9'
                        points='40,45 8,45 8,3 30,3 40,13'
                      ></polygon>
                      <polygon
                        fill='#E1F5FE'
                        points='38.5,14 29,14 29,4.5'
                      ></polygon>
                    </svg>
                  </ListItemIcon>
                  <ListItemText
                    className='listStoresLabels'
                    primary={record.name}
                  />
                  {openItems.includes(record.id) ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )}
                  {/*                   <input type='checkbox' className='list-item-checkbox' />
                   */}{' '}
                </ListItemButton>
                <Collapse
                  in={openItems.includes(record.id)}
                  timeout='auto'
                  unmountOnExit
                >
                  <List component='div' disablePadding>
                    <Button
                      className='mr-5'
                      variant='error'
                      onClick={onClickEditStore.bind(this, record.id)}
                    >
                      <svg
                        className='ml-2 mr-2'
                        stroke='currentColor'
                        fill='currentColor'
                        stroke-width='0'
                        viewBox='0 0 24 24'
                        height='1.4em'
                        width='1.4em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g>
                          <path fill='none' d='M0 0h24v24H0z'></path>
                          <path d='M21 15.243v5.765a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993V9h6a1 1 0 0 0 1-1V2h10.002c.551 0 .998.455.998.992v3.765l-8.999 9-.006 4.238 4.246.006L21 15.243zm.778-6.435l1.414 1.414L15.414 18l-1.416-.002.002-1.412 7.778-7.778zM3 7l5-4.997V7H3z'></path>
                        </g>
                      </svg>
                      Edit Store Configurations
                    </Button>
                    {record.fields.map((field, index) => (
                      <ListItemButton key={index} sx={{ pl: 4 }}>
                        <svg
                          className='mr-2'
                          stroke='currentColor'
                          fill='none'
                          stroke-width='2'
                          viewBox='0 0 24 24'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          height='1.2em'
                          width='1.2em'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <polyline points='15 10 20 15 15 20'></polyline>
                          <path d='M4 4v7a4 4 0 0 0 4 4h12'></path>
                        </svg>
                        <ListItemText primary={field}></ListItemText>
                        {!field.includes('Not') &&
                        field.includes('Included') ? (
                          <span>
                            {' '}
                            <svg
                              className='mr-1'
                              stroke='currentColor'
                              fill='green'
                              stroke-width='0'
                              viewBox='0 0 1024 1024'
                              height='1.2em'
                              width='1,2em'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path d='M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z'></path>
                            </svg>
                          </span>
                        ) : field.includes('Not Included') ? (
                          <span>
                            {' '}
                            <svg
                              stroke='currentColor'
                              fill='red'
                              stroke-width='0'
                              version='1.2'
                              baseProfile='tiny'
                              viewBox='0 0 24 24'
                              height='1.6em'
                              width='1.6em'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path d='M12 4c-4.419 0-8 3.582-8 8s3.581 8 8 8 8-3.582 8-8-3.581-8-8-8zm3.707 10.293c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293 2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023 0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l2.293 2.293 2.293-2.293c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-2.293 2.293 2.293 2.293z'></path>
                            </svg>
                          </span>
                        ) : (
                          <></>
                        )}
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </div>
            ))}
          </List>

          <div className='deleteBtnDiv mt-5'>
            <Button className='mr-2 '>
              {' '}
              Download
              <svg
                className='ml-2'
                stroke='currentColor'
                fill='currentColor'
                stroke-width='0'
                viewBox='0 0 1024 1024'
                height='1.5em'
                width='1.5em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z'></path>
              </svg>
            </Button>

            <Button className='mr-3 deleteBtn'>
              {' '}
              Delete
              <svg
                className='ml-2'
                stroke='currentColor'
                fill='currentColor'
                stroke-width='0'
                viewBox='0 0 1024 1024'
                height='1.5em'
                width='1.5em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z'></path>
              </svg>
            </Button>
          </div>

          {/* PILLS SELECTED STORES */}
          {selectedStores.length > 0 && (
            <div className='selected-stores mt-3'>
              <strong>Selected Store Configurations:</strong>
              {selectedStores.map((store, index) => (
                <Badge key={index} pill variant='primary' className='mr-2'>
                  {store.title}
                </Badge>
              ))}
            </div>
          )}
        </Card.Body>
      </Card>
    </>
  )
}

export default StoreListScreen
