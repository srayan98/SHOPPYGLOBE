import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({ 
  name: 'cart', //name of this newly created slice
  initialState: [], //Initially the state of this cart would be an empty array
  reducers: { 
    addToCart: (state, action) => { //Reducer function to add an item to the cart
      const existing = state.find((item) => item.id === action.payload.id);// Check if the item already exists in the cart based on its id
      if (existing) {
        existing.quantity += 1;// If the item is already in the cart, just increase the quantity by 1
      } else {
        state.push({ ...action.payload, quantity: 1 });// If it's a new item, add it to the cart with quantity set to 1
      }
    },
    removeFromCart: (state, action) => {// Reducer function to remove an item from the cart
      return state.filter((item) => item.id !== action.payload);// Filter method is utilised to filter out the item that matches the id passed in action.payload
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;