import { BsFillBagFill } from "react-icons/bs";

// Card component receives product details and addToCart function as props
const Card = ({ img, title, star, reviews, prevPrice, newPrice, addToCart }) => {

  return (
    <>
      {/* Card section */}
      <section className="card">
        {/* Product image */}
        <img src={img} alt={title} className="card-img" />
        {/* Card details */}
        <div className="card-details">
          {/* Product title */}
          <h3 className="card-title">{title}</h3>
          {/* Product reviews */}
          <section className="card-reviews">
            {/* Display star rating */}
            {star} {star} {star} {star}
            {/* Display total reviews */}
            <span className="total-reviews">{reviews}</span>
          </section>
          {/* Product price */}
          <section className="card-price">
            <div className="price">
              {/* Display previous price with strike-through */}
              {/* Display previous price with strike-through */}
              <del>${prevPrice}</del> ${newPrice}
            </div>
            {/* Add to cart button */}
            <div className="bag" onClick={() => addToCart({ img, title, star, reviews, prevPrice, newPrice })}>
              {/* Shopping bag icon */}
              <BsFillBagFill className="bag-icon" />
              {/* Button text */}
              <span className="bag-text">Buy</span>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card; // Export the Card component
