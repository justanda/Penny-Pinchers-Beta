import express from "express";
import { Request, Response } from "express";
import { order } from "../../models/index.js";

const router = express.Router();

//http:localhost:3001/api/orders
router.get("/", async (_req: Request, res: Response) => {
  try {
    const orders = await order.findAll();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//http:localhost:3001/api/orders/{id}
router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const orderData = await order.findByPk(id);
    if (orderData) {
      res.status(200).json(orderData);
    } else {
      res.status(404).json({ error: "orderData not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//http:localhost:3001/api/orders
router.post("/", async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const newOrder = await order.create(req.body);
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//http:localhost:3001/api/orders/{id}
router.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const { customerId, itemsId, shipped } = req.body;

  try {
    console.log(req.body);
    const orderIntel = await order.findByPk(id);
    if (orderIntel) {
      await orderIntel.update({
        customerId,
        itemsId,
        shipped,
      });
      res.status(200).json({ message: `orderIntel has been updated` });
    } else {
      res.status(404).json({ message: `orderIntel not found` });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

//http:localhost:3001/api/orders/{id}
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const orderData = await order.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!orderData) {
      res
        .status(404)
        .json({ message: "orderData with associated id was not found" });
      return;
    }
    res
      .status(200)
      .json({ message: "orderData with associated id has been deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
});

export { router as orderRouter };
