import apiRoutes from "./api/index.js";
import express from "express";
import { authenticateToken } from "../middleware/auth.js";
import authRoutes from "./authRoutes.js";

const router = express.Router();

//http:localhost:3001/api
router.use("/auth", authRoutes);

router.use("/api", authenticateToken, apiRoutes);

export default router;
