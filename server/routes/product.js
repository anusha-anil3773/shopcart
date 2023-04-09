const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  addProduct,
  updateProduct,
  // deleteProduct,
} = require('../controllers/product');

router.get('/products', getAllProducts);
router.post('/products', addProduct);
router.put('/products/:product_id', updateProduct);
// router.delete('/products/:product_id', deleteProduct);

module.exports = router;
