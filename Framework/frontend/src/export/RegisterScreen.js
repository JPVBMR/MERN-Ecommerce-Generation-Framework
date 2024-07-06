export const registerScreenFile = `import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Card, Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CustomMessage from '../components/CustomMessage'
import CustomSpinner from '../components/CustomSpinner'
import FormContainer from '../components/FormContainer'
import { registerAction } from '../actions/userActions'

import userChoices from '../userChoices.json'
import Header from '../components/Header'

const RegisterScreen = ({ history }) => {
  /* GET USER CHOICES  */
  const showAppBarInRegister =
    userChoices.authPages.showAppBarInRegister
  const title = userChoices.title
  const showCartIcon = userChoices.cartScreen.showCartIcon

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const location = useLocation()
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const redirect = location.search ? location.search.split('=')[1] : '/'

  //Prevent Redirect to login screen if the user is already logged in
  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [history, userInfo, redirect, navigate])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(registerAction(name, email, password))
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
        <h1>Create an Account</h1>
        {message && <CustomMessage variant='danger'>{message}</CustomMessage>}
        {error && <CustomMessage variant='danger'>{error}</CustomMessage>}
        {loading && <CustomSpinner />}
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

          <Button type='submit' variant='primary'>
            Create Account
          </Button>
        </Form>
        <Row className='py-3'>
          <Col>
            Already registered?{' '}
            <Link to={redirect ? \`/login?redirect=\${redirect}\` : '/login'}>
              Sign In
            </Link>
          </Col>
        </Row>
      </FormContainer>
    </>
  )
}

export default RegisterScreen
`
