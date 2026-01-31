import { mockProducts } from "@/lib/mockData";

export interface Product {
  id: number;
  category_id: number;
  title: string;
  value: number;
  description: string;
  is_popular: boolean;
  picture_url: string;
  created_at: string;
  updated_at: string;
}

export function getProductsByCategory(id:number): Product[] {
  const products = mockProducts.filter(product => product.category_id == id);
  return products;
}
