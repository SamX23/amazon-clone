import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  // Pulling from datalayer/reducer
  const [{ basket }, dispatch] = useStateValue();

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
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <Link to="/">
            <span className="header__optionLineTwo">SIgn In</span>
          </Link>
        </div>

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

        <Link to="/checkout">
          <div className="header__optionBasket">
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
