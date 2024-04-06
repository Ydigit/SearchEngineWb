// <button onClick={() => removeFromCart(item.cartId)}>Remove</button>
import React from 'react';

const ItemsonCart = ({ item, removeFromCart }) => {
    if (!item) {
        return <div>No items in cart</div>;  // Replace with your default content
    }

    return (
        <div>
            <h3>{item.title}</h3>
            <p>{item.newPrice}</p>
            
            <button className="remove-button" onClick={() => removeFromCart(item.cartId)}>Remove</button>
        </div>
    );
};

export default ItemsonCart;
