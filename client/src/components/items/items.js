import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Route, Routes } from "react-router-dom";
import config from "../../utils/config.json";

import "./items.css";
function Items() {
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

  const addToCart = async (productId) => {
    try {
      const response = await axios.post(`/${config.api_base_url}/cart/items`, {
        productId,
      });
      const data = response.data;
      setCartItems(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div class="card-container">
      <div class="card">
        <img src="https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/y/7/n/apple-iphone-12-dummyapplefsn-original-imafwg8dpyjvgg3j.jpeg?q=70" />
        <div class="card-content">
          <h3>{Items.name}</h3>
          <p>
           {Items.price}
          </p>
          <p>
           {Items.description}
          </p>
          <button className="button">Buy Now</button>&nbsp;&nbsp;
          <Link to="/cart">
            <button className="bttn">Add to Cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Items;
