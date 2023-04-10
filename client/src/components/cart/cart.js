import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./cart.css";
import Footer from "../Footer/Footer";
import axios from "axios";
import config from "../../utils/config.json";
import Cartitems from "../Cartitems/Cartitems";

function Cart(props) {
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
  }, []);


  // const removeItemFromCart = async (product_id) => {
  //   try {
  //     const response = await axios.delete(`${config.api_base_url}/cart/${product_id}/items/delete`);
  //     console.log(response);
  //     setCartItems(response.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  

  return (
    <div>
      <Navbar />
      <div className="card-container">
        {cartItems.map((item) => (
          <Cartitems 
          key={item.id} 
          item={item} 
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
