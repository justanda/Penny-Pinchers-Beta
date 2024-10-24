import sequelize from '../config/connection';
import { initProduct } from './products';
import { customerInit } from './customers';
import { ordersInit } from './orders';
import { itemsInit } from './item';

const product = initProduct(sequelize);
const customer = customerInit(sequelize);
const item = itemsInit(sequelize);
const order = ordersInit(sequelize);

export { product, customer, item, order };

