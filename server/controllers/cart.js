
const db = require("../config/config");


//cart get
const getCartItems = async (req, res) => {
  const cart_id = req.params.cart_id;

  try {
    const result = await db.query(
      "SELECT * FROM cart_item WHERE cart_id = $1",
      [cart_id]
    );

    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

//cart add
const addItem = async (req, res) => {
  const cart_id = req.params.cart_id;
  const { product_id, quantity } = req.body;

  try {
    const result = await db.query(
      "INSERT INTO cart_item (cart_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING *",
      [cart_id, product_id, quantity]
    );

    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

//delete cart item
const deleteItem = async (req, res) => {
  const { product_id, quantity } = req.body;
  const cart_id = req.params.cart_id;

  try {
    const result = await db.query(
      "DELETE FROM cart_item WHERE cart_id = $1 AND product_id = $2 AND quantity = $3 RETURNING *",
      [cart_id, product_id, quantity]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Item not found in cart" });
    }

    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

//increment quantity
const increaseItemQuantity = async (req, res) => {
  const { product_id } = req.body;
  const cart_id = req.params.cart_id;

  try {
    const result = await db.query(
      "UPDATE cart_item SET quantity = quantity + 1 WHERE cart_id = $1 AND product_id = $2 RETURNING *",
      [cart_id, product_id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Item not found in cart" });
    }

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
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Item not found in cart" });
    }

    const updatedItem = result.rows[0];

    if (updatedItem.quantity === 0) {
      await db.query(
        "DELETE FROM cart-item WHERE cart_id = $1 AND product_id = $2",
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
    deleteItem,
    increaseItemQuantity,
    decreaseItemQuantity
  };