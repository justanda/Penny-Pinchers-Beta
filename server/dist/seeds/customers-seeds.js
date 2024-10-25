import { Customers } from "../models/customers.js";
export const seedCustomers = async () => {
    await Customers.bulkCreate([
        {
            username: "jpmorgan",
            name: "John Morganti",
            email: "jpmorgan@jpm.com",
            phone: 1234567890,
            address: "1234 Captain St",
            city: "New Hampshire",
            state: "NH",
            zip: 12345,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            username: "Dline",
            name: "Devon Oline",
            email: "dline@estes.com",
            phone: 2345678901,
            address: "5678 Main St",
            city: "Denver",
            state: "CO",
            zip: 23456,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            username: "Sethlin",
            name: "Seth Josln",
            email: " Sethlin@meat.com",
            phone: 3456789012,
            address: "91011 Side St",
            city: "Fairbanks",
            state: "AK",
            zip: 34567,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ]);
};
