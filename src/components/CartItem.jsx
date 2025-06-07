import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../utils/cartSlice.js';
import "./CartItem.css"

const CartItem = ({ item }) => {
  const dispatch = useDispatch(); //Returns the dispatch function from the redux store

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} />
      <h4>{item.title}</h4>
      <p>Qty: {item.quantity}</p>
      <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button> {/*Dispatch action to remove items from the cart on the click of this Remove button*/}
    </div>
  );
};

export default CartItem;