export interface Cupom {
  id: number;
  percentage: number;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface Order {
  id: number;
  cpf: number;
  products: Array<Product>;
  description: string;
  quantity: number;
  price: number;
  cupom?: Cupom;
}
