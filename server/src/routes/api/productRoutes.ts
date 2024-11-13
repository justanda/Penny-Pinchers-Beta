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

router.post("/seeds", async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const newProducts = await product.bulkCreate([
      {
        title: "Smoked Sausage (Hot, Med, Mild)",
        price: 4.39,
        description:
          "A variety of smoked sausage available in hot, medium, or mild flavors.",
        category: "smoked",
        image:
          "https://m.media-amazon.com/images/I/41FebVLyzRL._SX300_SY300_QL70_FMwebp_.jpg",
        sku: "SS-HMM-001",
      },
      {
        title: "Smoked Sausage (Jalapeño Only)",
        price: 4.49,
        description: "Smoked sausage with jalapeño for an added kick.",
        category: "smoked",
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQTqdEftE2at4fY12oeCnQtPat2wkLzFs3pjV2WYlxINO-mkreiHL_igb8Dgr5KRDUM8MKCrBSXNcezi3lrpyWYo3skI7Q5HS79mWijpeM&usqp=CAc",
        sku: "SS-JAL-002",
      },
      {
        title: "Smoked Sausage (Cheddar or Pepper Jack)",
        price: 4.69,
        description:
          "Smoked sausage with your choice of cheddar or pepper jack cheese.",
        category: "smoked",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBTWdFtZeGNrCvvOrI-awBtslPjPhE2DKjcw&s",
        sku: "SS-CPJ-003",
      },
      {
        title: "Smoked Sausage (Jalapeño/Cheese)",
        price: 4.99,
        description: "A blend of jalapeño and cheese in smoked sausage.",
        category: "smoked",
        image:
          "https://southsidemarket.com/cdn/shop/products/JalapenoCheddarSmokedSausage-Sliced_c3804356-5d23-4791-a25c-235805d076a8.jpg?v=1628279617&width=990",
        sku: "SS-JC-004",
      },
      {
        title: "Italian and Fresh Sausage",
        price: 4.19,
        description: "Classic Italian and fresh sausage for versatile use.",
        category: "fresh",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSivdfH6zQ-PA8-TzqiT33DupxZWtH4BVpzGw&s",
        sku: "FS-ITAL-005",
      },
      {
        title: "Pan Sausage (Regular or Hot)",
        price: 4.09,
        description: "Fresh pan sausage available in regular or hot.",
        category: "fresh",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7TuAhBehb4eDLc8rPzcB_MNoe652Z-PA2AA&s",
        sku: "FS-PAN-006",
      },
      {
        title: "Summer Sausage (Regular)",
        price: 4.49,
        description: "Traditional summer sausage with a rich, smoky flavor.",
        category: "smoked",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtwCnIF54fWjASHKM_1HL18b0c0iCYMyR9cw&s",
        sku: "SS-SUM-007",
      },
      {
        title: "Summer Sausage (Jalapeño/Cheese)",
        price: 4.99,
        description:
          "Summer sausage with jalapeño and cheese for added flavor.",
        category: "smoked",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrjEv4zXtxwwNG10e5GwCxDZpHR-loDnVwoA&s",
        sku: "SS-JCSUM-008",
      },
    ]);
    res.status(201).json(newProducts);
  } catch (error) {
    res.status(500).json(error);
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
