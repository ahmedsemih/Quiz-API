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

exports.getQuestionsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const allQuestions = await Question.find({ category })
      .populate("difficulty")
      .populate("category");
    const questionCount = await Question.find({ category }).count();
    const questions = questionSelector(allQuestions, questionCount);

    if (questions === null || questionCount === null) return notFound(res);

    success(res, questions, "questions");
  } catch (error) {
    badRequest(res, error);
  }
};

exports.getQuestionsByDifficulty = async (req, res) => {
  try {
    const { difficulty } = req.params;
    const allQuestions = await Question.find({ difficulty })
      .populate("difficulty")
      .populate("category");
    const questionCount = await Question.find({ difficulty }).count();
    const questions = questionSelector(allQuestions, questionCount);

    if (questions === null || questionCount === null) return notFound(res);

    success(res, questions, "questions");
  } catch (error) {
    badRequest(res, error);
  }
};

exports.getRandomQuestions = async (req, res) => {
  const paths = req.path.split("/");
  const amount = Number(paths[2]);

  try {
    const questionCount = await Question.count({});
    const randomNumber = await getRandomNumber(questionCount, amount + 100);
    const selectedQuestions = await Question.find({}, null, {
      skip: randomNumber,
      limit: amount + 100,
    })
      .populate("difficulty")
      .populate("category");
    const questions = await questionSelector(selectedQuestions, amount);

    if (questions === null || questionCount === null) return notFound(res);
    success(res, questions, "questions");
  } catch (error) {
    badRequest(res, error);
  }
};

exports.getRandomQuestionsByCategory = async (req, res) => {
  const { category } = await req.params;
  if (!category) return badRequest(res);

  try {
    const questionCount = await Question.count({ category });
    const selectedQuestions = await Question.find({ category })
      .populate("difficulty")
      .populate("category");
    const questions = await questionSelector(selectedQuestions, 20);

    if (questions === null || questionCount === null) return notFound(res);
    success(res, questions, "questions");
  } catch (error) {
    badRequest(res, error);
  }
};

exports.getRandomQuestionsByDifficulty = async (req, res) => {
  const { difficulty } = await req.params;
  if (!difficulty) return badRequest(res);

  try {
    const questionCount = await Question.count({ difficulty });
    const randomNumber = await getRandomNumber(questionCount, 100);
    const selectedQuestions = await Question.find({ difficulty }, null, {
      skip: randomNumber,
      limit: 100,
    })
      .populate("difficulty")
      .populate("category");
    const questions = await questionSelector(selectedQuestions, 20);

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

exports.getQuestionCountForCategory = async (req, res) => {
  const sportCount = await Question.find({
    category: "63357a4ec37e5b79f7f18979",
  }).count();
  const artCount = await Question.find({
    category: "63357aa53ab81af9ad154eae",
  }).count();
  const geographyCount = await Question.find({
    category: "63357abb3ab81af9ad154eb0",
  }).count();
  const generalCount = await Question.find({
    category: "63357ad03ab81af9ad154eb2",
  }).count();
  const historyCount = await Question.find({
    category: "63357adc3ab81af9ad154eb4",
  }).count();
  const musicCount = await Question.find({
    category: "63357ae03ab81af9ad154eb6",
  }).count();
  const tvCount = await Question.find({
    category: "63357af83ab81af9ad154eb8",
  }).count();
  const scienceCount = await Question.find({
    category: "63357b0d3ab81af9ad154eba",
  }).count();

  res.json({
    sportCount,
    artCount,
    geographyCount,
    generalCount,
    historyCount,
    musicCount,
    tvCount,
    scienceCount,
  });
};

exports.getQuestionCountForDifficulty = async (req, res) => {
  const easyCount = await Question.find({
    difficulty: "63343ba898b44503fecc49e9",
  }).count();
  const mediumCount = await Question.find({
    difficulty: "63357b533ab81af9ad154ebe",
  }).count();
  const hardCount = await Question.find({
    difficulty: "63357b5b3ab81af9ad154ec0",
  }).count();

  res.json({
    easyCount,
    mediumCount,
    hardCount,
  });
};

exports.badRequest = async (req, res) => {
  badRequest(res);
};
