import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { Loader } from './Loader'
import { Message } from "./Message";
import {Row,  Col , Image, ListGroup, Card, Button } from 'react-bootstrap'
import { useGetProductDetailsQuery } from '../slices/productsApiSlice'


export const ProductDetails = () => {
 
   const { id: productId } = useParams()

   const { data:product , isLoading, error } = useGetProductDetailsQuery(productId);

  return (
    <>
      <Link to='/productPage' className='btn btn-light my-3'>
      Go Back
      </Link>
      

      { isLoading ? (<Loader />) : error ? (
      <Message variant='danger'>
        {error?.data?.message || error.error}
      </Message>) : ( 
      
      <Row>
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
       </Col>
       <Col md={3}>
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
          <ListGroup.Item>
            <Button
            className="btn-block"
            type="button"
            disabled={product.countInStock === 0}>
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


