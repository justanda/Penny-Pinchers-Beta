import { order } from "../models/index.js";

export const seedOrders = async () => {
  await order.bulkCreate([
    {
      customerId: 1,
      itemsId: 1,
      shipped: false,
    },
    {
      customerId: 2,
      itemsId: 2,
      shipped: false,
    },
    {
      customerId: 3,
      itemsId: 3,
      shipped: false,
    },
  ]);
};
