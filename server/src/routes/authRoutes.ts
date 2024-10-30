// import { Router, Request, Response } from 'express';
// import { Customers } from '../models/customers';
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcrypt';

// export const login = async (req: Request, res: Response) => {
//     const { username, password } = req.body;

//     const user = await Customers.findOne({
//         where: { username },
//     });

//     if (!user) {
//         return res.status(401).json({ message: 'Authentication failed' });
//     }

//     const passwordIsValid = await bcrypt.compare(password, user.password);
//     if (!passwordIsValid) {
//         return res.status(401).json({ message: 'Authentication failed' });
//     }

//     const secretKey = process.env.JWT_SECRET_KEY || '';

//     const token = jwt.sign({ username }, secretKey, { expiresIn: '3h' });
//     return res.json({ token });
// }

// const router = Router();



// router.post('/login', login);

// export default router;