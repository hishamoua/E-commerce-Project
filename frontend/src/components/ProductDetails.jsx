import { useEffect,useState } from 'react'
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import {Row,  Col , Image, ListGroup, Card, Button } from 'react-bootstrap'

import axios from "axios";

export const ProductDetails = () => {
  const [product,setProduct] = useState([]);

  const { id: productId } = useParams()


  useEffect(()=>{
    const fetchProduct = async () => {
      const {data} = await axios.get(`http://localhost:5000/api/products/${productId}`);
      setProduct(data);
    }
    fetchProduct()
  },[productId]);

  

  console.log(product);


  return (
    <>
    
     <Link to='/productPage' className='btn btn-light my-3'>
      Go Back
      </Link>
     <Row >
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
    </>
  )
}


