import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import StyledBadge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
function Navbar() {
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
            <h1>ECCOM.</h1>
          </div>
        </div>
        <div className="right">
        <div className="menuitems">HOME</div>
          <div className="menuitems">REGISTER</div>
          <div className="menuitems">SIGN IN</div>
          <div className="menuitems">
            <StyledBadge badgeContent={3} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
