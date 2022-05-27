export interface Product {
  name: string;
  price: number;
  category: number;
}

export interface Category {
  id: number;
  name: string;
}

export interface CategoryWithProducts {
  id: number;
  name: string;
  products: Array<Product>;
}
