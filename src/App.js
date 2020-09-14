import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Header from "./components/Header";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import WishList from "./pages/WishList";
import Payment from "./pages/Payment";
import Orders from "./pages/Orders";
import "./styles/App.css";

const promise = loadStripe(
  "pk_test_51HQPEeJJyyFi6Yacx6CD61hdUBjWstomMsc0F2MMuK8AQ2Mpc7lOPqx1GkAzRa5Ra3qJAUyQA8l3HYcovar1Mw9D00klu1Rt7B"
);

function App() {
  // eslint-disable-next-line
  const [{ state }, dispatch] = useStateValue();

  // listener for login_logo
  useEffect(() => {
    // run once when the app component load
    auth.onAuthStateChanged((authUser) => {
      // console.log("USER is >", authUser);

      if (authUser) {
        // user just logged in / was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    // BEM

    <div className="app">
      <Router>
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/wishlist">
            <Header />
            <WishList />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// Header
// Home
