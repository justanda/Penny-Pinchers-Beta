import sequelize from '../config/connection.js';
import { initProduct } from './products.js';
import { customerInit } from './customers.js';
import { ordersInit } from './orders.js';
import { cartsInit } from './cart.js';
const product = initProduct(sequelize);
const customer = customerInit(sequelize);
const cart = cartsInit(sequelize);
const order = ordersInit(sequelize);
customer.hasMany(order, {
    onDelete: "CASCADE",
});
order.belongsTo(customer);
order.hasMany(cart, {
    onDelete: "CASCADE",
});
cart.belongsTo(order);
cart.hasOne(product);
export { product, customer, cart, order };
