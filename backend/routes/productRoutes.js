const express = require("express");
const {getAllProducts, getProductId, getHotItems} = require("../controllers/productController")

const router = express.Router();
router.get("/products", getAllProducts);
router.get("/product/:id", getProductId);
router.get("/hot_items", getHotItems);

module.exports = router;