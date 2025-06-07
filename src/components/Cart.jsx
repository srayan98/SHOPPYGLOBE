import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem.jsx';
import "./Cart.css"

const Cart = () => {
  const cart = useSelector((state) => state.cart); // Get cart items from Redux store
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div className='cart-info'>
        <b>Items added to cart: </b>{totalItems} {/*Show the total number of items added to the cart*/}
      </div>
      {cart.length === 0 ? (
        <p>No items in cart</p>//Show this message if the cart is empty
      ) : (
        cart.map((item) => <CartItem key={item.id} item={item} />)// Render each item in the cart
      )}
      
    </div>
  );
};

export default Cart;
