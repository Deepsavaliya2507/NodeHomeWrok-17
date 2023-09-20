const Joi = require("joi");

/** create category */
const createCategory = {
  body: Joi.object().keys({
    category_name: Joi.string().required().trim()
  }),
};

/** GEt category list */
const getCategoryList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get category details by id */
const getDetails = {
  params: Joi.object().keys({
    categoryId: Joi.string().required().trim(),
  }),
};

/** category details update by id */
const updateDetails = {
  params: Joi.object().keys({
    categoryId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    category_name: Joi.string().trim(),
  }),
};

module.exports = {
  createCategory,
  getDetails,
  getCategoryList,
  updateDetails
};
