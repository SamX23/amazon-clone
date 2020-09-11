import React from "react";
import "../styles/WishList.css";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "../components/CheckoutProduct";

function WishList() {
  const [{ wishlist, user }] = useStateValue();

  return (
    <div className="wishlist">
      <img
        className="wishlist__ad"
        alt="ads"
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
      />

      <div>
        <h3>Hi, {user?.email}</h3>
        <h2 className="wishlist__title">Wishlist
        <span role="img" aria-label="star">
          ✨
        </span></h2>
        {wishlist.map((item) => (
          <CheckoutProduct
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default WishList;
