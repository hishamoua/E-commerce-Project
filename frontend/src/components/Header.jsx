import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Modal from "./Modal";
import Roots from '../assets/images/ROOTS (1).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'



const StyledLink  = styled(Link)`
textDecoration: none;
color: black;
`;



export const Header = () => {
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
             <StyledLink>
             <div className="cart">
             <div><FontAwesomeIcon icon={faShoppingCart} /></div>
             <div>0</div>
             </div>
             </StyledLink>
             <StyledLink onClick={toggleModal}>
               <FontAwesomeIcon icon={faUser} /></StyledLink>
            
          </div>

      </nav>
      </header>

      <Modal isOpen={isModalOpen} onClose={toggleModal} />

    </>
)
  
}
