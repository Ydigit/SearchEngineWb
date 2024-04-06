
import React from 'react';
import ItemsonCart from './ItemsonCart'; // Import the ProductInCart component

function Cart({ cart, removeFromCart, updateQuantity }) {
    return (
        <div>
            {cart.map((item, index) => (
                <ItemsonCart key={index} item={item} removeFromCart={removeFromCart} />
            ))}
        </div>
    );
}

export default Cart;