import express from 'express';
import { Request, Response } from 'express';
import { item } from '../../models/index';

const router = express.Router();


router.get('/', async (_req: Request, res: Response) => {
    try{
        const items = await item.findAll();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error'});
    }
});

router.get('/:id', async (req: Request, res: Response) => {

     const { id } = req.params;

    try {
        const itemInfo = await item.findByPk(id);
        if (itemInfo) {
            res.status(200).json(itemInfo);
        } else {
            res.status(404).json({ error: 'productData not found' });
        } 
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/', async (req: Request, res: Response) => {
    try { 
        console.log(req.body)
        const newItem = await item.create(req.body);
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error'});
    } 
});

export { router as itemRouter };