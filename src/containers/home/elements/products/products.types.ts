export interface IProduct {
  id: number;
  created_at: string;
  title: string;
  description: string;
  price: number;
  category: string | null;
  specification: string;
  order: string;
  images: string[];
}
