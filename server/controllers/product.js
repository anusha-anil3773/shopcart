const { db } = require("../config/config");

const getAllProducts = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM products");
    res.send(result);
    // console.log(db);
  } catch (err) {
    console.error(err);
    res.send("Error " + err);00       
  }
};


const addProduct = async (req, res) => {
  const { name, price, description } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO products(name, price, description) VALUES ($1, $2, $3) RETURNING *",
      [name, price, description]
    );
    res.send(result);
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
};

const updateProduct = async (req, res) => {
  const product_id = req.params.product_id;
  const { name, price, description } = req.body;
  try {
    const result = await db.query(
      "UPDATE products SET name = $2, price = $3, description = $4 WHERE id = $1 RETURNING *",
      [product_id, name, price, description]
    );
    res.send(result);
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
};

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
module.exports = {
getAllProducts,
addProduct,
updateProduct,
// deleteProduct,
getAllProducts
 
};