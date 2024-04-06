import { BsFillBagFill } from "react-icons/bs";

const Card = ({ img, title, star, reviews, prevPrice, newPrice, addToCart }) => {
  
  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag" onClick={() => addToCart({ img, title, star, reviews, prevPrice, newPrice })}>
              <BsFillBagFill className="bag-icon" />
              <span className="bag-text">Buy</span>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
