import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import StyledBadge from "@mui/material/Badge";
import config from "../../utils/config.json";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Navbar() {


  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`${config.api_base_url}/cart/items`);
        setCartItems(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCartItems();
  }, [cartItems]);
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
        <Link to="/home"><div className="menuitems"></div></Link>
        <Link to="/signup"><div to="/signup" className="menuitems">REGISTER</div></Link>
         <div className="menuitems">SIGN IN</div>
          <div className="menuitems">
          <Link to="/cart">
          <StyledBadge badgeContent={cartItems.length} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
