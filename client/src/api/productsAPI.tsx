// src/api pages execute functions that request data from Express
// async / await
// execute fetch functions to get data from Express


console.log("src/api/productApi.ts");
import { Product } from '../interfaces/Product'; 

//http:localhost:3001/api/products
const API_BASE_URL = '/api/products'; // get all products
//http:localhost:3001/api/products/{id}
const API_PRODUCT_CATEGORIES_URL = '/api/products/categories';

////////////////////////////////////////////////////
//  Fetch all products from the backend.
//  returns an array of products
//  TODO: VERIFY ROUTE
//  --- /api/products
////////////////////////////////////////////////////
const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(API_BASE_URL);
  if (!response.ok) {
    throw new Error('Oops! I failed to get products');
  }
  return response.json();
};

/////////////////////////////////////////
// Fetch a single product by its ID.
// TODO: VERIFY ROUTE 
// --- /api/products/{id}
/////////////////////////////////////////
//http:localhost:3001/api/products/{id}
const fetchProductById = async (id: number): Promise<Product> => {
  const response = await fetch(`${API_BASE_URL}/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch product with Id: ${id}`);
  }
  return response.json();
};

/////////////////////////////////////////
// Fetch products by category
// TODO: DETERMINE HOW TO PASS QUERYSTRING PARAMS
// TODO: VERIFY ROUTE
// --- /api/products/category
/////////////////////////////////////////
const fetchProductsByCategory = async (category: string): Promise<Product> => {
    // api/products/category
    const response = await fetch(`${API_BASE_URL}/${category}`);
    if (!response.ok) {
      throw new Error(`Failed to get products for category: ${category}`);
    }
    return response.json();
  };


/////////////////////////////////////////
// Fetch the product categories
// used in site navigation
/////////////////////////////////////////
const fetchCategories = async (): Promise<string[]> => {
    const response = await fetch(`${API_PRODUCT_CATEGORIES_URL}`);
    if (!response.ok) {
      throw new Error('Oops! I failed to get the product categories');
    }
    return response.json();
  };


  export { fetchProducts, fetchProductById, fetchProductsByCategory, fetchCategories }