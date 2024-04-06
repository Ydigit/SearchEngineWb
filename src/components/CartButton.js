import React from 'react';

const CartButton = ({ toggleCart }) => {
    return (
        <button onClick={toggleCart}>Cart</button>
    );
};

export default CartButton;