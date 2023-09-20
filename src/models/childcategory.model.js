const mongoose = require("mongoose");

const childCategorySchema = new mongoose.Schema(
    {
    product_name: {
        type: String,
        trim: true,
    },
    product_des: {
        type: String,
        trim: true,
    },
    product_price: {
        type: Number,
        trim: true,
    },
    subcategory: {
        type: mongoose.Types.ObjectId,
        ref: "subcategory",
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: "category",
    },
    is_active: {
        type: Boolean,
        default: true,
    },
    },
    {
    timestamps: true,
    versionKey: false,
    }
);

const childCategory = mongoose.model("childcategory", childCategorySchema);
module.exports = childCategory;
