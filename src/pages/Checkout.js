import React from "react";
import "../styles/Checkout.css";
import Subtotal from "../components/Subtotal";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "../components/CheckoutProduct";
import FlipMove from 'react-flip-move';

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          alt="ads"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />

        <div>
          <h3>Hi, {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((item) => (
              <CheckoutProduct
              // Finding the right Keys damn
                // key={item.id.toString()}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
