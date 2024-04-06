import React, { useState } from 'react';
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";
import Cart from '../components/Cart'; // Adjust this path to match your project structure
import Inventory from '../components/Inventory'; // Import the Inventory component here


// Nav component receives several props for handling input change, query, cart items, cart, removing from cart, updating quantity, and inventory
const Nav = ({ handleInputChange, query, cartItems, cart, removeFromCart, updateQuantity, inventory }) => {
  // State for toggling cart visibility
  const [isCartVisible, setIsCartVisible] = useState(false);
  // State for toggling inventory visibility
  const [isInventoryVisible, setIsInventoryVisible] = useState(false);

  // Function to toggle cart visibility
  function toggleCart() {
    setIsCartVisible(!isCartVisible);
  }

  // Function to toggle inventory visibility
  function toggleInventory() {
    setIsInventoryVisible(!isInventoryVisible);
  }

  // Render Cart component if cart visibility is true
  {isCartVisible && (
    <Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
  )}
  
  // Render Inventory component if inventory visibility is true
  {isInventoryVisible && (
    <Inventory products={inventory} /> 
  )}

  return (
    <nav>
      <div className="nav-container">
        {/* Input field for searching shoes */}
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">
        {/* Link to favorites */}
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        {/* Link to toggle cart visibility */}
        <a href="#" onClick={toggleCart}>
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        {/* Render Cart component if cart visibility is true */}
        {isCartVisible && (
          <Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
        )}
        {/* Render Inventory component if inventory visibility is true */}
        {isInventoryVisible && (
          <Inventory products={inventory} /> 
        )}
      </div>
    </nav>
  );
}

export default Nav; // Export the Nav component
