export interface Order {
  id: string;
  customerName: string;
  orderDate: Date;
  items: string[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
}
