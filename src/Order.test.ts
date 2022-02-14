import Cupom from "./Cupom";
import Order from "./Order";
import Product from "./Product";

test("Should run perfect the data", function () {
  const cupom: Cupom = new Cupom(1, 10);

  const productLG: Product = new Product(1, "TV", "TV 55 LG", 1000);
  const productSamsung: Product = new Product(2, "TV", "TV 70 Samsung", 1500);
  const productSony: Product = new Product(3, "TV", "TV 90 Sony", 2500);

  const order: Order = new Order(
    1,
    123456789,
    [productLG, productSamsung, productSony],
    "Primeira compra",
    3,
    5000
  );
  const orderWithCupom: Order = new Order(
    2,
    123456789,
    [productLG, productSamsung, productSony],
    "Segunda compra com desconto",
    3,
    5000,
    cupom
  );

  expect(order).toMatchObject({
    id: 1,
    cpf: 123456789,
    products: [
      {
        id: 1,
        name: "TV",
        description: "TV 55 LG",
        price: 1000,
      },
      {
        id: 2,
        name: "TV",
        description: "TV 70 Samsung",
        price: 1500,
      },
      {
        id: 3,
        name: "TV",
        description: "TV 90 Sony",
        price: 2500,
      },
    ],
    description: "Primeira compra",
    quantity: 3,
    price: 5000,
    cupom: undefined,
  });

  expect(orderWithCupom).toMatchObject({
    id: 2,
    cpf: 123456789,
    products: [
      {
        id: 1,
        name: "TV",
        description: "TV 55 LG",
        price: 1000,
      },
      {
        id: 2,
        name: "TV",
        description: "TV 70 Samsung",
        price: 1500,
      },
      {
        id: 3,
        name: "TV",
        description: "TV 90 Sony",
        price: 2500,
      },
    ],
    description: "Segunda compra com desconto",
    quantity: 3,
    price: 5000,
    cupom: { id: 1, percentage: 10 },
  });

  expect(order.calculateQuantity()).toBe(3);
  expect(orderWithCupom.calculateQuantity()).toBe(3);

  expect(order.calculatePrice()).toBe(5000);
  expect(orderWithCupom.calculatePrice()).toBe(4500);
});
