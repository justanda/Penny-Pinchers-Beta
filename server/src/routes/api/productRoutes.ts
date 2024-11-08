import express from "express";
import { Request, Response } from "express";
import { product } from "../../models/index.js";

const router = express.Router();

//http:localhost:3001/api/products
router.get("/", async (_req: Request, res: Response) => {
  try {
    const products = await product.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//http:localhost:3001/api/products/{id}
router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const productInfo = await product.findByPk(id);
    if (productInfo) {
      res.status(200).json(productInfo);
    } else {
      res.status(404).json({ error: "productInfo not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//http:localhost:3001/api/products/{category}
router.get("/category/:category", async (req: Request, res: Response) => {
  const selectedCategory = req.params.category;
  console.log(selectedCategory);
  try {
    const productCategory = await product.findAll({
      where: {
        category: selectedCategory,
      },
    });

    if (productCategory) {
      res.status(200).json(productCategory);
    } else {
      res.status(404).json({ error: "productCategory not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//http:localhost:3001/api/products
router.post("/", async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const newProduct = await product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//http:localhost:3001/api/products/{id}
router.put("/:id", async (req: Request, res: Response) => {
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
        sku,
      });
      res.status(200).json({ message: `productIntel has been updated` });
    } else {
      res.status(404).json({ message: `Book not found` });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

//http:localhost:3001/api/products/{id}
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const productData = await product.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!productData) {
      res
        .status(404)
        .json({ message: "productData with associated id was not found" });
      return;
    }
    res
      .status(200)
      .json({ message: "productData with associated id has been deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
});

export { router as productRouter };
