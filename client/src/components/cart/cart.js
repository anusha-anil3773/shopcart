import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../Navbar/Navbar";
import "./cart.css";
import Footer from "../Footer/Footer";
import axios from "axios";
import config from "../../utils/config.json";
import Cartitems from "../Cartitems/Cartitems";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [cartData, setCartData] = useState();

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
  }, [cartItems]);

  const deleteItem = async (product_id) => {
    try {
      await axios.delete(`${config.api_base_url}/cart/${product_id}/delete`);
      setCartItems(
        cartItems.filter((item) => {
          return item.product_id !== product_id;
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  async function increment(product_id) {
    const res = await axios.put(
      `${config.api_base_url}/cart/increase/${product_id}`,
      { product_id }
    );
    setCartData({ ...cartData });
    return res;
  }
  
  async function decrement(product_id) {
    const res = await axios.put(
      `${config.api_base_url}/cart/decrease/${product_id}`,
      { product_id }
    );
    setCartData({ ...cartData});
    return res;
  }
  
  useEffect(() => {
  }, [increment, decrement,deleteItem]);
  

return (
    <div>
      <Navbar />
      <div className="card-container">
        {cartItems.map((item) => (
          <Cartitems
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            increment={increment}
            decrement={decrement}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
