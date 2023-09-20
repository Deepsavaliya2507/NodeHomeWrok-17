const express = require("express");
const { categoryValidation } = require("../../validations");
const { categoryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create category */
router.post(
  "/create-category",
  validate(categoryValidation.createCategory),
  categoryController.createCategory
);

/** Get category list */
router.get(
  "/list",
  validate(categoryValidation.getCategoryList),
  categoryController.getCategoryList
);

/** Get category details by id */
router.get(
  "/get-details/:categoryId",
  validate(categoryValidation.getDetails),
  categoryController.getCategoryDetails
);

/** category details update by id */
router.put(
  "/update-details/:categoryId",
  validate(categoryValidation.updateDetails),
  categoryController.updateDetails
);

/** Delete category */
router.delete(
  "/delete-category/:categoryId",
  validate(categoryValidation.getDetails),
  categoryController.deleteCategory
);

module.exports = router;
