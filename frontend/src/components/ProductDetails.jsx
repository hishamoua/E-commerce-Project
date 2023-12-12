import { useState } from "react";
import { useParams,useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import { Header} from './Header';
import { Loader } from './Loader';
import { Message } from "./Message";
import { useDispatch } from "react-redux";
import {Row,  Col , Image, ListGroup, Card, Button,Form} from 'react-bootstrap'
import { useGetProductDetailsQuery } from '../slices/productsApiSlice'
import {addToCart} from '../slices/cartSlice'

export const ProductDetails = () => {
 
   const { id: productId } = useParams()


   const dispatch = useDispatch();
   const navigate = useNavigate();

   const [ qty,setQty ] = useState(1);

   
   const { data:product , isLoading, error } = useGetProductDetailsQuery(productId);
   
   const addToCartHandler = () => {
       dispatch(addToCart({...product,qty}));

       navigate('/cart');
   }

  return (
    <>

       <Header />
      <Link to='/productPage' style={{width:'100px',
        color:'white',
        fontWeight:'bold',
        fontSize:'1.2rem'}
        } className='btn btn-dark m-3'>
        Go Back
      </Link>
      

      { isLoading ? (<Loader />) : error ? (
      <Message variant='danger'>
        {error?.data?.message || error.error}
      </Message>) : ( 
      
      <Row className="container">
      <Col md={5}>
         <Image src={product.image} alt={product.name} className="product-image-details" fluid />
      </Col>
      <Col md={4}>
       <ListGroup>
         <ListGroup.Item>
          <h3>{product.name}</h3>
         </ListGroup.Item>
         <ListGroup.Item>
          <strong>Description :</strong> ${product.description}
         </ListGroup.Item>
       </ListGroup>
       
       <Card>
        <ListGroup variant='flush'>
         <ListGroup.Item>
          <Row>
           <Col>Price:</Col>
           <Col>
           <strong>${product.price}</strong>
           </Col>
          </Row>
          </ListGroup.Item>
          <ListGroup.Item>
          <Row>
           <Col>Status:</Col>
           <Col>
           <strong>{product.countInStock > 0 ? 'In stock' : 'Out Of Stock' }</strong>
           </Col>
          </Row>
          </ListGroup.Item>

          { product.countInStock > 0 && (
            <ListGroup.Item>
              <Row>
                <Col>Quantity</Col>
                <Col>
                <Form.Control as='select' value={qty}
                onChange={(e) => {
                    setQty(Number(e.target.value))
                }}
                >
                   {[...Array(product.countInStock).keys()].map((x)=>
                    (<option value={x+1} key={x + 1}>
                      {x + 1}
                    </option>))} 
                </Form.Control>
                </Col>
              </Row>
            </ListGroup.Item>
          )}


          <ListGroup.Item>
            <Button
            className="btn-block"
            type="button"
            disabled={product.countInStock === 0}
            onClick={addToCartHandler}
            >
             Add To Cart
             </Button>
          </ListGroup.Item>
        </ListGroup>
       </Card>
       </Col>
     </Row>
     
     )}

    
    </>
  )
}


export default ProductDetails;