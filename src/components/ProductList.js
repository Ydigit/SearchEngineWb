import React, { useState } from 'react';
import Card from './Card';

function ProductList({ products }) {
    const [cart, setCart] = useState([]);

    // Function to add a product to the cart
    function addToCart(product) {
        setCart(prevCart => [...prevCart, product]);
    }

    // Function to remove a product from the cart
    const removeFromCart = (productToRemove) => {
        setCart(prevCart => {
            return prevCart.filter(product => product.title !== productToRemove.title);
        });
    };

    // Function to update the quantity of a product in the cart
    function updateQuantity(product, quantity) {
        setCart(prevCart => prevCart.map(productInCart =>
            productInCart === product ? { ...productInCart, quantity } : productInCart
        ));
    }

    return (
        <div>
            {/* Map through the products and render a Card component for each */}
            {products.map(product => (
                <Card
                    key={product.id}
                    img={product.img}
                    title={product.title}
                    star={product.star}
                    reviews={product.reviews}
                    prevPrice={product.prevPrice}
                    newPrice={product.newPrice}
                    addToCart={() => addToCart(product)}
                />
            ))}
        </div>
    );
}

export default ProductList;
