const Question = require("../models/Question");
const success = require("../utils/successResponse");
const badRequest = require("../utils/badRequestResponse");
const notFound = require("../utils/notFoundResponse");
const getRandomNumber = require("../utils/getRandomNumbers");
const questionSelector = require("../utils/questionSelector");

exports.getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find({})
      .populate("difficulty")
      .populate("category");

    if (questions === null) return notFound(res);

    success(res, questions, "questions");
  } catch (error) {
    badRequest(res, error);
  }
};

exports.getQuestionById = async (req, res) => {
  try {
    const { id } = await req.params;
    const question = await Question.findById(id)
      .populate("difficulty")
      .populate("category");

    if (question === null) return notFound(res);

    success(res, question, "question");
  } catch (error) {
    badRequest(res, error);
  }
};

exports.getRandomQuestions = async (req, res) => {
  var  {amount}  = await req.params || 20;
  amount = amount > 100 ? 100 : amount;

  try {
    const questionCount = await Question.count({});
    const randomNumber = await getRandomNumber(questionCount, amount + 100);
    const selectedQuestions = await Question.find({}, null, { skip: randomNumber, limit: amount + 100 }).populate("difficulty").populate("category");;
    const questions = await questionSelector(selectedQuestions, amount);

    if (questions === null || questionCount === null) return notFound(res);
    success(res, questions, "questions");
  } catch (error) {
    badRequest(res, error);
  }
};

exports.getQuestionsByCategory = async (req, res) => {
  const { category } = await req.params;
  if (!category) return badRequest(res);

  try {
    const questionCount = await Question.count({ category });
    const randomNumber = await getRandomNumber(questionCount, 100);
    const selectedQuestions = await Question.find({ category }, null, { skip: randomNumber, limit: 100 }).populate("difficulty").populate("category");;
    const questions = await questionSelector(selectedQuestions, 50);

    if (questions === null || questionCount === null) return notFound(res);
    success(res, questions, "questions");
  } catch (error) {
    badRequest(res, error);
  }
};

exports.getQuestionsByDifficulty = async (req, res) => {
  const { difficulty } = await req.params;
  if (!difficulty) return badRequest(res);

  try {
    const questionCount = await Question.count({ difficulty });
    const randomNumber = await getRandomNumber(questionCount, 100);
    const selectedQuestions = await Question.find({ difficulty }, null, { skip: randomNumber, limit: 100 }).populate("difficulty").populate("category");;
    const questions = await questionSelector(selectedQuestions, 50);

    if (questions === null || questionCount === null) return notFound(res);
    success(res, questions, "questions");
  } catch (error) {
    badRequest(res, error);
  }
};

exports.addQuestion = async (req, res) => {
  try {
    const newQuestion = await Question.create(req.body);

    res.status(201).json({
      newQuestion,
      result_code: "201",
      result_message: "success",
    });
  } catch (error) {
    badRequest(res, error);
  }
};

exports.updateQuestion = async (req, res) => {
  try {
    const { id } = await req.params;
    const updatedQuestion = await Question.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    success(res, updatedQuestion, "updatedQuestion");
  } catch (error) {
    badRequest(res, error);
  }
};

exports.deleteQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedQuestion = await Question.findByIdAndDelete(id);

    success(res, deletedQuestion, "deletedQuestion");
  } catch (error) {
    badRequest(res, error);
  }
};

exports.badRequest = async (req, res) => {
  badRequest(res);
};
