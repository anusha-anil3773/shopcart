import React, { useState } from "react";
import "./Cartitems.css";

function Cartitems({ item, deleteItem, decrement, increment }) {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    increment(item.product_id);
  };
  const decrease = () => {
    decrement(item.product_id);
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
            <button
              size="small"
              layout="outline"
              disabled={item.quantity === 1}
              onClick={() => decrease()}
            >
              -
            </button>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              value={item.quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button size="small" layout="outline" onClick={() => increase()}>
              +
            </button>
          </div>

          <button
            class="add-to-cart"
            onClick={() => deleteItem(item.product_id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cartitems;
