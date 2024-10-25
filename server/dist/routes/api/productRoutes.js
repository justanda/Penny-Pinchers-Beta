import express from 'express';
import { product } from '../../models/index.js';
const router = express.Router();
//http:localhost:3001/api/products
router.get('/', async (_req, res) => {
    try {
        const products = await product.findAll();
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
//http:localhost:3001/api/products/{id}
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const productInfo = await product.findByPk(id);
        if (productInfo) {
            res.status(200).json(productInfo);
        }
        else {
            res.status(404).json({ error: 'productData not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
//http:localhost:3001/api/products
router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        const newProduct = await product.create(req.body);
        res.status(201).json(newProduct);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
//http:localhost:3001/api/products/{id}
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, price, description, category, image, sku } = req.body;
    try {
        console.log(req.body);
        const productIntel = await product.findByPk(id);
        if (productIntel) {
            await productIntel.update({
                title,
                price,
                description,
                category,
                image,
                sku
            });
            res.status(200).json({ message: `${name} has been succesfully update` });
        }
        else {
            res.status(404).json({ message: `Book not found` });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
//http:localhost:3001/api/products/{id}
router.delete('/:id', async (req, res) => {
    try {
        const productData = await product.destroy({
            where: {
                id: req.params.id
            },
        });
        if (!productData) {
            res.status(404).json({ message: 'Customer with associated id was not found' });
            return;
        }
        res.status(200).json(productData);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
export { router as productRouter };