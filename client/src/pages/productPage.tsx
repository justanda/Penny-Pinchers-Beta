import { useState, useEffect } from "react";
import { retrieveProducts, filteredByCategory } from "../api/productsAPI";
import type { Product } from "../interfaces/Product";
import ProductList from "../components/ProductList";

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredData, setFilteredData] = useState<Product[]>([]);
  const [userSelected, setUserSelected] = useState(false);

  const handleInputChange = async (e: any) => {
    const value = e.target.value;
    const data = await filteredByCategory(value);
    setFilteredData(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const userProducts = await retrieveProducts();
    setProducts(userProducts);
  };

  return (
    <>
      <select onChange={handleInputChange}>
        <option value="smoked">smoked</option>
        <option value="fresh">fresh</option>
      </select>
      <ProductList
        products={products}
        filteredData={filteredData}
        userSelected={userSelected}
        setUserSelected={setUserSelected}
      />
    </>
  );
};

export default ProductPage;
