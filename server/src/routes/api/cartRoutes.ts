import express from "express";
import { Request, Response } from "express";
import { cart } from "../../models/index.js";

const router = express.Router();

//http:localhost:3001/api/carts
router.get("/", async (_req: Request, res: Response) => {
  try {
    const carts = await cart.findAll();
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//http:localhost:3001/api/carts/{id}
router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const cartInfo = await cart.findByPk(id);
    if (cartInfo) {
      res.status(200).json(cartInfo);
    } else {
      res.status(404).json({ error: "cartData not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//http:localhost:3001/api/carts
router.post("/", async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const newcart = await cart.create(req.body);
    res.status(201).json(newcart);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//http:localhost:3001/api/carts/{id}
router.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const { productId, orderId } = req.body;

  try {
    console.log(req.body);
    const cartIntel = await cart.findByPk(id);
    if (cartIntel) {
      await cartIntel.update({
        productId,
        orderId,
      });
      res.status(200).json({ message: `cartIntel has been updated` });
    } else {
      res.status(404).json({ message: `cartIntel not found` });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

//http:localhost:3001/api/carts/{id}
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const cartData = await cart.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!cartData) {
      res
        .status(404)
        .json({ message: "cartData with associated id was not found" });
      return;
    }
    res
      .status(200)
      .json({ message: "cartData with associated id has been deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
});

export { router as cartRouter };
