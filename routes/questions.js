const express = require("express");
const router = express.Router();

const adminCheck = require("../middlewares/adminCheck");
const {
  getAllQuestions,
  getQuestionById,
  getQuestionsByCategory,
  getQuestionsByDifficulty,
  getRandomQuestions,
  addQuestion,
  updateQuestion,
  deleteQuestion,
  badRequest,
} = require("../controllers/questions");

router.route("/").get(getAllQuestions);
router.route("/:id").get(getQuestionById);
router.route("/category/:category").get(getQuestionsByCategory);
router.route("/difficulty/:difficulty").get(getQuestionsByDifficulty);
router.route("/random/:amount").get(getRandomQuestions);
router.route("/").post(adminCheck, addQuestion);
router.route("/:id").put(adminCheck, updateQuestion);
router.route("/:id").delete(adminCheck, deleteQuestion);

// Bad Requests
router.route("/").put(badRequest);
router.route("/").patch(badRequest);
router.route("/").delete(badRequest);
router.route("/:id").post(badRequest);

module.exports = router;
