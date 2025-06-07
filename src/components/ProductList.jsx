import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';//Importing redux hooks
import { fetchProducts } from '../utils/productSlice'; //Import action to fetch products
import ProductItem from './ProductItem';
import "./ProductList.css"

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products); // Accessing products, status, and error from the Redux store. State.products refers to the products key registered in store.js

  // Fetch products when component mounts
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Display loading or error message
  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  // Render the product list
  return (
    <div className="product-list">
      {items.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
