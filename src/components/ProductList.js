import React, { useState } from 'react';
import Card from './Card';

function ProductList({ products }) {
    const [cart, setCart] = useState([]);
  
    function addToCart(product) {
      setCart(prevCart => [...prevCart, product]);
    }
  
    const removeFromCart = (productToRemove) => {
      setCartItems((prevCart) => {
        return prevCart.filter(product => product.title !== productToRemove.title);
      });
    };
  
    function updateQuantity(product, quantity) {
      setCart(prevCart => prevCart.map(productInCart => 
        productInCart === product ? { ...productInCart, quantity } : productInCart
      ));
    }

  return (
    <div>
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