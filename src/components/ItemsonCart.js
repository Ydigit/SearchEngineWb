import React from 'react';

const ItemsonCart = ({ item, removeFromCart }) => {
    if (!item) {
        return <div>No items in cart</div>;  // substitua por seu conteúdo padrão
    }

    return (
        <div>
            <h3>{item.title}</h3>
            <p>{item.newPrice}</p>
            <button onClick={() => removeFromCart(item.cartId)}>Remove</button>
        </div>
    );
};

export default ItemsonCart;