const Category = require("../models/Category");
const success = require("../utils/successResponse");
const notFound = require("../utils/notFoundResponse");
const badRequest = require("../utils/badRequestResponse");

exports.getAllCategories = async (req, res) => {
  const { name } = await req.query;

  if (name === "" || name === null)
    return badRequest(res, "Name cannot be null");

  if (name) {
    try {
      const category = await Category.findOne({
        name: new RegExp("\\b" + name + "\\b", "i"),
      });

      if (category === null) return notFound(res);

      success(res, category,"category");
    } catch (error) {
      badRequest(res, error);
    }
  } else {
    try {
      const categories = await Category.find({});

      if (categories === null) return notFound(res);

      success(res, categories,"categories");
    } catch (error) {
      badRequest(res, error);
    }
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const { id } = await req.params;
    const category = await Category.findById(id);

    if (category === null) return notFound(res);

    success(res, category,"category");
  } catch (error) {
    badRequest(res, error);
  }
};

exports.addCategory = async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);

    res.status(201).json({
      newCategory,
      result_code: "201",
      result_message: "success",
    });
  } catch (error) {
    badRequest(res, error);
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const { id } = await req.params;
    const updatedCategory = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    success(res, updatedCategory,"updatedCategory");
  } catch (error) {
    badRequest(res, error);
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const { id } = await req.params;
    const deletedCategory = await Category.findByIdAndDelete(id);

    success(res, deletedCategory,"deletedCategory");
  } catch (error) {
    badRequest(res, error);
  }
};

exports.badRequest = async (req, res) => {
  return badRequest(res);
};
