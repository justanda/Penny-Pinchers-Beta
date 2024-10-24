import sequelize from '../config/connection';
import { initProduct } from './products';
import {customer} from './customer';

const product = initProduct(sequelize);


export { product };

