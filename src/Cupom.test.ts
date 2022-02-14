import Cupom from "./Cupom";

test("Should run perfect the data", function () {
  const cupom: Cupom = new Cupom(1, 10);
  expect(cupom).toMatchObject({ id: 1, percentage: 10 });
});
