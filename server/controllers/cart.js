const { db } = require("../config/config");
//cart get
const getCartItems = async (req, res) => {
try {
    const result = await db.query(
      "SELECT * FROM cart_item ");

 res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

//cart add
const addItem = async (req, res) => {
  const { product_id} = req.body;

  try {
    const cart=await db.query("SELECT * FROM cart_item");
    console.log(cart)
    const existing = cart.find(item=> item.product_id === product_id)
    console.log(existing)
    let result;

    if(!existing ){
      let quantity=1;
       result = await db.query(
        "INSERT INTO cart_item (product_id, quantity) VALUES ($1, $2) RETURNING *",
        [product_id, quantity]
  
      );
      console.log(result)
    }else{
       result = await db.query(
        "UPDATE cart_item SET quantity = quantity + 1 WHERE  product_id = $1 RETURNING *",
        [ product_id]
      );
      console.log(result)
    }
    console.log(req.body)
    console.log(product_id)
    
    
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

//delete cart item

// const deleteItem = async (req, res) => {
//    const { product_id} = req.body;

//    try {
//     const result = await db.query('DELETE FROM cart_item WHERE product_id = $1 RETURNING *', [product_id]);
//     console.log(result)
//     console.log(req.body)
//     console.log(product_id)
//     res.status(200).json(result);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Server error" });
//   }
// };


// const deleteProduct = async (req, res) => {
//   const product_id = req.params.product_id;
//   try {
//     const result = await db.query(
//       "DELETE FROM products WHERE product_id = $1 RETURNING *",
//       [product_id]
//     );
//     res.send(result);
//   } catch (err) {
//     console.error(err);
//     res.send("Error " + err);
//   }
// };

//increment quantity
const increaseItemQuantity = async (req, res) => {
  const { product_id } = req.body;
  const cart_id = req.params.cart_id;
try {
    const result = await db.query(
      "UPDATE cart_item SET quantity = quantity + 1 WHERE cart_id = $1 AND product_id = $2 RETURNING *",
      [cart_id, product_id]
    );
   res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
//decrement quantity
const decreaseItemQuantity = async (req, res) => {
  const { product_id } = req.body;
  const cart_id = req.params.cart_id;
try {
    const result = await db.query(
      "UPDATE cart_item SET quantity = quantity - 1 WHERE cart_id = $1 AND product_id = $2 RETURNING *",
      [cart_id, product_id]
    )
    // console.log(result)
 if (result.rowCount === 0) {
      return res.status(404).json({ error: "Item not found in cart" });
    }
const updatedItem = result;
if (updatedItem.quantity === 0) {
      await db.query(
        "DELETE FROM cart_item WHERE cart_id = $1 AND product_id = $2",
        [cart_id, product_id]
      );
      updatedItem.status = "removed";
    }
res.status(200).json(updatedItem);
  } catch (err) {
   {
      console.error(err);
      res.status(500).json({ error: "Server error" });
    }
  }}
  module.exports = {
    getCartItems,
    addItem,
    // deleteItem,
    increaseItemQuantity,
    decreaseItemQuantity
  };