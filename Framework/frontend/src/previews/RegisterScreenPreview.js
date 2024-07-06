import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import Header from '../components/Header'

const RegisterScreenPreview = (props) => {
  const { showAppBarInRegister, title, showCartIcon } = props

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords does not match')
    } else {
      alert(
        'Register Validation. If successfull you will be redirected to home page and logged in automatically'
      )
    }
  }

  return (
    <>
      {/* SHOW APP BAR IF USER SELECTED IT */}
      <Header
        shouldBeDisplayed={showAppBarInRegister}
        storeName={title}
        showCartIcon={showCartIcon}
      ></Header>
      <FormContainer>
        <h1 className='mt-4'>Register</h1>

        <Form onSubmit={submitHandler}>
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              placeholder='Enter your name...'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter your email address...'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter your password here'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='confirmPassword'>
            <Form.Label>Re-Enter Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Confirm password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type='submit' variant='primary' className='mt-3'>
            Create Account
          </Button>
        </Form>
        <Row className='py-3'>
          <Col>
            Already registered? <Link>Sign In</Link>
          </Col>
        </Row>
      </FormContainer>
    </>
  )
}

export default RegisterScreenPreview
