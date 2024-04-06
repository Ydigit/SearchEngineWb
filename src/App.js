import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import Cart from './components/Cart';
import "./index.css";
import ItemsonCart from "./components/ItemsonCart";

function App() {
  const [inventory, setInventory] = useState([]); // Define inventory state
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cartItems, setCartItems] = useState([]); // novo estado para o carrinho
  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  /** */
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(product => product.cartId !== productId));
  };

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };
  <button onClick={toggleCart}>Cart</button>
  { isCartVisible && <Cart items={cartItems} removeFromCart={removeFromCart} /> }

  const updateQuantity = (product, quantity) => {
    setCartItems((prevCart) => prevCart.map(item => item.id === product.id ? { ...item, quantity } : item));
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };
  //**** */ //verificar o numero de identificador em math random
  function addToCart(product) {
    setCart(prevCart => {
      const newCart = [...prevCart, { ...product, cartId: Date.now() }];
      console.log(newCart); //control
      return newCart;
    });
  }

  function filteredData(products, selected, query) {
    let filteredProducts = products;


    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          addToCart={() => addToCart({ img, title, star, reviews, prevPrice, newPrice })}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>

      <Sidebar handleChange={handleChange} />
      <Navigation
        query={query}
        handleInputChange={handleInputChange}
        cartItems={cartItems}
        cart={cart} // pass cart to Navigation
        removeFromCart={removeFromCart} // pass removeFromCart to Navigation
        updateQuantity={updateQuantity} // pass updateQuantity to Navigation
        inventory={inventory} // pass inventory to Navigation
      />
      <Recommended handleClick={handleClick} />
      <Products result={result} addToCart={addToCart} />
    </>
  );
}



export default App;