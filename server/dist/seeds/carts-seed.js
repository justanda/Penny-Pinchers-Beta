import { Carts } from "../models/cart.js";
export const seedCarts = async () => {
    await Carts.bulkCreate([
        { productId: 4, orderId: 4 },
        { productId: 5, orderId: 5 },
        { productId: 6, orderId: 6 },
    ]);
};
