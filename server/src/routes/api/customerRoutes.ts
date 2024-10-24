import express from 'express';
import { Request, Response } from 'express';
import { customer } from '../../models/index';

const router = express.Router();


router.get('/', async (_req: Request, res: Response) => {
    try{
        const customers = await customer.findAll();
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error'});
    }
});

router.get('/:id', async (req: Request, res: Response) => {

     const { id } = req.params;

    try {
        const customerInfo = await customer.findByPk(id);
        if (customerInfo) {
            res.status(200).json(customerInfo);
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
        const newCustomer = await customer.create(req.body);
        res.status(201).json(newCustomer);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error'});
    } 
});

router.put('/:id', async (req: Request, res: Response) => {

    const { id } = req.params;
    
    const { name, email, phone, address, city , state, zip} = req.body;

    try {
        console.log(req.body)
        const [customerRows] = await customer.update(id, name, email, phone, address, city , state, zip);

        if (customerRows === 0) {
            return res.status(400).json({ message: `Customer not found or no changes made`})
        }

        const updatedCustomer = await customer.findByPk(id);
        res.status(200).json(updatedCustomer);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const customerData = await customer.destroy({
            where: {
                id: req.params.id
            },
        });
    
        if (!customerData) {
            res.status(404).json({ message: 'Customer with associated id was not found'});
            return;
        }
        res.status(200).json(customerData);
    } catch (error) {
        res.status(500).json(error);
    }
});

export { router as customerRouter };