import { Router, Request, Response, RequestHandler } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Customers } from "../models/customers"; // Adjust the import path as necessary

const router = Router();

const loginRoute: RequestHandler = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  const { username, password } = req.body;

  try {
    const user = await Customers.findOne({ where: { username } });

    if (!user) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    const secretKey = process.env.JWT_SECRET_KEY || "";

    const token = jwt.sign({ username }, secretKey, { expiresIn: "3h" });
    return res.json({ token });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

router.post("/login", loginRoute);

export default router;
