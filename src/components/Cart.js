import React from 'react';
import ItemsonCart from './ItemsonCart'; // Import the ItemsonCart component
import '../components/Cart.css'; // Import the CSS file for styling
import '../components/button.css'; 
function Cart({ cart, removeFromCart, updateQuantity }) {
    return (
        <div>
            {/* Check if the cart has items */}
            {cart.length > 0 ? (
                // If cart has items, map through them and render ItemsonCart component for each item
                cart.map((item, index) => (
                    <ItemsonCart key={index} item={item} removeFromCart={removeFromCart} />
                ))
            ) : (
                // If cart is empty, display a message
                <p>Your cart is empty.</p>
            )}
        </div>
    );
}

export default Cart; // Export the Cart component
