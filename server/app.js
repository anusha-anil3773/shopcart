// const express = require("express");
// const cors = require("cors");
// const app = express();
// const session = require('express-session')
// const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");
// const productRouter = require('./routes/product');
// const cartRouter = require('./routes/cart');
// const userRouter = require('./routes/user');
// const pool  = require("./config/config");

// //midddleware
// app.use(cors());
// app.use(cors({
//   origin: "http://localhost:3000",
//   credentials: true
// }));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json()); 
// app.use(bodyParser.json({ type: "application/json" }));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/api', productRouter); 
// app.use('/cart', cartRouter);
// app.use('/user', userRouter);

// const oneDay = 60*60*24*1000

// app.use(session({
//   secret: 'secret',
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     expires: 60 * 60 * 24,
//     maxAge: oneDay},

// }));


const express = require("express");
const cors = require("cors");
const app = express();
const session = require('express-session')
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const productRouter = require('./routes/product');
const cartRouter = require('./routes/cart');
const userRouter = require('./routes/user');


//midddleware
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));



app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: true,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

// handling routes
app.use('/api', productRouter); 
app.use('/cart', cartRouter);
app.use('/user', userRouter);

app.listen(8000, () => {
  console.log(`Server is running on port 8000`);
});
