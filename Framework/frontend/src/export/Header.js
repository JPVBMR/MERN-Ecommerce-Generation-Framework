export const HeaderFile = `import React from 'react'
import { Navbar, Container, Form, Nav, NavDropdown } from 'react-bootstrap'
import { Link, useNavigate, Route } from 'react-router-dom'
import userChoices from '../userChoices.json'
import { useDispatch, useSelector } from 'react-redux'

const renderHeaderBar = (storeName, showCartIcon, userInfo) => {
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
                  {/* ADMIN MENU */}
                  {userInfo && userInfo.isAdmin && (
                    <NavDropdown title='Admin' id='adminmenu'>
                      <NavDropdown.Item as={Link} to='/admin/userlist'>
                        Users
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to='/admin/productList'>
                        Products
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to='/admin/orderList'>
                        Orders
                      </NavDropdown.Item>
                    </NavDropdown>
                  )}

                  {/* STANDARD MENU */}
                  {showCartIcon && (
                    <Nav.Link as={Link} to='/cart'>
                      <i className='fas fa-shopping-cart'></i> Cart
                    </Nav.Link>
                  )}
                  {userInfo ? (
                    <NavDropdown title={userInfo.name} id='username'>
                      <NavDropdown.Item as={Link} to='/profile'>
                        Profile
                      </NavDropdown.Item>
                      <NavDropdown.Item onClick={logoutHandler}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  ) : (
                    <Nav.Link as={Link} to='/login'>
                      <i className='fas fa-user'></i> Sign In
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

const logoutHandler = () => {

}



const Header = ({ storeName, showCartIcon, shouldBeDisplayed }) => {

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  return <>{shouldBeDisplayed && renderHeaderBar(storeName, showCartIcon, userInfo)}</>
}

export default Header

`
