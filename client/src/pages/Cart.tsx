// console.log("Begin Cart.tsx");

// // display a list of products added to a cart
// //

// import { useEffect, useState } from "react";
// import CartTable from "../components/CartTable";
// import { Item } from "../interfaces/Item"; // Import from the new Item interface
// //import './Cart.css'; // Optional styling

// const Cart = () => {
//   const [cartItems, setCartItems] = useState<Item[]>([]); // State to hold cart items
//   const [loading, setLoading] = useState<boolean>(true);

//   // Fetch cart items from the backend
//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const response = await fetch("/api/cart");
//         if (!response.ok) {
//           throw new Error("Failed to fetch cart items");
//         }
//         const data = await response.json();
//         setCartItems(data); // The data returned should be like this Item[]
//       } catch (error) {
//         console.error("Error fetching cart items:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCartItems();
//   }, []);

//   // Function to calculate the total price
//   const getTotalPrice = () => {
//     return cartItems.reduce((total, item) => total + item.itemTotal, 0);
//   };

//   if (loading) {
//     return <p>Loading cart items...</p>;
//   }

//   if (cartItems.length === 0) {
//     return (
//       <div className="cart-container">
//         <h1>Your Cart</h1>
//         <p>Your cart is empty.</p>
//         <a href="/">Continue Shopping</a>
//       </div>
//     );
//   }

//   return (
//     <div className="cart-container">
//       <h1>Your Cart</h1>
//       <CartTable cartItems={cartItems} getTotalPrice={getTotalPrice} />
//       <div className="cart-actions">
//         <a href="/checkout" className="checkout-button">
//           Proceed to Checkout
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Cart;
