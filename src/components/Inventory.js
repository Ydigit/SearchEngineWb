import React from 'react';

// Inventory component receives a list of products as props
function Inventory({ products }) {
  return (
    <div>
      {/* Map through the list of products and render details for each */}
      {products.map(product => (
        <div key={product.id}>
          {/* Display the title of the product */}
          <h2>{product.title}</h2>
          {/* Display the description of the product */}
          <p>{product.description}</p>
          {/* Display the price of the product */}
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Inventory; // Export the Inventory component
