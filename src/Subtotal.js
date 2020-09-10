import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  // Pulling from data layer
  const [{ basket }, dispatch] = useStateValue();

  const getBasketTotal = (price) => {
    let counter = 0;
    let checker = 0;
    price.map((item) => {
      let price = item.price;
      counter = counter + price;
      checker = checker + 1;
      // Item positions checker
      console.log(`Items No ${checker} with price of $${price}`);
    });

    console.log(`Subtotal : ${counter}`);
    return counter;
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;