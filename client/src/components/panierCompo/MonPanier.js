import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import './MonPanier.css';

const MonPaniers = () => {
  const [quantity, setQuantity] = useState(1);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [discount, setDiscount] = useState(0);
  const  imageUrl="./public/sac-pro-noir.jpg"
  const price = 249.00;
  const shipping = 15.00;
  const total = (price * quantity + shipping).toFixed(2);
  const totalPro = (price * quantity + shipping - discount).toFixed(2);


  const handleQuantityChange = (delta) => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity + delta));
  };
  

  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value);
  };

  const applyPromoCode = () => {
    // Supposons que le code promo et "PROMO10" qui applique une réduction de 10%
    const PROMO_CODE = "PROMO10";
    const DISCOUNT_PERCENTAGE = 0.1; // 10%
  
    if (promoCode === PROMO_CODE && !promoApplied) {
      // Calcule de la réduction
      const discountAmount = total * DISCOUNT_PERCENTAGE;
      setDiscount(discountAmount);
      setPromoApplied(true);
      alert("Code promo appliqué avec succès !");
    } else if (promoCode !== PROMO_CODE) {
      alert("Code promo invalide.");
    } else if (promoApplied) {
      alert("Le code promo a déjà été appliqué.");
    }
  };

  return (
    
    <div className='panier' style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}> 
         
            <div  className='product-detail' style={{ textAlign: 'center' }}>
            <h1 class="sac-pro-noir">Sac PRO Noir</h1>
                <img src={imageUrl} alt="Product" style={{ maxWidth: '60%' }} />
                <p className="price" style={{fontSize:'20px'}}>{`€${price.toFixed(2)}`}</p>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
                <button className='quantity-btn'onClick={() => handleQuantityChange(-1)}>-</button>
                <span style={{ margin: '0 10px' }}>{quantity}</span>
                <button  className='quantity-btn' onClick={() => handleQuantityChange(1)}>+</button>
                </div>
            </div>    
                
                



            <div className='divDroite' style={{ textAlign: 'right', width:'30%'}}>

                        <div className='product-actions' style={{ marginTop: '5em' }}>
                            <FontAwesomeIcon icon={faHeart} shake style={{ marginRight: '5px' }} className="fa-icon fa-heart" />
                            <FontAwesomeIcon icon={faTrashAlt} className="fa-icon fa-trash" />
                        </div>     

                        <div style={{ marginBottom: '10px' }}>
                                <input type="text" 
                                    placeholder="Code promo..." 
                                    style={{ marginRight: '5px' }}
                                    value={promoCode}
                                    onChange={handlePromoCodeChange} />
                                    
                                <button 
                                    style={{backgroundColor:'#0A6808',color:'white',border:'1px solid black'}} 
                                    onClick={applyPromoCode}>
                                OK</button>
                        </div>
            
            

                        <div className="total-section">
                                <div className="price-details">
                                    <p>Total:</p>
                                    <p>{`€${(price * quantity).toFixed(2)}`}</p>
                                </div>
                                <div className="price-details">
                                    <p>Livraison:</p>
                                    <p>{`€${shipping.toFixed(2)}`}</p>
                                </div>
                                <div className="price-details total">
                                    <p>Total:</p>
                                    <p>{`€${total}`}</p>
                                </div>
                                <div className="price-details total">
                                    <p>Prix Promo:</p>
                                    <p>{`€${totalPro}`}</p>
                                </div>
                                <button className='sub'type="submit">SAVE</button>
                        </div> 
            </div>
     </div>
     
     
 
  );
}

export default MonPaniers;
