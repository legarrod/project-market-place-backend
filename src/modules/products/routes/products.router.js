const express = require("express");
const products = require("../services/products.service");

const router = express.Router();

router.get("/all", products.getAllproducts);

router.get("/all-categories", products.getAllcategories);

router.get("/byid/:id", products.getById);

router.post("/create", products.createProduct);

router.post("/create-category", products.createCategory);

router.put("/update", products.updateProduct);

router.put("/update-category", products.updateCategory);

router.delete("/delete/:id", products.deleteProduct);

router.delete("/delete-category/:id", products.deleteCategory);

module.exports = router;
