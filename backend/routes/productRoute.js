const express = require('express');
const productRouter = express.Router();
const { addProduct, deleteProduct, getAllProducts, getNewCollection, getpopularWomenCloths } = require('../controllers/productController');


productRouter.post('/addProduct', addProduct);
productRouter.delete('/deleteProduct/:id', deleteProduct)
productRouter.get("/allproduct",getAllProducts)
productRouter.get("/newCollections", getNewCollection)
productRouter.get("/popularWomenCloths", getpopularWomenCloths)

module.exports = productRouter;
