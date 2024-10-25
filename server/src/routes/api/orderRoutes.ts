import express from 'express';
import { Request, Response } from 'express';
import { order } from '../../models/index';

const router = express.Router();


router.get('/', async (_req: Request, res: Response) => {
    try{
        const orders = await order.findAll();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error'});
    }
});

router.get('/:id', async (req: Request, res: Response) => {

     const { id } = req.params;

    try {
        const orderData = await order.findByPk{id};
        if (order) {
            res.status(200).json(order);
        } else {
            res.status(404).json({ error: 'productData not found' });
        } 
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/', async (req: Request, res: Response) => {
    try { 
        console.log (req.body)
        const newOrder = await order.create(req.body);
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error'});
    } 
});

export { router as orderRouter };