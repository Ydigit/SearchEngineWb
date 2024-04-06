/*import React, { useState } from 'react';
import ItemsonCart from './ItemsonCart'; // Import the ProductInCart component

function Cart({ cart, removeFromCart, updateQuantity }) {
    const [isCartVisible, setIsCartVisible] = useState(false);

    const handleCartClick = () => {
        setIsCartVisible(!isCartVisible);
    };

    return (
        <div>
            <button onClick={handleCartClick}>CARRINHO</button>
            {isCartVisible && (
                <div>
                    {cart.map((item, index) => (
                        <ItemsonCart key={index} item={item} removeFromCart={removeFromCart} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Cart;
*/
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