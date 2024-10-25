import { Carts } from "../models/cart";

export const seedItems = async () => {
  await Carts.bulkCreate([
    { productId: 4, orderId: 4 },
    { productId: 5, orderId: 5 },
    { productId: 6, orderId: 6 },
  ]);
};
