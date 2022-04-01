export interface Product {
  name: string;
  price: number;
}

export interface Category {
  name: string;
  products: Array<Product>;
}
