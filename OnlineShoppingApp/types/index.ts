export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  image_url?: string;
}

export interface CartItem {
  id: number;
  product_id: number;
  quantity: number;
  product_name?: string;
  product_price?: number;
}

export interface Order {
  id: number;
  total_amount: number;
  vat_amount: number;
  final_amount: number;
  created_at: string;
}

export interface OrderItem {
  id: number;
  order_id: number;
  product_id: number;
  product_name: string;
  price: number;
  quantity: number;
  subtotal: number;
}