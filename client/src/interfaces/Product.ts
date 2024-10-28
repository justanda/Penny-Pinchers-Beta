
// src/interfaces/Product.ts
// Define the Product interface for use in the frontend
export interface Product {
    id ?: number;
    title: string;
    description: string; 
    category: string;
    price: number;
    additional?: string;
    imageUrl ?: string;
    sku: string;
  }