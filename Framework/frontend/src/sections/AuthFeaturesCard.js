import React from 'react'
import { Card, Col, FormLabel, Row } from 'react-bootstrap'
import Switch from '../components/Switch'
import LoginScreenPreview from '../previews/LoginScreenPreview'
import RegisterScreenPreview from '../previews/RegisterScreenPreview'

const AuthFeaturesCard = (props) => {
  const {
    includeAuthPages,
    setIncludeAuthPages,
    expandAuthPages,
    setExpandAuthPages,

    title,
    showCartIcon,

    showAppBarInRegister,
    setShowAppBarInRegister,
    showAppBarInLogin,
    setShowAppBarInLogin,
  } = props

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            <h2>
              <svg
                stroke='currentColor'
                fill='currentColor'
                stroke-width='0'
                viewBox='0 0 16 16'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M5.187 1.025C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 012.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 01-2.418 2.3 6.942 6.942 0 01-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 01-1.007-.586 11.192 11.192 0 01-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 012.415 1.84a61.11 61.11 0 012.772-.815zm3.328 6.884a1.5 1.5 0 10-1.06-.011.5.5 0 00-.044.136l-.333 2a.5.5 0 00.493.582h.835a.5.5 0 00.493-.585l-.347-2a.5.5 0 00-.037-.122z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <span className='ml-3 mr-3'>Authentication</span>
              <Switch
                isToggled={includeAuthPages}
                onToggle={() => setIncludeAuthPages(!includeAuthPages)}
              ></Switch>
            </h2>
          </Card.Title>

          <Card.Text>
            In this section you can add the Register and Login pages to your
            application. Please note that some functionalities like Place Order
            require the user to be logged in and the corresponding option to
            include the autorization page will be automatically enabled once the
            feature is added to the application .
            <Row>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col>
                <button
                  onClick={() => setExpandAuthPages(!expandAuthPages)}
                  className='btn btn-link ml-3 mt-2'
                >
                  {expandAuthPages ? 'Show Less' : 'Show More'}

                  {expandAuthPages ? (
                    <svg
                      className='ml-2'
                      stroke='currentColor'
                      fill='currentColor'
                      stroke-width='0'
                      version='1'
                      viewBox='0 0 48 48'
                      enable-background='new 0 0 48 48'
                      height='1.5em'
                      width='1.5em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <polygon
                        fill='#2196F3'
                        points='5,30.9 8.1,34 24,18.1 39.9,34 43,30.9 24,12'
                      ></polygon>
                    </svg>
                  ) : (
                    <svg
                      className='ml-2'
                      stroke='currentColor'
                      fill='currentColor'
                      stroke-width='0'
                      version='1'
                      viewBox='0 0 48 48'
                      enable-background='new 0 0 48 48'
                      height='1.5em'
                      width='1.5em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <polygon
                        fill='#2196F3'
                        points='43,17.1 39.9,14 24,29.9 8.1,14 5,17.1 24,36'
                      ></polygon>
                    </svg>
                  )}
                </button>
              </Col>
            </Row>
          </Card.Text>

          {expandAuthPages && (
            <>
              {/* Authorization PAGE */}
              <Card.Body>
                <Row>
                  <Col>
                    <Switch
                      isToggled={showAppBarInLogin}
                      onToggle={() => setShowAppBarInLogin(!showAppBarInLogin)}
                    ></Switch>
                    <FormLabel>Include navigation bar in Login </FormLabel>
                  </Col>
                  <Col>
                    <Switch
                      isToggled={showAppBarInRegister}
                      onToggle={() =>
                        setShowAppBarInRegister(!showAppBarInRegister)
                      }
                    ></Switch>
                    <FormLabel>Include navigation bar in Register</FormLabel>
                  </Col>
                </Row>

                <div className='row'>
                  <div className='col px-3'>
                    <Card>
                      <LoginScreenPreview
                        showAppBarInLogin={showAppBarInLogin}
                        title={title}
                        showCartIcon={showCartIcon}
                      />
                    </Card>
                  </div>
                  <div className='col px-3'>
                    <Card>
                      <RegisterScreenPreview
                        showAppBarInRegister={showAppBarInRegister}
                        title={title}
                        showCartIcon={showCartIcon}
                      />
                    </Card>
                  </div>
                </div>
              </Card.Body>
            </>
          )}
        </Card.Body>
      </Card>
    </>
  )
}

export default AuthFeaturesCard
