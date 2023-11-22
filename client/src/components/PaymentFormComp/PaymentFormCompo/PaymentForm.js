import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcPaypal, faCcVisa, faCcApplePay } from '@fortawesome/free-brands-svg-icons';
import './PaymentForm.css';

const PaymentForm = () => {
  const [paymentInfo, setPaymentInfo] = useState({
    firstName: '',
    lastName: '',
    cardNumber: '',
    securityCode: '',
  });

  const handleInputChange = (e) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process payment information here
    console.log(paymentInfo);
  };

  return (
    <div className="payment-form">
      
      <div className="payment-methods">
      
        <FontAwesomeIcon icon={faCcPaypal}  size="2x" />
        <FontAwesomeIcon icon={faCcVisa}  size="2x" />
        <FontAwesomeIcon icon={faCcApplePay}  size="2x" />
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">Prénom</label>
        <input id="firstName" type="text" name="firstName" value={paymentInfo.firstName} onChange={handleInputChange} />
        
        <label htmlFor="lastName">Nom de famille</label>
        <input id="lastName" type="text" name="lastName" value={paymentInfo.lastName} onChange={handleInputChange} />
        
        <label htmlFor="cardNumber">Numéro de carte</label>
        <input id="cardNumber" type="text" name="cardNumber" value={paymentInfo.cardNumber} onChange={handleInputChange} />
        
        <label htmlFor="securityCode">Code de sécurité :</label>
        
        <div className="secureCode">
        <img src="../secureCodeIcon.webp" alt="Card Security Code Icon" />
        <input id="securityCode" type="text" name="securityCode" value={paymentInfo.securityCode} onChange={handleInputChange} />
        </div>

        <button type="submit">SAVE</button>
      </form>
    </div>
  );
};

export default PaymentForm;
