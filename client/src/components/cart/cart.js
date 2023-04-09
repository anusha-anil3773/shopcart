import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import'./cart.css'
import Footer from "../Footer/Footer";


function Cart() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <Navbar />
      <div class="contain">
  <div class="card" style={{ width: '500px' }}>
    <div class="card-header">
      <img src="https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/y/7/n/apple-iphone-12-dummyapplefsn-original-imafwg8dpyjvgg3j.jpeg?q=70" />
    </div>
    <div class="card-body">
      <h3 class="card-title">Special title treatment</h3>
      <p class="card-text">
        With supporting text below as a natural lead-in to additional content.
      </p>
      <div class="quantity">
        <button class="decrement" onClick={handleDecrement}>-</button>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
        <button class="increment" onClick={handleIncrement}>+</button>
      </div>
      <button class="add-to-cart">Place Order</button>&nbsp;&nbsp;
      <button class="add-to-cart">Remove</button>
    </div>
  </div>
</div>


      <Footer />
    </div>
  );
}

export default Cart;
