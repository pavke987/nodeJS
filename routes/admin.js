const express = require("express");

const path = require("path");
const rootDir = require("../util/path");
const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add product",
    path: "/admin/add-product",
  });
});

router.post("/add-product", (req, res, next) => {
  products.push({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
  });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
