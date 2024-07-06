import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import Header from '../components/Header'

const LoginScreenPreview = (props) => {
  const { showAppBarInLogin, title, showCartIcon } = props
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    alert('Login Auth. If successfull you will be redirected to home page')
  }

  return (
    <>
      {/* SHOW APP BAR IF USER SELECTED IT */}
      <Header
        shouldBeDisplayed={showAppBarInLogin}
        storeName={title}
        showCartIcon={showCartIcon}
      ></Header>

      <Card>
        <FormContainer>
          <h1 className='mt-5'>Sign In</h1>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='email'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter your email address here'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='password' className='mb-3'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter your password here'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Sign In
            </Button>
          </Form>
          <Row className='py-3'>
            <Col>
              Don't have an account? <Link>Register</Link>
            </Col>
            <p></p>
            <p></p>
          </Row>
          <p></p>
          <Row></Row>
          <p></p>
          <Row></Row>
          <p></p>
          <Row></Row>
          <p></p>
          <Row></Row>
          <p></p>
          <Row></Row>
          <p></p>
        </FormContainer>
      </Card>
    </>
  )
}

export default LoginScreenPreview
