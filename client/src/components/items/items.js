import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import config from "../../utils/config.json";

import "./items.css";

function Items() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(
          `/${config.api_base_url}/api/products`
        );
        const data = response.data;
        setCartItems(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCartItems();
  }, []);

  const addToCart = async (item) => {
    try {
      const response = await axios.post(
        `${config.api_base_url}/cart/items/add`,
        item
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="card-container">
      {cartItems.map((item) => (
        <div className="card" key={item.id}>
          <img
            src="https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/y/7/n/apple-iphone-12-dummyapplefsn-original-imafwg8dpyjvgg3j.jpeg?q=70"
            alt="product"
          />
          <div className="card-content">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <p>{item.description}</p>
            <button className="button">Buy Now</button>&nbsp;&nbsp;
            <Link to="/cart">
              <button className="bttn" onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Items;
