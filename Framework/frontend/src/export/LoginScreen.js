export const loginScreenFile = `import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Card, Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CustomMessage from '../components/CustomMessage'
import CustomSpinner from '../components/CustomSpinner'
import FormContainer from '../components/FormContainer'
import { loginAction } from '../actions/userActions'
import Header from '../components/Header'
import userChoices from '../userChoices.json'

const LoginScreen = ({ history }) => {
  /* GET USER CHOICES  */
  const showAppBarInLogin = userChoices.authPages.showAppBarInLogin
  const title = userChoices.title
  const showCartIcon = userChoices.cartScreen.showCartIcon

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const location = useLocation()
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  //Prevent Redirect to login screen if the user is already logged in
  useEffect(() => {
    if (userInfo) {
      if (redirect === 'shipping') {
        navigate('/shipping')
      } else {
        navigate(redirect)
      }
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(loginAction(email, password))
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
          <h1>Sign In</h1>
          {error && <CustomMessage variant='danger'>{error}</CustomMessage>}
          {loading && <CustomSpinner />}
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

            <Form.Group controlId='password'>
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
              Don't have an account?{' '}
              <Link
                to={redirect ? \`/register?redirect=\${redirect}\` : '/register'}
              >
                Register
              </Link>
            </Col>
          </Row>
        </FormContainer>
      </Card>
    </>
  )
}

export default LoginScreen
`
