const express = require("express");
const products = require("../services/products_list.service");

const router = express.Router();

router.get("/all", products.getAllProducts);

router.get("/bycategory/:id", products.getProductsByCategory);

module.exports = router;
