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
  getRandomQuestionsByCategory,
  getRandomQuestionsByDifficulty,
  getQuestionCountForCategory,
  getQuestionCountForDifficulty
} = require("../controllers/questions");

// Base
router.route("/").get(getAllQuestions);
router.route("/:id").get(getQuestionById);
router.route("/category/:category").get(getQuestionsByCategory);
router.route("/difficulty/:difficulty").get(getQuestionsByDifficulty);

// Random Questions
router.route("/random/20").get(getRandomQuestions);
router.route("/random/50").get(getRandomQuestions);
router.route("/random/100").get(getRandomQuestions);
router.route("/random/category/:category").get(getRandomQuestionsByCategory);
router.route("/random/difficulty/:difficulty").get(getRandomQuestionsByDifficulty);

// Admin Things
router.route("/").post(adminCheck, addQuestion);
router.route("/:id").put(adminCheck, updateQuestion);
router.route("/:id").delete(adminCheck, deleteQuestion);

// Question Counts
router.route("/count/category").get(adminCheck, getQuestionCountForCategory);
router.route("/count/difficulty").get(adminCheck, getQuestionCountForDifficulty);

// Bad Requests
router.route("/").put(badRequest);
router.route("/").patch(badRequest);
router.route("/").delete(badRequest);
router.route("/:id").post(badRequest);

module.exports = router;
