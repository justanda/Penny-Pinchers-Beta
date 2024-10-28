
// src/interfaces/Product.ts
// Define the Product interface for use in the frontend
export interface Product {
    id: number | null;
    title: string | null;
    price: number | null;
    description: string | null; 
    category: string | null;
    image: string | null;
    sku: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  }