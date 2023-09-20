const { childCategoryService } = require("../services");

/** create childCategory */
const createchildCategory = async (req, res) => {
    try {
    const reqBody = req.body;

    const childCategoryExists = await childCategoryService.getchildCategoryByName(
        reqBody.childCategory_name
    );
    if (childCategoryExists) {
        throw new Error("childCategory already created by this email!");
    }

    const childCategory = await childCategoryService.createchildCategory(reqBody);
    if (!childCategory) {
        throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
        success: true,
        message: "childCategory create successfully!",
        data: { childCategory },
    });
    } catch (error) {
    res.status(400).json({ success: false, message: error.message });
    }
};

/** Get childCategory list */
const getchildCategoryList = async (req, res) => {
    try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
        filter.$or = [
        { childCategory_name: { $regex: search, $options: "i" } },
        ];
    }

    const getList = await childCategoryService.getchildCategoryList(
        filter,
        options
    );

    res.status(200).json({
        success: true,
        message: "Get childCategory list successfully!",
        data: getList,
    });
    } catch (error) {
    res.status(400).json({ success: false, message: error.message });
    }
};

/** Get childCategory details by id */
const getchildCategoryDetails = async (req, res) => {
    try {
    const getDetails = await childCategoryService.getchildCategoryById(
        req.params.childCategoryId
    );
    if (!getDetails) {
        throw new Error("childCategory not found!");
    }

    res.status(200).json({
        success: true,
        message: "childCategory details get successfully!",
        data: getDetails,
    });
    } catch (error) {
    res.status(400).json({ success: false, message: error.message });
    }
};

/** childCategory details update by id */
const updateDetails = async (req, res) => {
    try {
    const childCategoryId = req.params.childCategoryId;
    const childCategoryExists = await childCategoryService.getchildCategoryById(
        childCategoryId
    );
    if (!childCategoryExists) {
        throw new Error("childCategory not found!");
    }

    await childCategoryService.updateDetails(childCategoryId, req.body);

    res
        .status(200)
        .json({
        success: true,
        message: "childCategory details update successfully!",
        });
    } catch (error) {
    res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete childCategory */
const deletechildCategory = async (req, res) => {
    try {
    const childCategoryId = req.params.childCategoryId;
    const childCategoryExists = await childCategoryService.getchildCategoryById(
        childCategoryId
    );
    if (!childCategoryExists) {
        throw new Error("childCategory not found!");
    }

    await childCategoryService.deletechildCategory(childCategoryId);

    res.status(200).json({
        success: true,
        message: "childCategory delete successfully!",
    });
    } catch (error) {
    res.status(400).json({ success: false, message: error.message });
    }
};
module.exports = {
    createchildCategory,
    getchildCategoryList,
    getchildCategoryDetails,
    updateDetails,
    deletechildCategory,
};
