import express from 'express';
import { productRouter } from './productRoutes';
import { customerRouter } from './customerRoutes';
import { itemRouter } from './itemRoutes';
import { orderRouter } from './orderRoutes';

const router = express.Router();

// TODO: make updates & deletes in the various Routes files

//http:localhost:3001/api/products
router.use('/products', productRouter);

//http:localhost:3001/api/customers
router.use('/customers', customerRouter);

//http:localhost:3001/api/items
router.use('/items', itemRouter);

//http:localhost:3001/api/orders
router.use('/orders', orderRouter);

export default router;