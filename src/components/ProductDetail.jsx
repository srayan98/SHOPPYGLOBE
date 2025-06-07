import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; //Import hook to get URL params
import "./ProductDetail.css"

const ProductDetail = () => {
  const { id } = useParams(); //Get product id from the root
  const [product, setProduct] = useState(null); //State to store product details
  const [error, setError] = useState(null); //State to showcase error

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`) //Fetch the product
      .then((res) => res.json()) 
      .then(setProduct)
      .catch(() => setError('Failed to load product'));//Set error message
  }, [id]);

  if (error) return <p>{error}</p>; //Show error text
  if (!product) return <p>Loading...</p>; //Show loading text

  return (
    <div className="product-detail">
      <img src={product.thumbnail} alt={product.title}/>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p><b>Price: </b> ${product.price}</p>
    </div>
  );
};

export default ProductDetail;