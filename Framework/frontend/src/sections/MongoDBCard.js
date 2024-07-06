import React from 'react'
import { Card, Col, Dropdown, DropdownButton, Form, Row } from 'react-bootstrap'
import { BsPlus } from 'react-icons/bs'

const MongoDBCard = (props) => {
  const { mongoURI, setMongoURI } = props

  return (
    <>
      <Card className='my-3'>
        <Card.Body>
          <Card.Title>
            <h2>
              <svg
                className='mr-3'
                stroke='currentColor'
                fill='currentColor'
                stroke-width='0'
                version='1.1'
                viewBox='0 0 16 16'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M8 0c-4.418 0-8 1.119-8 2.5v2c0 1.381 3.582 2.5 8 2.5s8-1.119 8-2.5v-2c0-1.381-3.582-2.5-8-2.5z'></path>
                <path d='M8 8.5c-4.418 0-8-1.119-8-2.5v3c0 1.381 3.582 2.5 8 2.5s8-1.119 8-2.5v-3c0 1.381-3.582 2.5-8 2.5z'></path>
                <path d='M8 13c-4.418 0-8-1.119-8-2.5v3c0 1.381 3.582 2.5 8 2.5s8-1.119 8-2.5v-3c0 1.381-3.582 2.5-8 2.5z'></path>
              </svg>
              Database Configuration
            </h2>
          </Card.Title>
          <Card.Text></Card.Text>

          <Form.Group controlId='mongodburl'>
            <Form.Label>MongoDB Connection String URI:</Form.Label>
            <Form.Control
              type='text'
              value={mongoURI}
              onChange={(e) => setMongoURI(e.target.value)}
              placeholder='Enter your Connection String URI Format .'
            />
          </Form.Group>
          <p></p>

          <Form.Label>Database Colections:</Form.Label>

          <Card className='px-3 py-3'>
            <Row>
              <Col>
                <DropdownButton
                  variant='light'
                  id='dropdown-basic-button'
                  title='Orders'
                >
                  <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                  <Dropdown.Item href='#/action-2'>
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Divider />

                  <Dropdown.Item href='#/action-3'>
                    <BsPlus /> Create new field{' '}
                  </Dropdown.Item>
                </DropdownButton>
              </Col>

              <Col>
                <DropdownButton
                  variant='light'
                  id='dropdown-basic-button'
                  title='Products'
                >
                  <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                  <Dropdown.Item href='#/action-2'>
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Divider />

                  <Dropdown.Item href='#/action-3'>
                    <BsPlus /> Create new field{' '}
                  </Dropdown.Item>
                </DropdownButton>
              </Col>

              <Col>
                <DropdownButton
                  id='dropdown-basic-button'
                  title='Users'
                  variant='light'
                >
                  <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                  <Dropdown.Item href='#/action-2'>
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Divider />

                  <Dropdown.Item href='#/action-3'>
                    <BsPlus /> Create new field{' '}
                  </Dropdown.Item>
                </DropdownButton>
              </Col>
            </Row>
          </Card>
        </Card.Body>
      </Card>
    </>
  )
}

export default MongoDBCard
