import express from "express";
import { productRouter } from "./productRoutes.js";
import { customerRouter } from "./customerRoutes.js";
import { cartRouter } from "./cartRoutes.js";
import { orderRouter } from "./orderRoutes.js";

const router = express.Router();

//http:localhost:3001/api/products
router.use("/products", productRouter);

//http:localhost:3001/api/customers
router.use("/customers", customerRouter);

//http:localhost:3001/api/carts
router.use("/carts", cartRouter);

//http:localhost:3001/api/orders
router.use("/orders", orderRouter);

export default router;
