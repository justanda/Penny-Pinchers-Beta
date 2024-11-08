import { product } from "../models/index.js";
export const seedProducts = async () => {
  await product.bulkCreate([
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
      description: "Summer sausage with jalapeño and cheese for added flavor.",
      category: "smoked",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrjEv4zXtxwwNG10e5GwCxDZpHR-loDnVwoA&s",
      sku: "SS-JCSUM-008",
    },
  ]);
};
