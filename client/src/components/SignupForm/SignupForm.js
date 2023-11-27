// React component
import React, {useState}  from 'react';
import { Modal, Button } from 'react-bootstrap';
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
    
    //validation de formulaire                
    const errors = {};

                  // Validation de l'email
                  if (!validateEmail(formData.email)) {
                      errors.email = 'Format de l\'email invalide';
                  }

                  // Validation du mot de passe
                  const passwordErrors = [];
                  if (!validatePassword(formData.password)) {
                      if (formData.password.length < 8) {
                          passwordErrors.push("Le mot de passe doit contenir au moins 8 caractères");
                      }
                      if (!/[A-Z]/.test(formData.password)) {
                          passwordErrors.push("Le mot de passe doit inclure une lettre majuscule");
                      }
                      if (!/[a-z]/.test(formData.password)) {
                          passwordErrors.push("Le mot de passe doit inclure une lettre minuscule");
                      }
                      if (!/\d/.test(formData.password)) {
                          passwordErrors.push("Le mot de passe doit inclure un chiffre");
                      }
                  }

                  if (passwordErrors.length > 0) {
                      errors.password = passwordErrors.join(' ');
                  }

                  // Vérification de la correspondance des mots de passe
                  if (formData.password !== formData.confirmPassword) {
                      errors.confirmPassword = 'Les mots de passe ne correspondent pas';
                  }

                  // Acceptation des termes et conditions
                  if (!formData.termsAccepted) {
                      errors.termsAccepted = 'Vous devez accepter les termes et conditions';
                  }


    setFormData({ ...formData, errors});

    if (Object.keys(errors).length === 0) {
 
  }
};


const [showModal, setShowModal] = useState(false);
const handleModalClose = () => setShowModal(false);
const handleModalShow = () => setShowModal(true);

  return (
    
    <>
    <div className="signup-form">
      <Button variant="secondary" size='lg' onClick={handleModalShow}>
        S'inscrire
      </Button></div>

      <Modal className="custom-modal" show={showModal} onHide={handleModalClose} centered>
       
        <Modal.Body className="body-modal">

      <div className="signup-form">
       
        
        <h1 >Roots</h1>
      
      <form onSubmit={handleSubmit}>

        <input type="text" placeholder="Prénom" name="firstName" value={formData.firstName} onChange={handleInputChange} />
        <input type="text" placeholder="Nom de famille" name="lastName" value={formData.lastName} onChange={handleInputChange} />
       
            <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleInputChange} autoComplete="email"/>

            <input type="password" placeholder="Mot de passe" name="password" value={formData.password} onChange={handleInputChange}  autoComplete="new-password" />
            {formData.errors.password && <p className="error">{formData.errors.password}⚠️</p>}
            
            <input type="password" placeholder="Confirmer le mot de passe" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} autoComplete="new-password" />
            {formData.errors.confirmPassword && <span className="error"  beatFade >{formData.errors.confirmPassword}⚠️</span>}  

        <input type="tel" placeholder="Téléphone" name="phone" value={formData.phone} onChange={handleInputChange} />
        <input type="date" name="birthDate" value={formData.birthDate} onChange={handleInputChange} />
        
        <label>
            <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleInputChange} />
            I accept the Terms and Conditions
        </label>
        {formData.errors.termsAccepted && <p className="error">⚠️</p>}
       
        <button type="submit">CRÉATION</button>
       
        <div className="social-media-buttons">
          <button aria-label="Sign up with Google">
            <FontAwesomeIcon icon={faGoogle}   />
          </button>
          <button aria-label="Sign up with Facebook">
            <FontAwesomeIcon icon={faFacebookF}   />
          </button>
        </div>
      </form>
      
      {/*Object.keys(formData.errors).map(key => (
                <p key={key} className="error">{formData.errors[key]}</p>
      ))*/}
             </div>

             </Modal.Body>
      </Modal>
    </>
  );
};

export default SignupForm;
