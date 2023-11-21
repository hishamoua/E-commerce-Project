import {Row , Col} from 'react-bootstrap'
import { Product } from './Product'
import {Header} from './Header'
import { Loader } from './Loader'
import { Message } from './Message'
import { useGetProductsQuery } from '../slices/productsApiSlice'

export const ProductList = () => {

  const { data:products , isLoading, error } = useGetProductsQuery();

  return (
    <>
      { isLoading ? (<Loader />) : error ? (
      <Message variant='danger'>
        {error?.data?.message || error.error}
      </Message>) : (
        <>
        <Header />
        <h1 className='title'>Latest Products</h1>
        <Row>
         {
           products.map((product)=>(
             <Col key={product.id}  xs={12} sm={6} md={4} lg={4} xl={4}>
              <Product product={product} />
             </Col>)
         )}
        </Row>
      </> 
      )}
      </>
  )
}

