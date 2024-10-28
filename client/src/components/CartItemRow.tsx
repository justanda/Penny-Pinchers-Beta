
//a component to render a row of the cart

//import React from 'react';
import { Item } from '../interfaces/Item';  // Importing the Item interface

// TODO: UNDERSTAND
// TODO: EVALUATE
interface CartItemRowProps {
  item: Item;  // The item to be displayed in the row
}


const CartItemRow = ({ item }: CartItemRowProps) => {


    // return html
  return (
    <tr>
      <td>{item.product.title}</td>
      <td>${item.unitPrice.toFixed(2)}</td> 
      <td>{item.quantity}</td>  
      <td>${item.itemTotal.toFixed(2)}</td> 
    </tr>
  );
};

export default CartItemRow;
