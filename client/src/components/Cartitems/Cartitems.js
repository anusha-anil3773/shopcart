import React, { useState } from "react";
import './Cartitems.css'

function Cartitems({ item, removeItemFromCart }) {
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
      <div className="card" key={item.id}>
        <img
          src="https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/y/7/n/apple-iphone-12-dummyapplefsn-original-imafwg8dpyjvgg3j.jpeg?q=70"
          alt="product"
        />
        <div className="card-content">
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <p>{item.description}</p>
          <div class="quantity">
            <button class="decrement" onClick={handleDecrement}>
              -
            </button>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
            <button class="increment" onClick={handleIncrement}>
              +
            </button>
          </div>
         
         
          <button
            class="add-to-cart"
            onClick={() => removeItemFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cartitems;
