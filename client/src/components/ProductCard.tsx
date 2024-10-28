
// A component to render a single productCard

//import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../interfaces/Product';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="product-item">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      {product.imageUrl && (
        <img src={product.imageUrl} alt={product.title} className="product-image" />
      )}
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
};

export default ProductCard;