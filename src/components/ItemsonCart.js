/**
 * Component representing an item in the shopping cart.
 * @param {Object} props - The props object containing item and removeFromCart function.
 * @param {Object} props.item - The item object representing the product in the cart.
 * @param {Function} props.removeFromCart - The function to remove the item from the cart.
 * @returns {JSX.Element} - JSX element representing the item in the cart.
 */
import React from 'react';

const ItemsonCart = ({ item, removeFromCart }) => {
    // If there is no item in the cart, display a message
    if (!item) {
        return <div>No items in cart</div>;  // Replace with your default content
    }

    // If there is an item in the cart, display its details
    return (
        <div>
            <h3>{item.title}</h3>
            <p>Price: ${item.newPrice}</p>
            
            {/* Button to remove the item from the cart */}
            <button className="remove-button" onClick={() => removeFromCart(item.cartId)}>Remove</button>
        </div>
    );
};

export default ItemsonCart;
