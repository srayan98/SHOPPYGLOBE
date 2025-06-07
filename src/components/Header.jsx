import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./Header.css"

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0); //Utilising reduce method to generate the total number of items added in the cart

  return (
    <header className='header'>
      <h2><i>SHOPPY</i><em>GLOBE</em></h2> {/*Customising the App logo design*/}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({totalItems})</Link>
      </nav>
    </header>
  );
};

export default Header;
