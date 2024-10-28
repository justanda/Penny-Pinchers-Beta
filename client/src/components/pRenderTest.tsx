import React from 'react';
import type { Product } from "../interfaces/Product";

interface ProductListProps {
    products: Product[] | null;
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <>
            {products && products.map((product) => (
                <div key={product.id}>
                    <h4>{product.title}</h4>
                    <div> <p>{product.description}</p></div>
                </div>
            ))}
        </>
    );
};

export default ProductList;