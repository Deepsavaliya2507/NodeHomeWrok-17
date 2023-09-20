const express = require("express");
const { childCategoryValidation } = require("../../validations");
const { childCategoryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create childCategory */
router.post(
  "/create-childCategory",
  validate(childCategoryValidation.createChildCategory),
  childCategoryController.createchildCategory
);

/** Get childCategory list */
router.get(
  "/list",
  validate(childCategoryValidation.getChildCategoryList),
  childCategoryController.getchildCategoryList
);

/** Get childCategory details by id */
router.get(
  "/get-details/:childCategoryId",
  validate(childCategoryValidation.getDetails),
  childCategoryController.getchildCategoryDetails
);

/** childCategory details update by id */
router.put(
  "/update-details/:childCategoryId",
  validate(childCategoryValidation.updateDetails),
  childCategoryController.updateDetails
);

/** Delete childCategory */
router.delete(
  "/delete-childCategory/:childCategoryId",
  validate(childCategoryValidation.getDetails),
  childCategoryController.deletechildCategory
);

module.exports = router;
