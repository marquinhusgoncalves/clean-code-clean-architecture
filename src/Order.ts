import Product from "./Product";
import Cupom from "./cupom";

export default class Order {
  id: number;
  cpf: number;
  products: Array<Product>;
  description: string;
  quantity: number;
  price: number;
  cupom?: Cupom;

  constructor(
    id: number,
    cpf: number,
    products: Array<Product>,
    description: string,
    quantity: number,
    price: number,
    cupom?: Cupom
  ) {
    this.id = id;
    this.cpf = cpf;
    this.products = products;
    this.description = description;
    this.quantity = quantity;
    this.price = price;
    this.cupom = cupom;
  }

  validateCpf() {
    return this.cpf;
  }

  calculateQuantity() {
    return this.products.length;
  }

  calculatePrice() {
    return this.cupom
      ? this.price * ((100 - this.cupom.percentage) / 100)
      : this.price;
  }
}
