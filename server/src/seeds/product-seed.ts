import { initProducts } from "../models/products";

export const seedProducts = async () => {
  await initProducts.bulkCreate([
    {
      name: "Smoked Sausage (Hot, Med, Mild)",
      price: 4.39,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Smoked Sausage (Jalapeño Only)",
      price: 4.49,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Smoked Sausage (Cheddar or Pepper Jack)",
      price: 4.69,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Smoked Sausage (Jalapeño/Cheese)",
      price: 4.99,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Italian and Fresh Sausage",
      price: 4.19,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Pan Sausage (Regular or Hot)",
      price: 4.09,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Summer Sausage (Regular)",
      price: 4.49,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Summer Sausage (Jalapeño/Cheese)",
      price: 4.99,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Dry Stix",
      price: 6.89,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
};
