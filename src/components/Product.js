import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import React from "react";
import { useStateValue } from "../StateProvider";

function Product({ id, title, image, price, rating }) {
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();

  // Checking what inside data layer currently
  // console.log("this is state called basket > ", basket);

  // Push item into data layer
  const addToBasket = () => {
    // dispatch item to data layer with type ADD_TO_BASKET
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  const addToWishlist = () => {
    dispatch({
      type: "ADD_TO_WISHLIST",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i} role="img" aria-label="star">
                🌟
              </span>
            ))}
        </div>
      </div>

      <img src={image} alt={title} />
      <button className="button__basket" onClick={addToBasket}>
        Add to Basket
      </button>

      <button className="button__wishlist" onClick={addToWishlist}>
        <FavoriteBorderIcon />
      </button>
    </div>
  );
}

export default Product;
