// React component
import React, {useState}  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { validateEmail, validatePassword } from './validation';
import './SignupForm.css'; 

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    birthDate: '',
    gender: '',
    termsAccepted: false,
    subscribe: false,
    emailVerified: false,
    errors: {},
});

const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
    });
};

const handleSubmit = (event) => {
    event.preventDefault();
    
    // Validate form data and set errors if any
    const errors = {};
    if (!validateEmail(formData.email)) {
        errors.email = 'Invalid email format';
    }
    if (!validatePassword(formData.password)) {
        errors.password = 'Password is too weak';
    }
    if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.termsAccepted) {
        errors.termsAccepted = 'You must accept the terms and conditions';
    }

    setFormData({ ...formData, errors });

    if (Object.keys(errors).length === 0) {
    // Submit data to server
    console.log('Submitting form', formData);
  }
};

  return (
    <div className="signup-form">
      
        <button className="close-button">✖</button>
        
        <h1>Roots</h1>
      
      <form onSubmit={handleSubmit}>

        <input type="text" placeholder="Prénom" name="firstName" value={formData.firstName} onChange={handleInputChange} />
        <input type="text" placeholder="Nom de famille" name="lastName" value={formData.lastName} onChange={handleInputChange} />
        <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleInputChange} />
        <input type="password" placeholder="Mot de passe" name="password" value={formData.password} onChange={handleInputChange} />
        <input type="password" placeholder="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} />
               
        <input type="tel" placeholder="Téléphone" name="phone" value={formData.phone} onChange={handleInputChange} />
        <input type="date" name="birthDate" value={formData.birthDate} onChange={handleInputChange} />
        
        <label>
            <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleInputChange} />
            I accept the Terms and Conditions
        </label>
       
        <button type="submit">CRÉATION</button>
       
        <div className="social-media-buttons">
          <button aria-label="Sign up with Google">
            <FontAwesomeIcon icon={faGoogle} beatFade size="1.5x" />
          </button>
          <button aria-label="Sign up with Facebook">
            <FontAwesomeIcon icon={faFacebookF} beatFade size="1.5x" />
          </button>
        </div>
      </form>
      
      {Object.keys(formData.errors).map(key => (
                <p key={key} className="error">{formData.errors[key]}</p>
            ))}
    </div>
  );
};

export default SignupForm;
