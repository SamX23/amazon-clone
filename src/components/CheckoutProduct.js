import React from "react";
import "../styles/CheckoutProduct.css";
import { useStateValue } from "../StateProvider";
import FlipMove from 'react-flip-move';

function CheckoutProduct({id, image, title, price, rating }) {
  // eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove item from Basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <FlipMove>
      <div key={id} className="checkoutProduct">
        <img className="checkoutProduct__image" src={image} alt="{title}" />

        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <span key={i}role="img" aria-label="star">
                  🌟
                </span>
              ))}
          </div>
          <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
      </div>
    </FlipMove>
  );
}

export default CheckoutProduct;
