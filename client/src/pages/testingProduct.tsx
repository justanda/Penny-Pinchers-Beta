import { useState, useEffect } from "react";
import { retrieveProducts } from "../api/productsTEST";
import type { Product } from "../interfaces/Product";
import ProductList from "../components/pRenderTest";

const Home = () => {
    const [products, setProducts] = useState<Product[]>([]);

        useEffect(() => {
            fetchProducts();
        }, []);

        const fetchProducts = async () => {
            const data = await retrieveProducts();

            setProducts(data);
        }

        return ( 
            <>
            <ProductList products={products} />
            </>
        );
};

export default Home;