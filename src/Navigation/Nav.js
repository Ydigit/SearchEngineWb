import React, { useState } from 'react';
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";
import Cart from '../components/Cart'; // ajuste este caminho para corresponder à estrutura do seu projeto
import Inventory from '../components/Inventory'; // Importe o componente Inventory aqui


const Nav = ({ handleInputChange, query, cartItems, cart, removeFromCart, updateQuantity, inventory }) => { // receive the props here
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isInventoryVisible, setIsInventoryVisible] = useState(false);

  function toggleCart() {
    setIsCartVisible(!isCartVisible);
  }

  function toggleInventory() {
    setIsInventoryVisible(!isInventoryVisible);
  }

  {isCartVisible && (
    <Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
  )}
  
  {isInventoryVisible && (
    <Inventory products={inventory} /> 
  )}

  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#" onClick={toggleCart}>
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        {isCartVisible && (
          <Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
        )}
        {isInventoryVisible && (
          <Inventory products={inventory} /> 
        )}
      </div>
    </nav>
  );
}

export default Nav;