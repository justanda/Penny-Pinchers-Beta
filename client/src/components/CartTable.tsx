// a component to render a cart table 
// generate the total price in the cart

// import React from 'react';
import CartItemRow from './CartItemRow';
import CartTotalRow from './CartTotalRow';
import { Item } from '../interfaces/Item'; 


interface CartTableProps {
  cartItems: Item[];
  getTotalPrice: () => number;
}

const CartTable = ({ cartItems, getTotalPrice }: CartTableProps) => {



  // Render the values for each item in the cart    
  // Create an html table to display the items in the cart
  return (
    <table className="cart-table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Unit Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item: Item) => (
          <CartItemRow key={item.product.id} item={item} />
        ))}
        <CartTotalRow totalPrice={getTotalPrice()} />
      </tbody>
    </table>
  );
};

export default CartTable;