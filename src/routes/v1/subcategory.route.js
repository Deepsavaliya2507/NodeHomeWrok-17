const express = require("express");
const { subcategoryValidation } = require("../../validations");
const { subcategoryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create subcategory */
router.post(
  "/create-subcategory",
  validate(subcategoryValidation.createSubcategory),
  subcategoryController.createSubcategory
);

/** Get subcategory list */
router.get(
  "/list",
  validate(subcategoryValidation.getSubcategoryList),
  subcategoryController.getSubcategoryList
);

/** Get subcategory details by id */
router.get(
  "/get-details/:subcategoryId",
  validate(subcategoryValidation.getDetails),
  subcategoryController.getSubcategoryDetails
);

/** subcategory details update by id */
router.put(
  "/update-details/:subcategoryId",
  validate(subcategoryValidation.updateDetails),
  subcategoryController.updateDetails
);

/** Delete subcategory */
router.delete(
  "/delete-subcategory/:subcategoryId",
  validate(subcategoryValidation.getDetails),
  subcategoryController.deleteSubcategory
);

module.exports = router;
