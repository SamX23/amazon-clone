import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import WishList from "./pages/WishList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();

  // listener for login_logo
  useEffect(() => {
    // run once when the app component load
    auth.onAuthStateChanged((authUser) => {
      console.log("USER is >", authUser);

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
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/wishlist">
            <Header />
            <WishList />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// Header
// Home
