import {customer} from './customer';

export const seedcustomer = async () => {
  await customer.create({
    name: 'John Morganti',
    email: 'morganti.john@gmail.com',