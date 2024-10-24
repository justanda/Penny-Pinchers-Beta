import sequelize from "../config/connection";
import { initProduct } from "./products";
import { customerInit } from "./customers";
import { ordersInit } from "./orders";
import { itemsInit } from "./items";

const Product = initProduct(sequelize);
const Customer = customerInit(sequelize);
const Orders = ordersInit(sequelize);
const Items = itemsInit(sequelize);

Customer.hasMany(Orders, {
  onDelete: "CASCADE",
});

Orders.belongsTo(Customer);

Orders.hasMany(Items, {
  onDelete: "CASCADE",
});

Items.belongsTo(Orders);

Items.hasOne(Product);
