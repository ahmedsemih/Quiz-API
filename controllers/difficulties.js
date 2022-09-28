const Difficulty = require("../models/Difficulty");
const success = require("../utils/successResponse");
const badRequest = require("../utils/badRequestResponse");
const notFound = require("../utils/notFoundResponse");

exports.getAllDifficulties = async (req, res) => {
  const { degree } = req.query;

  if (degree === "" || degree === null)
    return badRequest(res, "Degree cannot be null");

  if (degree) {
    try {
      const difficulty = await Difficulty.findOne({
        degree: new RegExp("\\b" + degree + "\\b", "i"),
      });

      if (difficulty === null) return notFound(res);

      success(res, difficulty);
    } catch (error) {
      badRequest(res, error);
    }
  } else {
    try {
      const difficulties = await Difficulty.find({});

      if (difficulties === null) return notFound(res);

      success(res, difficulties);
    } catch (error) {
      badRequest(res, error);
    }
  }
};

exports.getDifficultyById = async (req, res) => {
  try {
    const { id } = await req.params;
    const difficulty = await Difficulty.findById(id);

    if (difficulty === null) return notFound(res);

    success(res, difficulty);
  } catch (error) {
    badRequest(res, error);
  }
};

exports.addDifficulty = async (req, res) => {
  try {
    const newDifficulty = await Difficulty.create(req.body);

    res.status(201).json({
      newDifficulty,
      result_code: "201",
      result_message: "success",
    });
  } catch (error) {
    badRequest(res, error);
  }
};

exports.updateDifficulty = async (req, res) => {
  try {
    const { id } = await req.params;
    const updatedDifficulty = await Difficulty.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    success(res, updatedDifficulty);
  } catch (error) {
    badRequest(res, error);
  }
};

exports.deleteDifficulty = async (req, res) => {
  try {
    const { id } = await req.params;
    const deletedDifficulty = await Difficulty.findByIdAndDelete(id);

    success(res, deletedDifficulty);
  } catch (error) {
    badRequest(res, error);
  }
};

exports.badRequest = async (req, res) => {
  badRequest(res);
};
