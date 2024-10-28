// a component to render the totals row for the cart

// import React from 'react';

interface CartTotalRowProps {
  totalPrice: number;  // Total price of all items in the cart
}

const CartTotalRow = ({ totalPrice }: CartTotalRowProps) => {

  // return html
  return (
    <tr className="total-row">
      <td colSpan={3}><strong>Total Price</strong></td>
      <td><strong>${totalPrice.toFixed(2)}</strong></td>
    </tr>
  );
};

export default CartTotalRow;
