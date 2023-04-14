const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const productRouter = require('./routes/product');
const cartRouter = require('./routes/cart');
const userRouter = require('./routes/user');

//midddleware
app.use(cors());
app.use(express.json()); //access to get body as json data
app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', productRouter); // Mount the product router at '/api'
app.use('/cart', cartRouter);
app.use('/user', userRouter);


app.listen(8000, () => {
  console.log(`Server is running on port 8000`);
});
