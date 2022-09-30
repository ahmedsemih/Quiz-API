const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
    text: {
      type: String,
      required: true
    },
    options: {
      type: [{ option: String, isCorrect: Boolean,_id:false}],
      required: true
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required:true
    },
    difficulty: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Difficulty",
      required:true
    },
  },{ versionKey: false }
);

const Question = mongoose.model("Question", QuestionSchema);
module.exports = Question;
