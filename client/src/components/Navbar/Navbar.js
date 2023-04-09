import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import StyledBadge from "@mui/material/Badge";
import config from "../../utils/config.json";
import Cart from '../cart/cart'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
function Navbar() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`/${config.api_base_url}/cart/items`);
        const data = response.data;
        setCartItems(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCartItems();
  }, []);

  return (
    <div className="container1">
      <div className="Wrapper">
        <div className="left">
          <div className="Language">EN</div>
          <div className="search">
            <input /> <SearchIcon style={{ color: "gray", fontSize: "16px" }} />{" "}
          </div>
        </div>
        <div className="center">
          <div className="logo">
            <h1>ShopKart.</h1>
          </div>
        </div>
        <div className="right">
          <div className="menuitems">HOME</div>
          <div className="menuitems">REGISTER</div>
          <div className="menuitems">SIGN IN</div>
          <div className="menuitems">
            <StyledBadge badgeContent={quantity} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </div>
          <div className="cart-count">{cartItems.length}</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
