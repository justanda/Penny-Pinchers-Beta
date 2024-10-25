import { product } from "../models/products";

export const seedProducts = async () => {
  await product.bulkCreate([
    {
      title: "Smoked Sausage (Hot, Med, Mild)",
      price: 4.39,
      description: 'tasty',
      category: 'smoke link',
      image: 'derp',
      sku: 'jmsausage'
    },
    {
      title: "Smoked Sausage (Jalapeño Only)",
      price: 4.49,
      
    },
    {
      title: "Smoked Sausage (Cheddar or Pepper Jack)",
      price: 4.69,
      
    },
    {
      title: "Smoked Sausage (Jalapeño/Cheese)",
      price: 4.99,
     
    },
    {
      title: "Italian and Fresh Sausage",
      price: 4.19,
     
    },
    {
      title: "Pan Sausage (Regular or Hot)",
      price: 4.09,
     
    },
    {
      title: "Summer Sausage (Regular)",
      price: 4.49,
     
    },
    {
      title: "Summer Sausage (Jalapeño/Cheese)",
      price: 4.99,
      
    },
    {
      title: "Dry Stix",
      price: 6.89,
    
    },
  ]);
};
