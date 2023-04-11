import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./cart.css";
import Footer from "../Footer/Footer";
import axios from "axios";
import config from "../../utils/config.json";
import Cartitems from "../Cartitems/Cartitems";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

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
    
  return (
    <div>
      <Navbar />
      <div className="card-container">
        {cartItems.map((item) => (
          <Cartitems 
          key={item.id} 
          item={item} 
          deleteItem={deleteItem}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
export default Cart;
