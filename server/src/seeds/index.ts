import { seedOrders } from "./orders-seeds.js";
import { seedCarts } from "./carts-seed.js";
import { seedProducts } from "./product-seed.js";
import { seedCustomers } from "./customers-seeds.js";
import sequelize from "../config/connection.js";

const seedAll = async (): Promise<void> => {
  try {
    await sequelize.sync({ force: true });
    console.log("Database synced. Seeding data...");

    await seedCustomers();
    console.log("Customers seeded");

    await seedProducts();
    console.log("Products seeded");

    await seedCarts();
    console.log("Carts seeded");

    await seedOrders();
    console.log("Orders seeded");

    process.exit(0);
  } catch (error) {
    console.error("Error seeding data: ", error);
    process.exit(1);
  }
};

seedAll();
