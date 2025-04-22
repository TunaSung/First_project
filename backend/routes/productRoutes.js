const express = require("express");
const {products, product} = require("../controllers/productController")

const router = express.Router();
router.get("/products", products);
router.get("/product/:id", product);

module.exports = router;