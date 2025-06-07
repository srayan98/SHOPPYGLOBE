import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice.js';
import cartReducer from './cartSlice.js';

export default configureStore({ // This store combines the reducers for products and cart
  reducer: {
    products: productReducer,// 'products' key will be managed by productReducer
    cart: cartReducer, //  // 'cart' key will be managed by cartReducer
  },
});