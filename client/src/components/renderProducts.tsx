import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import type { Product } from "../interfaces/Product";
import { Link } from "react-router-dom";

interface ProductListProps {
  products: Product[];
  filteredData: Product[];
  userSelected: boolean;
  setUserSelected: Function;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  filteredData,
  userSelected,
  setUserSelected,
}) => {
  const displayedProducts = userSelected ? filteredData : products;

  return (
    <Container className="my-4">
      <Button
        onClick={() => setUserSelected(!userSelected)}
        variant="primary"
        className="mb-3"
      >
        Show All Products
      </Button>
      <Row xs={1} md={3} className="g-4">
        {displayedProducts.map((product) => (
          <Col key={product.id}>
            <Card>
              <Card.Img
                variant="top"
                src={product.image || "/placeholder.png"}
                alt={product.title}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Link to={`/product/${product.id}`}>
                  <Button variant="primary">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;

// import React from 'react';
// import type { Product } from "../interfaces/Product";

// interface ProductListProps {
//     products: Product[];
//     filteredData: Product[];
//     userSelected: boolean;
//     setUserSelected: Function;
// }

// const ProductList: React.FC<ProductListProps> = ({ products, filteredData, userSelected, setUserSelected }) => {

//       return (
//             <>
//             <button onClick={() => setUserSelected(!userSelected)}>Show All Products</button>
//             <ul>
//                 {(userSelected ? filteredData : products).map((product) => (
//                     <li key={product.id}>
//                         {product.title}
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
// };

// import React from "react";
// import type { Product } from "../interfaces/Product";

// interface ProductListProps {
//   products: Product[];
//   filteredData: Product[];
//   userSelected: boolean;
//   setUserSelected: Function;
// }

// const ProductList: React.FC<ProductListProps> = ({
//   products,
//   filteredData,
//   userSelected,
//   setUserSelected,
// }) => {
//   return (
//     <>
//       <button onClick={() => setUserSelected(!userSelected)}>
//         Show All Products
//       </button>
//       <ul>
//         {(userSelected ? filteredData : products).map((product) => (
//           <li key={product.id}>{product.title}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default ProductList;
