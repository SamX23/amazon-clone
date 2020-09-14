import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PlaceIcon from "@material-ui/icons/Place";
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
      <div className="header__top">
        <Link className="hoverLn" to="/">
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
          <Link to={!user && "/login"} className="option-hover">
            <div onClick={handleAuthentication} className="header__option">
              <span className="header__optionLineOne">Hello {user?.email}</span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>

          <Link to="/orders">
            <div className="header__option option-hover">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>

          <div className="header__option option-hover">
            <span className="header__optionLineOne">Your</span>
            <Link to="/">
              <span className="header__optionLineTwo">Prime</span>
            </Link>
          </div>

          <Link to="/wishlist" className="option-hover">
            <div className="header__optionFeature">
              <BookmarkBorderIcon />
            </div>
          </Link>

          <Link to="/checkout" className="option-hover">
            <div className="header__optionFeature">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="subheader">
        <div className="subheader__left hoverLn">
          <PlaceIcon className="header__optionFeature" />
          <div className="header__option">
            <span className="header__optionLineOne">Deliver to</span>
            <span className="header__optionLineTwo">Indonesia</span>
          </div>
        </div>
        <div className="subheader__right">
          <p>Today's Deals</p>
          <p>Customer Service</p>
          <p>Gift Cards</p>
          <p>Registry</p>
          <p>Sell</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
