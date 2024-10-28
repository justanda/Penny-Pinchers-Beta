
/*
a page used to 
    display a list of products, 
    provide navigation to individual product detail pages, 
    a button to add a product to cart, 
    and fetch products 
*/
console.log("src/pages/Home.tsx");

// import react and react-router-dom
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import api calls
import { fetchCategories } from '../api/productsAPI'; //get all product categories (navigation element)
import { fetchProducts } from '../api/productsAPI';   //get all products
import { fetchProductsByCategory } from '../api/productsAPI'; //filter list of products for a category
import { Product } from '../interfaces/Product'; // get product details

////////////////////////////////////
// import page components
////////////////////////////////////
// import Navbar from '../components/Navbar';
// import ProductList from '../components/ProductList';
// styling
//import './Home.css'; // Optional

const Home = () => {

  // const products is the state variable holding the list of products
  // setProducts sets the value of products
  // DONE: use the Product interface

  ////////////////////////////////////////////
  // CREATE USE STATE MONITORED VARIABLES
  ////////////////////////////////////////////
  const [products, setProducts] = useState<Product[]>([]); 
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]); 
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  ////////////////////////////////
  // Fetch products
  ////////////////////////////////
  useEffect(() => {


    const getProductsAndCategories = async () => {
      try {

        // fetched productData, fetched categoryData
        const [productData, categoryData] = await Promise.all([
          fetchProducts(), // Fetch product list
          fetchCategories() // Fetch category list
        ]);
        setProducts(productData);  
        setFilteredProducts(productData); // Initially show all products
        setCategories(categoryData); // 
      } catch (error) {
        console.error('Error fetching data:', error);
      }

    };
    // call products and categories
    getProductsAndCategories();
  }, []);

  
  //////////////////////////////////////////////////////
  // Get product records for selected category only
  // TODO: need to complete this route on the backend
  //////////////////////////////////////////////////////
  const filterByCategory = async (category: string) => {
    setSelectedCategory(category);
    if (category === '') {
      // Show all products when no category is selected
      setFilteredProducts(products);
    } else {
      try {
        // Fetch products for the selected category from the API
        const categoryProducts = await fetchProductsByCategory(category);
        setFilteredProducts(categoryProducts);
      } catch (error) {
        console.error(`Error fetching products for category ${category}:`, error);
      }
    }
  };


  ///////////////////////////////////////////////////
  // ## RETURN HTML
  ///////////////////////////////////////////////////
  // TODO: UPDATE button onClick to eventListeners
  return (
    <div className="home-container">
      {/* Navbar - show products by category. default to all */}
      <nav className="navbar">
        <ul>
          <li><button onClick={() => filterByCategory('')}>All</button></li>
          {categories.map((category) => (
            <li key={category}>
              <button onClick={() => filterByCategory(category)}>{category}</button>
            </li>
          ))}
        </ul>
      </nav>

      {/***************************/}
      {/*For each product, return a card*/}
      {/*<!-- PRODUCT CARD -->*/}
      {/***************************/}
      <hr>Product List</hr>
      <div className="product-list">
        {/* Render each product in the filtered list */}
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-item">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            {product.imageUrl && (
              <img src={product.imageUrl} alt={product.title} className="product-image" />
            )}
            {/* Link to the product details page */}
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;