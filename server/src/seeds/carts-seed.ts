import { cart } from "../models/index.js";

export const seedCarts = async () => {
  await cart.bulkCreate([
    { productId: 4, orderId: 4 },
    { productId: 5, orderId: 5 },
    { productId: 6, orderId: 6 },
  ]);
};
