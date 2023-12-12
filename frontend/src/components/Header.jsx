import { useNavigate } from "react-router-dom";
import { Badge,NavDropdown } from "react-bootstrap";
import { useSelector , useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { useLogoutMutation } from "../slices/usersApiSlice";
import styled from "styled-components";
import { FaShoppingCart, FaUser } from 'react-icons/fa';
// import Modal from "./Modal";
import { logout } from "../slices/authSlice";
import Roots from '../assets/images/ROOTS (1).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const StyledLink  = styled(Link)`
text-decoration: none;
color: black;
`;

export const Header = () => {

  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [ logoutApiCall ] = useLogoutMutation();

  const logoutHandler = async () => {
     try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login')
     } catch(error) {
      console.log(error);
     }
  };
  
  return (
    <>
    <header>
    <nav className='navBar'>
          <div className='nav-left'>
          <StyledLink to='/'><img src={Roots} className="logo" alt="" /></StyledLink>
          </div>
          <div className="nav-center">
              <ul className="links"> 
                <StyledLink  to='/'><li>Home</li></StyledLink>
                <StyledLink ><li>About us</li></StyledLink>
                <StyledLink to='/productPage'><li>Collection</li></StyledLink>
              </ul>
             </div>
          <div className='nav-right'>
             <StyledLink>
             <FontAwesomeIcon icon={faMagnifyingGlass} />
             </StyledLink>
             <StyledLink to='/cart'>
             
             <FaShoppingCart />
             {
              cartItems.length > 0 && (
                <Badge pill bg='danger' style={{
                  marginLeft:'5px'
                }}>
                    {cartItems.reduce((a,c)=>
                        a + c.qty
                    ,0)}
                </Badge>
              )
             }
             
             </StyledLink>
             { userInfo ? (
              <NavDropdown title={userInfo.name} id="username">
                <StyledLink to='/profile'>
                  <NavDropdown.Item>
                    Profile
                  </NavDropdown.Item>
                </StyledLink>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (    
              <StyledLink to='/login'>
               <FaUser />
              </StyledLink>)}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmeny'>
                 <Link to='/admin/productlist'>
                  <NavDropdown.Item>Products</NavDropdown.Item>
                 </Link>
                 <Link to='/admin/userlist'>
                  <NavDropdown.Item>users</NavDropdown.Item>
                 </Link>
                 <Link to='/admin/orderlist'>
                  <NavDropdown.Item>Orders</NavDropdown.Item>
                 </Link>
                </NavDropdown>
              )}
            
          </div>

      </nav>
      </header>

      
    </>
    
)
  
}

export default Header;
