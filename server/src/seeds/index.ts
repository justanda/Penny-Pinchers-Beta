import { seedOrders } from "./orders-seeds";
import { seedItems } from "../seeds/carts-seed";
import { seedProducts } from "../seeds/product-seed";
import { seedCustomers } from "./customers-seeds";
import sequelize from "../config/connection";

const seedAll = async (): Promise<void> => {
  try {
    await sequelize.sync({ force: true });
    console.log("Database synced. Seeding data...");

    await seedCustomers();
    console.log("Customers seeded");

    await seedProducts();
    console.log("Products seeded");

    await seedItems();
    console.log("Items seeded");

    await seedOrders();
    console.log("Orders seeded");

    process.exit(0);
  } catch (error) {
    console.error("Error seeding data: ", error);
  }
};

seedAll();
