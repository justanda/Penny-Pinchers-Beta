import React from 'react';
import type { Product } from "../interfaces/Product";

interface ProductListProps {
    products: Product[];
    filteredData: Product[];
    userSelected: boolean;
    setUserSelected: Function;
}

const ProductList: React.FC<ProductListProps> = ({ products, filteredData, userSelected, setUserSelected }) => {

      return (
            <>
            <button onClick={() => setUserSelected(!userSelected)}>Show All Products</button>
            <ul>
                {(userSelected ? filteredData : products).map((product) => (
                    <li key={product.id}>
                        {product.title}
                    </li>
                ))}
            </ul>
        </>
    );
};


export default ProductList;