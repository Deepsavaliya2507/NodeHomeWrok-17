const { childCategory } = require("../models");

/**
 * Create childCategory
 * @param {object} reqBody
 * @returns {Promise<childCategory>}
 */
const createchildCategory = async (reqBody) => {
  return (await (await childCategory.create(reqBody))
  .populate("category", {"category_name":1}))
  .populate("subcategory",{"subcategory_name":1})
};

/**
 * Get childCategory list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<childCategory>}
 */
const getchildCategoryList = async (filter, options) => {
  return childCategory.find({ $or: [{ is_active: true }] });
};

/**
 * Get childCategory by name
 * @param {string} name
 * @returns {Promise<childCategory>}
 */
const getchildCategoryByName = async (product_name) => {
  return childCategory.findOne({ product_name });
};

/**
 * Get childCategory details by id
 * @param {ObjectId} childCategoryId
 * @returns {Promise<childCategory>}
 */
const getchildCategoryById = async (childCategoryId) => {
  return childCategory.findById(childCategoryId);
};

/**
 * childCategory details update by id
 * @param {ObjectId} childCategoryId
 * @param {object} updateBody
 * @returns {Promise<childCategory>}
 */
const updateDetails = async (childCategoryId, updateBody) => {
  return childCategory.findByIdAndUpdate(childCategoryId, { $set: updateBody });
};

/**
 * Delete childCategory
 * @param {ObjectId} childCategoryId
 * @returns {Promise<childCategory>}
 */
const deletechildCategory = async (childCategoryId) => {
  return childCategory.findByIdAndDelete(childCategoryId);
};

module.exports = {
  createchildCategory,
  getchildCategoryList,
  getchildCategoryById,
  updateDetails,
  getchildCategoryByName,
  deletechildCategory,
};
