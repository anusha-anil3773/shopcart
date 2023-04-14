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

module.exports = {
getAllProducts,
addProduct
};