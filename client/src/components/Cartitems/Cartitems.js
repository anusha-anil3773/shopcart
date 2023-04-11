import React, { useState } from "react";
import "./Cartitems.css";
import axios from "axios";
import config from "../../utils/config.json";

function Cartitems({ item ,deleteItem}) {
  const [quantity, setQuantity] = useState(item.quantity);
  const [cartData, setCartData] = useState([]);
  // const [quantity, setQuantity] = useState(1);

  // const increase = () => {
  //   increment(item.product_id);
  // };
  // const decrease = () => {
  //   decrement(item.product_id);
  // };

  
  // const deleteItem = async (product_id) => {
  //   try {
  //     const response = await axios.delete(
  //       `${config.api_base_url}/cart/${product_id}/delete`
  //     );
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  
  
    
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
            {/* <button
              size="small"
              layout="outline"
              disabled={item.quantity === 1}
              onClick={() => decrease()}
            >
              -
            </button> */}
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              value={item.quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            {/* <button size="small" layout="outline" onClick={() => increase()}>
              +
            </button> */}
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

// import React, { useState } from "react";
// import "./Cartitems.css";
// import axios from "axios";
// import config from "../../utils/config.json";

// function Cartitems({ item, updateCart }) {
//   const [quantity, setQuantity] = useState(item.quantity);

//   const deleteItem = async (product_id) => {
//     try {
//       await axios.delete(`${config.api_base_url}/cart/delete/${product_id}`);
//       updateCart(); // call the updateCart function to update the cart after deleting an item
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const updateQuantity = async (product_id, quantity) => {
//     try {
//       await axios.put(`${config.api_base_url}/cart/update`, {
//         product_id,
//         quantity,
//       });
//       updateCart(); // call the updateCart function to update the cart after updating the quantity of an item
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div>
//       <div className="card" key={item.id}>
//         <img
//           src="https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/y/7/n/apple-iphone-12-dummyapplefsn-original-imafwg8dpyjvgg3j.jpeg?q=70"
//           alt="product"
//         />
//         <div className="card-content">
//           <h3>{item.name}</h3>
//           <p>{item.price}</p>
//           <p>{item.description}</p>
//           <div className="quantity">
//             <input
//               type="number"
//               id="quantity"
//               name="quantity"
//               min="1"
//               value={quantity}
//               onChange={(e) => setQuantity(e.target.value)}
//               onBlur={() => updateQuantity(item.product_id, quantity)}
//             />
//           </div>

//           <button
//             className="add-to-cart"
//             onClick={() => deleteItem(item.product_id)}
//           >
//             Remove
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cartitems;
