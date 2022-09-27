const mongoose = require("mongoose");

const DifficultySchema = new mongoose.Schema({
    degree: {
      type: String,
      required: true,
      unique: true,
    },
  },{ versionKey: false }
);

const Difficulty = mongoose.model("Difficulty", DifficultySchema);
module.exports = Difficulty;
