import express from "express";
import { Request, Response } from "express";
import { customer } from "../../models/index.js";

const router = express.Router();

// Route to get all customers without password
// http://localhost:3001/api/customers
router.get("/", async (_req: Request, res: Response) => {
  try {
    const customers = await customer.findAll({
      attributes: { exclude: ["password"] },
    });
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to get customer by id
// http://localhost:3001/api/customers/{id}
router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const customerInfo = await customer.findByPk(id, {
      attributes: { exclude: ["password"] },
    });
    if (customerInfo) {
      res.status(200).json(customerInfo);
    } else {
      res.status(404).json({ error: "Customer not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to create a new customer
// http://localhost:3001/api/customers
router.post("/", async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const newCustomer = await customer.create(req.body);
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to update customer by id
// http://localhost:3001/api/customers/{id}
router.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { username, name, email, phone, address, city, state, zip } = req.body;

  try {
    console.log(req.body);
    const customerIntel = await customer.findByPk(id);
    if (customerIntel) {
      await customerIntel.update({
        username,
        name,
        email,
        phone,
        address,
        city,
        state,
        zip,
      });
      res
        .status(200)
        .json({ message: "Customer information has been updated" });
    } else {
      res.status(404).json({ message: "Customer not found" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// Route to delete customer by id
// http://localhost:3001/api/customers/{id}
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const customerData = await customer.destroy({
      where: { id: req.params.id },
    });

    if (!customerData) {
      res
        .status(404)
        .json({ message: "Customer with the specified ID was not found" });
      return;
    }
    res.status(200).json({ message: "Customer has been deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
});

export { router as customerRouter };
