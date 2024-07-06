import React from 'react'
import { Navbar, Container, Form, Nav, NavDropdown } from 'react-bootstrap'
import { Link, useNavigate, Route } from 'react-router-dom'

const renderHeaderBar = (storeName, showCartIcon) => {
  return (
    <>
      <header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
          <Container>
            <Form>
              <Navbar.Brand>
                <svg
                  className='mr-2'
                  stroke='currentColor'
                  fill='currentColor'
                  stroke-width='0'
                  viewBox='0 0 24 24'
                  height='2em'
                  width='2em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g>
                    <path fill='none' d='M0 0h24v24H0z'></path>
                    <path d='M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9zM7 11v2a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7zm0 4v3h3a3 3 0 0 0-3-3z'></path>
                  </g>
                </svg>
                {storeName}
              </Navbar.Brand>

              <Navbar.Toggle aria-controls='basic-navbar-nav' />
            </Form>

            <Form>
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto'>
                  {/* STANDARD MENU */}
                  {showCartIcon && (
                    <Nav.Link as={Link} to='/cart'>
                      <i className='fas fa-shopping-cart'></i> Cart
                    </Nav.Link>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Form>
          </Container>
        </Navbar>
      </header>
    </>
  )
}

const Header = ({ storeName, showCartIcon, shouldBeDisplayed }) => {
  return <>{shouldBeDisplayed && renderHeaderBar(storeName, showCartIcon)}</>
}

export default Header
