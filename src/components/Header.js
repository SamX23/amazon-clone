import React from "react";
import "../styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function Header() {
  // Pulling from datalayer/reducer
  const [{ basket, user }] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="/styles/images/logo_amazon.png"
          alt="amazon logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <Link to="/result">
          <SearchIcon className="header__searchIcon" />
        </Link>
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">Hello {user?.email}</span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <Link to="/">
            <span className="header__optionLineTwo">& Orders</span>
          </Link>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <Link to="/">
            <span className="header__optionLineTwo">Prime</span>
          </Link>
        </div>

        <Link to="/wishlist">
          <div className="header__optionFeature">
            <BookmarkBorderIcon />
          </div>
        </Link>

        <Link to="/checkout">
          <div className="header__optionFeature">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
