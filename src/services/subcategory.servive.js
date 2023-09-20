const { subcategory } = require("../models");

/**
 * Create subcategory
 * @param {object} reqBody
 * @returns {Promise<subcategory>}
 */
const createSubcategory = async (reqBody) => {
  return subcategory.create(reqBody);
};

/**
 * Get subcategory list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<subcategory>}
 */
const getSubcategoryList = async (filter, options) => {
  return subcategory.find({ $or: [{ is_active: true }] });
};

/**
 * Get subcategory by name
 * @param {string} name
 * @returns {Promise<subcategory>}
 */
const getSubcategoryByName = async (subcategory_name) => {
  return subcategory.findOne({ subcategory_name });
};

/**
 * Get subcategory details by id
 * @param {ObjectId} subcategoryId
 * @returns {Promise<subcategory>}
 */
const getSubcategoryById = async (subcategoryId) => {
  return subcategory.findById(subcategoryId);
};

/**
 * subcategory details update by id
 * @param {ObjectId} subcategoryId
 * @param {object} updateBody
 * @returns {Promise<subcategory>}
 */
const updateDetails = async (subcategoryId, updateBody) => {
  return subcategory.findByIdAndUpdate(subcategoryId, { $set: updateBody });
};

/**
 * Delete subcategory
 * @param {ObjectId} subcategoryId
 * @returns {Promise<subcategory>}
 */
const deleteSubcategory = async (subcategoryId) => {
  return subcategory.findByIdAndDelete(subcategoryId);
};

module.exports = {
  createSubcategory,
  getSubcategoryList,
  getSubcategoryById,
  updateDetails,
  getSubcategoryByName,
  deleteSubcategory,
};
