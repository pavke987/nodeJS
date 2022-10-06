const path = require("path");

const express = require("express");
const rootDir = require("../util/path");
const router = express.Router();
const adminData = require("./admin");

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", {
    products: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCss: true,
  });
});

module.exports = router;
