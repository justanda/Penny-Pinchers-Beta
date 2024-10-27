import { product } from "../models/products.js";
export const seedProducts = async () => {
    await product.bulkCreate([
        {
            title: "Smoked Sausage (Hot, Med, Mild)",
            price: 4.39,
            description: "A variety of smoked sausage available in hot, medium, or mild flavors.",
            category: "smoked",
            image: "url_to_image_1",
            sku: "SS-HMM-001",
        },
        {
            title: "Smoked Sausage (Jalapeño Only)",
            price: 4.49,
            description: "Smoked sausage with jalapeño for an added kick.",
            category: "smoked",
            image: "url_to_image_2",
            sku: "SS-JAL-002",
        },
        {
            title: "Smoked Sausage (Cheddar or Pepper Jack)",
            price: 4.69,
            description: "Smoked sausage with your choice of cheddar or pepper jack cheese.",
            category: "smoked",
            image: "url_to_image_3",
            sku: "SS-CPJ-003",
        },
        {
            title: "Smoked Sausage (Jalapeño/Cheese)",
            price: 4.99,
            description: "A blend of jalapeño and cheese in smoked sausage.",
            category: "smoked",
            image: "url_to_image_4",
            sku: "SS-JC-004",
        },
        {
            title: "Italian and Fresh Sausage",
            price: 4.19,
            description: "Classic Italian and fresh sausage for versatile use.",
            category: "fresh",
            image: "url_to_image_5",
            sku: "FS-ITAL-005",
        },
        {
            title: "Pan Sausage (Regular or Hot)",
            price: 4.09,
            description: "Fresh pan sausage available in regular or hot.",
            category: "fresh",
            image: "url_to_image_6",
            sku: "FS-PAN-006",
        },
        {
            title: "Summer Sausage (Regular)",
            price: 4.49,
            description: "Traditional summer sausage with a rich, smoky flavor.",
            category: "smoked",
            image: "url_to_image_7",
            sku: "SS-SUM-007",
        },
        {
            title: "Summer Sausage (Jalapeño/Cheese)",
            price: 4.99,
            description: "Summer sausage with jalapeño and cheese for added flavor.",
            category: "smoked",
            image: "url_to_image_8",
            sku: "SS-JCSUM-008",
        },
    ]);
};
