import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./cart.css";
import Footer from "../Footer/Footer";
import axios from "axios";
import config from "../../utils/config.json";
import Cartitems from "../Cartitems/Cartitems";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  // useEffect(() => {
  //   const fetchCartItems = async () => {
  //     try {
  //       const response = await axios.get(`${config.api_base_url}/cart/items`);
  //       setCartItems(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchCartItems();
  // }, []);
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`${config.api_base_url}/cart/items`);
        console.log(response.data); // check the response data here
        setCartItems(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCartItems();
  }, []);

  // const increment = async (product_id) => {
  //   const res = await axios.put(
  //     `${config.api_base_url}/cart/increase/${product_id}`
  //   );
  //   const updatedCartItems = cartItems.map((item) =>
  //     item.product_id === product_id
  //       ? { ...item, quantity: item.quantity + 1 }
  //       : item
  //   );
  //   setCartItems(updatedCartItems);
  //   return res;
  // };

  // const decrement = async (product_id) => {
  //   const res = await axios.put(
  //     `${config.api_base_url}/cart/decrease/${product_id}`
  //   );
  //   const updatedCartItems = cartItems.map((item) =>
  //     item.product_id === product_id
  //       ? { ...item, quantity: item.quantity - 1 }
  //       : item
  //   );
  //   setCartItems(updatedCartItems);
  //   return res;
  // };

  return (
    <div>
      <Navbar />
      <div className="card-container">
        {cartItems.map((item) => (
          <Cartitems
            key={item.id}
            item={item}
            // increment={increment}
            // decrement={decrement}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
export default Cart;
