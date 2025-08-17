const express = require('express');
const userRouter = express.Router();
const userMiddleware = require("../middleware/userMiddleware");
const { cartController, removeCart, getCart } = require('../controllers/cartController');



userRouter.post("/addtocart",userMiddleware, cartController)
userRouter.post('/removefromcart',userMiddleware, removeCart)
userRouter.post("/getcart", userMiddleware,getCart )

module.exports = userRouter