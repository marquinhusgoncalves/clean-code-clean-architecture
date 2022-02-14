import Product from "./Product";

test("Should run perfect the data", function () {
  const productLG: Product = new Product(1, "TV", "TV 55 LG", 1000);
  const productSamsung: Product = new Product(2, "TV", "TV 70 Samsung", 1500);

  expect(productLG).toMatchObject({
    id: 1,
    name: "TV",
    description: "TV 55 LG",
    price: 1000,
  });

  expect(productSamsung).toMatchObject({
    id: 2,
    name: "TV",
    description: "TV 70 Samsung",
    price: 1500,
  });
});
