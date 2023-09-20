const Joi = require("joi");

/** create childCategory */
const createchildCategory = {
  body: Joi.object().keys({
    product_name: Joi.string().required().trim(),
    product_des: Joi.string().required().trim(),
    product_price: Joi.number().integer().required(),
  }),
};

/** GEt childCategory list */
const getchildCategoryList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get childCategory details by id */
const getDetails = {
  params: Joi.object().keys({
    childCategoryId: Joi.string().required().trim(),
  }),
};

/** childCategory details update by id */
const updateDetails = {
  params: Joi.object().keys({
    childCategoryId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    childCategory_name: Joi.string().trim(),
  }),
};

module.exports = {
  createchildCategory,
  getDetails,
  getchildCategoryList,
  updateDetails
};
