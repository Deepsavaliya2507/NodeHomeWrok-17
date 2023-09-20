const express = require("express");
const categoryRoute = require("./category.route");
const subcategoryRoute = require("./subcategory.route");
const childCategoryRoute = require("./childcategory.route");

const router = express.Router();

router.use("/category", categoryRoute);
router.use("/subcategory", subcategoryRoute);
router.use("/childcategory", childCategoryRoute);

module.exports = router;