import { useEffect,useState } from 'react'
import {Row , Col} from 'react-bootstrap'
import { Product } from './Product'
import {Header} from './Header'
import axios from 'axios'


export const ProductList = () => {
  const [products,setProduct] = useState([]);

  useEffect(()=>{
    const fetchProducts = async () => {
      const {data} = await axios.get('http://localhost:5000/api/products');
      setProduct(data);
      console.log(data);
    }



    fetchProducts()
  },[]);

  return (
    <>
      <Header />
      <h1 className='title'>Latest Products</h1>
      <Row className='container'>
       {
         products.map((product)=>(
           <Col key={product.id}  xs={12} sm={6} md={4} lg={4} xl={4}>
            <Product product={product} />
           </Col>)
       )}
      </Row>
    </>
  )
}

