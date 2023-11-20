import pinter from '../assets/images/Vector.png'
import { Link } from 'react-router-dom'
import styled from "styled-components";
import tiktok from '../assets/images/Vector (1).png'
import fb from '../assets/images/icon _facebook_.png'
import inst from '../assets/images/icon _instagram_.png'
import ytb from '../assets/images/icon _youtube_.png'

const StyledLink  = styled(Link)`

color: black;

`;

export const Footer = () => {
  return (
    <>
    <div className="footer-container">
     <div className="footer-links">
      <div>
       <ul className="footer-list">
        <StyledLink><li>Livraison</li></StyledLink>
        <StyledLink><li>Procédure de Retour</li></StyledLink>
        <StyledLink><li>Politique de Cookies</li></StyledLink>
       </ul>
      </div>
      <div>
       <ul>
       <StyledLink><li>Notre histoire</li></StyledLink>
       <StyledLink><li>Histoire du Cuire</li></StyledLink>
       <StyledLink><li>Histoire du Cuire</li></StyledLink>
       </ul>
      </div>
      <div>
      <ul>
      <StyledLink><li>Press</li></StyledLink>
      <StyledLink><li>FAQ</li></StyledLink>
      <StyledLink><li>Contactez-nous</li></StyledLink>
       </ul>
      </div>
     </div>
     <div className="social-accounts">
      
       <img src={pinter} alt="" />
       <img src={tiktok} alt="" />
       <img src={fb} alt="" />
       <img src={inst} alt="" />
       <img src={ytb} alt="" />
      
     </div>
    </div>

  
    </>
  )
}
