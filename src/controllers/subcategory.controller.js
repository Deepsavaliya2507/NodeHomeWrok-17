const { subcategoryService } = require("../services");

/** create subcategory */
const createSubcategory = async (req, res) => {
    try {
    const reqBody = req.body;

    const subcategoryExists = await subcategoryService.getSubcategoryByName(
        reqBody.subcategory_name
    );
    if (subcategoryExists) {
        throw new Error("subcategory already created by this email!");
    }

    const subcategory = await subcategoryService.createSubcategory(reqBody);
    if (!subcategory) {
        throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
        success: true,
        message: "subcategory create successfully!",
        data: { subcategory },
    });
    } catch (error) {
    res.status(400).json({ success: false, message: error.message });
    }
};

/** Get subcategory list */
const getSubcategoryList = async (req, res) => {
    try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
        filter.$or = [
        { subcategory_name: { $regex: search, $options: "i" } },
        ];
    }

    const getList = await subcategoryService.getSubcategoryList(
        filter,
        options
    );

    res.status(200).json({
        success: true,
        message: "Get subcategory list successfully!",
        data: getList,
    });
    } catch (error) {
    res.status(400).json({ success: false, message: error.message });
    }
};

/** Get subcategory details by id */
const getSubcategoryDetails = async (req, res) => {
    try {
    const getDetails = await subcategoryService.getSubcategoryById(
        req.params.subcategoryId
    );
    if (!getDetails) {
        throw new Error("subcategory not found!");
    }

    res.status(200).json({
        success: true,
        message: "subcategory details get successfully!",
        data: getDetails,
    });
    } catch (error) {
    res.status(400).json({ success: false, message: error.message });
    }
};

/** subcategory details update by id */
const updateDetails = async (req, res) => {
    try {
    const subcategoryId = req.params.subcategoryId;
    const subcategoryExists = await subcategoryService.getSubcategoryById(
        subcategoryId
    );
    if (!subcategoryExists) {
        throw new Error("subcategory not found!");
    }

    await subcategoryService.updateDetails(subcategoryId, req.body);

    res
        .status(200)
        .json({
        success: true,
        message: "subcategory details update successfully!",
        });
    } catch (error) {
    res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete subcategory */
const deleteSubcategory = async (req, res) => {
    try {
    const subcategoryId = req.params.subcategoryId;
    const subcategoryExists = await subcategoryService.getSubcategoryById(
        subcategoryId
    );
    if (!subcategoryExists) {
        throw new Error("subcategory not found!");
    }

    await subcategoryService.deleteSubcategory(subcategoryId);

    res.status(200).json({
        success: true,
        message: "subcategory delete successfully!",
    });
    } catch (error) {
    res.status(400).json({ success: false, message: error.message });
    }
};
module.exports = {
    createSubcategory,
    getSubcategoryList,
    getSubcategoryDetails,
    updateDetails,
    deleteSubcategory,
};
