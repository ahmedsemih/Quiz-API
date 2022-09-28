const express = require("express");
const router = express.Router();

const adminCheck = require("../middlewares/adminCheck");
const {
  getAllDifficulties,
  getDifficultyById,
  addDifficulty,
  updateDifficulty,
  deleteDifficulty,
  badRequest,
} = require("../controllers/difficulties");

router.route("/").get(getAllDifficulties);
router.route("/:id").get(getDifficultyById);
router.route("/").post(adminCheck, addDifficulty);
router.route("/:id").put(adminCheck, updateDifficulty);
router.route("/:id").delete(adminCheck, deleteDifficulty);

// Bad Requests
router.route("/").put(badRequest);
router.route("/").delete(badRequest);
router.route("/").patch(badRequest);
router.route("/:id").post(badRequest);

module.exports = router;
