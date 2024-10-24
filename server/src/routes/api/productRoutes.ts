import express from 'express';
import { Request, Response } from 'express';
import { product } from '../../models/index';

const router = express.Router();


router.get('/', async (_req: Request, res: Response) => {
    try{
        const products = await product.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error'});
    }
});

router.get('/:id', async (req: Request, res: Response) => {

    const { id } = req.params

    try {
        const productData = await product.findByPk{id};
        if (product) {
            res.status(200).json(product);
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
        const newProduct = await product.create(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error'});
    } 
});

export { router as productRouter };
