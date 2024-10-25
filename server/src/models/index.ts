
import sequelize from '../config/connection';
import { initProduct } from './products';
import { customerInit } from './customers';
import { ordersInit } from './orders';
import { cartsInit } from './cart';

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