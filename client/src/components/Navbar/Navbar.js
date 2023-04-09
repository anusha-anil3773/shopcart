import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import StyledBadge from "@mui/material/Badge";
import config from "../../utils/config.json";
import Cart from '../cart/cart'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const fetchCartCount = async () => {
    try {
      const response = await axios.get(`/${config.api_base_url}/cart/count`);
      const cartCount = response.data.totalQuantity;
      setCartCount(cartCount);
    } catch (error) {
      console.error(error);
    }
  };
  
  // Call fetchCartCount on component mount
  useEffect(() => {
    fetchCartCount();
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
            <StyledBadge badgeContent={cartCount} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
