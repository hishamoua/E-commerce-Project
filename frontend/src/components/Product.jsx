import {Card} from "react-bootstrap"
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink  = styled(Link)`
textDecoration: none;
color: black;
`;

export const Product = ({ product }) => {
  return (
    <StyledLink to = {`/productPage/${product._id}`}>
    <Card className="cell">
     <StyledLink to = {`/productPage/${product._id}`}>
       <Card.Img src={product.image} className="product-image" />
    </StyledLink>
     <Card.Body>
      <StyledLink to = {`/productPage/${product._id}`}>
        <Card.Title as="div">
          <strong>{product.name}</strong>
        </Card.Title>
        </StyledLink>

      <Card.Text as="h3">
          ${product.price}
      </Card.Text>

     </Card.Body>

    </Card>
    </StyledLink>
    
  )
}

export default Product;