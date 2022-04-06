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
  name: string;
  products: Array<Product>;
}
