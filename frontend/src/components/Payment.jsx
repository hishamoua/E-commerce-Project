import { useState, useEffect } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../components/CheckoutSteps';
import { savePaymentMethod } from '../slices/cartSlice';
import { Header } from './Header';

export const Payment = () => {
 const [paymentMethod, setPaymentMethod] = useState('PayPal');

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  useEffect(() => {
    if (!shippingAddress?.address) {
      navigate('/shipping');
    }
  }, [shippingAddress,navigate]);

 const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate('/placeorder');
  };

  return (
    <>
    <Header />
    <Form onSubmit={submitHandler}>
        <CheckoutSteps step1 step2 step3 />
        <h1>Payment Method</h1>
        <Form.Group>
          <Form.Label as='legend'>Select Method</Form.Label>
          <Col>
      
            <Form.Check
              className='my-2'
              type='radio'
              label='PayPal or Credit Card'
              id='PayPal'
              name='paymentMethod'
              value='PayPal'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
     </>
  );
};

export default Payment;