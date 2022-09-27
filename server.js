const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const categoryRoutes = require("./routes/categories");
const difficultyRoutes = require("./routes/difficulties");
const questionRoutes = require("./routes/questions");

const app = express();
const PORT = process.env.PORT || 4000;

// MIDDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// ROUTES
app.use('/categories',categoryRoutes);
app.use('/difficulties',difficultyRoutes);
app.use('/questions',questionRoutes);

// DATABASE CONNECTION
mongoose.connect(process.env.MONGODB_CONNECTION_STRING, () => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}.`);
  });
});
