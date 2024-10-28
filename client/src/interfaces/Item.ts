

// 
import { Product } from './Product';

// Interface for a single item in the cart
export interface Item {
  product: Product;
  quantity: number;
  unitPrice: number;
  itemTotal: number; // Item total = quantity * unitPrice
}