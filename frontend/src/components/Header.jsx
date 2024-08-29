import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Badge, NavDropdown } from 'react-bootstrap';
import { FaShoppingCart, FaUser} from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import { toast } from 'react-toastify';
import { Dropdown, initMDB } from "mdb-ui-kit";
import { FaFlagUsa, FaSearch } from 'react-icons/fa';
import logo  from '../assets/logo_title280_80.svg';

initMDB({ Dropdown });

const Header = () => {
  const { cartItems } = useSelector(state => state.cart);
  const { userInfo } = useSelector(state => state.auth);
  const [logoutApiCall] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());

      navigate('/login');
      toast.success('Logout successful');
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  return (
    <Navbar
      bg=''
      variant=''
      expand='md'
      collapseOnSelect
      className='fixed-top z-2 '
    >



      <Container>
        
        <LinkContainer to='/'>
          <Navbar.Brand>

          <img src={logo} alt="Logo" />
          
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />

        <Navbar.Collapse id='basic-navbar-nav'>

          <Nav className='ms-auto m-2'>
            <div className=' navbar navbar-expand-lg navbar-light bg-body-tertiary w-100'>
              <div className="container-fluid">
                <ul className="navbar-nav">

                  <li className="nav-item dropdown">
                    <a
                      data-mdb-dropdown-init
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      aria-expanded="true"
                    >
                     <a className="dropdown-item w-75" href="#">
                      <FaFlagUsa style={{ width: '50px' }}  />
                     
                          <i className="flag-united-kingdom flag w-100"></i>English
                          <i className="fa fa-check text-success ms-2"></i ></a>
                          
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <a class="dropdown-item" href="#">
                          <i class="flag-united-kingdom flag"></i>English
                          <i class="fa fa-check text-success ms-2"></i ></a>
                      </li>
                      <li><hr class="dropdown-divider" /></li>
                      <li>
                        <a class="dropdown-item" href="#"><i class="flag-poland flag"></i>Polski</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"><i class="flag-china flag"></i>中文</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"><i class="flag-japan flag"></i>日本語</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"><i class="flag-germany flag"></i>Deutsch</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"><i class="flag-france flag"></i>Français</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"><i class="flag-spain flag"></i>Español</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"><i class="flag-russia flag"></i>Русский</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"><i class="flag-portugal flag"></i>Português</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
           
           </div>
           <Nav.Link>  <FaSearch style={{ maxWidth: '100px' }} /></Nav.Link>
          
            <LinkContainer to='/cart'>
              <Nav.Link>
                <FaShoppingCart style={{ marginRight: '5px' }} />

                {cartItems.length > 0 && (
                  <Badge
                    pill
                    bg='warning'
                    style={{ marginLeft: '5px' }}
                    className='text-dark'
                  >
                    <strong>
                      {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                    </strong>
                  </Badge>
                )}
              </Nav.Link>
            </LinkContainer>
            {userInfo ? (
              <NavDropdown title={`Hello👋, ${userInfo.name}`} id='username'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to='/login'>
                <Nav.Link>
                  <FaUser style={{ marginRight: '5px' }} />

                </Nav.Link>
              </LinkContainer>
            )}
            {/* {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/product-list'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/order-list'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/user-list'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )} */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
