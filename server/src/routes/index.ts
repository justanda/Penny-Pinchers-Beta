import apiRoutes from './api/index';
import express from 'express';

const router = express.Router();

//http:localhost:3001/api
router.use('/api', apiRoutes);

export default router;