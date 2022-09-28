const express = require("express");
const router = express.Router();

const adminCheck = require("../middlewares/adminCheck");
const {
  getAllCategories,
  getCategoryById,
  addCategory,
  updateCategory,
  deleteCategory,
  badRequest,
} = require("../controllers/categories");

router.route("/").get(getAllCategories);
router.route("/:id").get(getCategoryById);
router.route("/").post(adminCheck, addCategory);
router.route("/:id").put(adminCheck, updateCategory);
router.route("/:id").delete(adminCheck, deleteCategory);

// Bad Requests
router.route("/").put(badRequest);
router.route("/").delete(badRequest);
router.route("/").patch(badRequest);
router.route("/:id").post(badRequest);

module.exports = router;
