import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../utils/cartSlice.js';
import "./ProductItem.css"

const ProductItem = ({ product }) => {
  const dispatch = useDispatch(); //Get dispatch function

  return ( 
    <div className="product-item">
      <img src={product.thumbnail} alt={product.title} />{/*To showcase the product thumbnail image*/}
      <h3>{product.title}</h3>{/*To showcase the product title*/}
      <p>${product.price}</p>{/*To showcase price of the product*/}
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button> {/*Handling the Add to Cart action via this button*/}
      <br />
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
};

export default ProductItem;