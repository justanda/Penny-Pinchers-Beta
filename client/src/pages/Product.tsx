
console.log("pages/Product.tsx");
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';  // useParams to get the product ID from URL
import { fetchProductById } from '../api/productsAPI';  // API function (get product by Id)
import { Product as ProductInterface } from '../interfaces/Product';  // Import Product interface
//import Navbar from '../components/Navbar';  // Ensure correct path
//import './Product.css';  // Add any relevant styles (optional)

const Product = () => {
  const { id } = useParams<{ id: string }>();  // Get the product ID from the URL
  const [product, setProduct] = useState<ProductInterface | null>(null);  // State to hold product details
  const [error, setError] = useState<string | null>(null);  // State to handle any errors

  // Fetch product by ID
  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProductById(Number(id));  // call fetchProductById (from productsAPI)
        setProduct(data);  // add the details of the product to React state
      } catch (err) {
        setError('Failed to fetch product details.');
      }
    };

    if (id) {
      getProduct();  // Call function if there's a valid ID
    }
  }, [id]);

  // #############################
  // execute return
  // Return error message if there's an error
  if (error) {
    return (
      <div>
        {/*<Navbar />*/}
        <p>{error}</p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  // Return loading message if product is null
  // check state variable
  if (!product) {
    return (
      <div>
        {/*<Navbar />*/}
        <p>Loading product details...</p>
      </div>
    );
  }

  // Return product details
  return (
    <div>
      {/*<Navbar />*/}
      <div className="product-details">
        <h1>Title: {product.title}</h1>
        <p>{product.imageUrl && <img src={product.imageUrl} alt={product.title} />}</p>
        <p>Description: {product.description}</p>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price.toFixed(2)}</p>
        <p>Sku: {product.sku}</p>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default Product;