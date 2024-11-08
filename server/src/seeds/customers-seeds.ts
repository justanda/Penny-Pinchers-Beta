import { customer } from "../models/index.js";

export const seedCustomers = async () => {
  await customer.bulkCreate([
    {
      username: "jpmorgan",
      name: "John Morganti",
      email: "jpmorgan@jpm.com",
      password: "password",
      phone: "1234567890",
      address: "1234 Captain St",
      city: "New Hampshire",
      state: "NH",
      zip: 12345,
    },
    {
      username: "Dline",
      name: "Devon Oline",
      email: "dline@estes.com",
      password: "password",
      phone: "2345678901",
      address: "5678 Main St",
      city: "Denver",
      state: "CO",
      zip: 23456,
    },
    {
      username: "Sethlin",
      name: "Seth Josln",
      email: " Sethlin@meat.com",
      password: "password",
      phone: "3456789012",
      address: "91011 Side St",
      city: "Fairbanks",
      state: "AK",
      zip: 34567,
    },
  ]);
};
