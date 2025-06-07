import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';// Import tools from Redux Toolkit to help with creating a slice and handling async code

export const fetchProducts = createAsyncThunk( // This function helps us get product data from the dummyjson API and runs in the background when we need to fetch product info
  'products/fetchProducts',
  async () => {
    const response = await fetch('https://dummyjson.com/products'); // We call the API and wait for the response
    const data = await response.json(); // Convert the raw response into JSON (JavaScript object)
    return data.products; // Return only the products part of the data
  }
);

// This is the main slice that will handle all product-related state and logic
const productSlice = createSlice({
  name: 'products',

 
  initialState: {  // This is our initial state before any product is loaded
    items: [],       // This will store the list of products
    status: 'idle',  // 'idle' means nothing is happening yet
    error: null      // If something goes wrong, we'll store the error message here
  },

  // These are extra reducers to handle async actions like fetchProducts
  extraReducers: (builder) => {
    builder
      // While the data is being fetched, set the status to 'loading'
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })

      // If the data fetch was successful, set status to 'succeeded' and store the data
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload; // Save the list of products
      })

      // If something went wrong while fetching, set status to 'failed' and save the error
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default productSlice.reducer;
