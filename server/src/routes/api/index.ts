import express from 'express';
import { productRouter } from './productRoutes';
import { customerRouter } from './customerRoutes';
import { cartRouter } from './cartRoutes';
import { orderRouter } from './orderRoutes';

const router = express.Router();

//http:localhost:3001/api/products
router.use('/products', productRouter);

//http:localhost:3001/api/customers
router.use('/customers', customerRouter);

//http:localhost:3001/api/carts
router.use('/carts', cartRouter);

//http:localhost:3001/api/orders
router.use('/orders', orderRouter);

export default router;