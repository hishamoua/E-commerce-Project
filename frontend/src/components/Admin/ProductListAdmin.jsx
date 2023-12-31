import { Link } from 'react-router-dom';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { toast } from 'react-toastify';
import {
  useGetProductsQuery,
  useDeleteProductMutation,
  useCreateProductMutation,
} from '../../slices/productsApiSlice'; 


const ProductListAdmin = () => {
  const { data: products, isLoading, error, refetch } = useGetProductsQuery();
  console.log(products)

  const [createProduct, { isLoading: loadingCreate }] = useCreateProductMutation();

  const [deleteProduct, { isLoading: loadingDelete }] = useDeleteProductMutation();

  const deleteHandler = async (id) => {
    if(window.confirm('Are you sure you want to create a new product?')) {
      try {
        await deleteProduct(id);
        toast.success('Product deleted')
        refetch();

      } catch (error) {
        toast.error(error?.data?.message || error.error);
      }
    }
  };

  const createProductHandler = async () => {
    if (window.confirm('Are you sure you want to create a new product?')) {
      try {
        await createProduct();
        refetch();
      } catch (err) {
        toast.error(err?.data.message || err.error);
      }
    }
  }
  return (
  <>
    <Row className="align-items-center">
      <Col>
        <h1>Producs</h1>
      </Col>
      <Col className="text-en">
        <Button className='btn-sm m-3' onClick={ createProductHandler }>
          <FaEdit /> Create Product
        </Button>
      </Col>
    </Row>

    {loadingCreate && <Loader />}
    {loadingDelete && <Loader />}

    { isLoading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
      <>
      <Table striped hover responsive className='table-sm'>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>CATEGORY</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product._id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>
                <a href={`/admin/product/${product._id}/edit`}>
                  <Button variant='light' className='btn-sm mx-2'>
                    <FaEdit />
                  </Button>
                </a>
                <Button variant='danger' className='btn-sm' onClick={ () => deleteHandler(product._id) }> 
                  <FaTrash style={{ color: 'white' }}/>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>

      </Table>
      </>
    )}
  </>
  );
};

export default ProductListAdmin;