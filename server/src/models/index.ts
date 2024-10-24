import sequelize from '../config/connection';
import { initProduct } from './products';

const product = initProduct(sequelize);


export { product };