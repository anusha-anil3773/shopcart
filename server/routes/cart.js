const express = require("express");
const router = express.Router();
const {

  getCartItems,
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} = require("../controllers/cart");

// GET /cart/:cart_id/items
router.get("/items", getCartItems);

// POST /cart/:cart_id/items
router.post("/items/add", addItem);

// DELETE /cart/:cart_id/items
router.delete("/:product_id/delete", deleteItem);

// PUT /cart/:cart_id/items/increase
router.put("/increase/:product_id", increaseItemQuantity);

// PUT /cart/:cart_id/items/decrease
router.put("/decrease/:product_id", decreaseItemQuantity);

module.exports = router;
