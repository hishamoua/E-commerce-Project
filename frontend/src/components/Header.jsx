import { useState } from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {FaShoppingCart, FaUser } from 'react-icons/fa';
import Modal from "./Modal";
import Roots from '../assets/images/ROOTS (1).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'


const StyledLink  = styled(Link)`
textDecoration: none;
color: black;
`;



export const Header = () => {

  const { cartItems } = useSelector((state) => state.cart)
  

  console.log(cartItems);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
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
             <StyledLink onClick={toggleModal}>
               <FaUser /></StyledLink>
            
          </div>

      </nav>
      </header>

      <Modal isOpen={isModalOpen} onClose={toggleModal} />

    </>
)
  
}
