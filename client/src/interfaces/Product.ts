export interface Product {
  id: number | null;
  title: string;
  price: number | null;
  description: string | null;
  category: string | null;
  image: string | null;
  sku: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
}
