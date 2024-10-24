
import sequelize from '../config/connection';
import { initProduct } from './products';
import { customerInit } from './customers';
import { ordersInit } from './orders';
import { itemsInit } from './item';

const product = initProduct(sequelize);
const customer = customerInit(sequelize);
const item = itemsInit(sequelize);
const order = ordersInit(sequelize);


customer.hasMany(order, {
  onDelete: "CASCADE",
});

order.belongsTo(customer);

order.hasMany(item, {
  onDelete: "CASCADE",
});

item.belongsTo(order);

item.hasOne(product);

export { product, customer, item, order };