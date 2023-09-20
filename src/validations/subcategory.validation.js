const Joi = require("joi");

/** create subcategory */
const createSubcategory = {
  body: Joi.object().keys({
    subcategory_name: Joi.string().required().trim()
  }),
};

/** GEt subcategory list */
const getSubcategoryList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get subcategory details by id */
const getDetails = {
  params: Joi.object().keys({
    subcategoryId: Joi.string().required().trim(),
  }),
};

/** subcategory details update by id */
const updateDetails = {
  params: Joi.object().keys({
    subcategoryId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    subcategory_name: Joi.string().trim(),
  }),
};

module.exports = {
  createSubcategory,
  getDetails,
  getSubcategoryList,
  updateDetails
};
