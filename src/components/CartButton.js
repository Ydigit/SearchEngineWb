import React from 'react';

// CartButton component receives a prop toggleCart which is a function to toggle the visibility of the cart
const CartButton = ({ toggleCart }) => {
    return (
        // Button to toggle cart visibility
        <button onClick={toggleCart}>Cart</button>
    );
};

export default CartButton; // Export the CartButton component
