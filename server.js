const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const categoryRoutes = require("./routes/categories");
const difficultyRoutes = require("./routes/difficulties");
const questionRoutes = require("./routes/questions");
const rapidApiCheck = require('./middlewares/rapidApiCheck');

const app = express();
const PORT = process.env.PORT || 4000;

// MIDDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use((req,res,next)=>rapidApiCheck(req,res,next));

// ROUTES
app.get('/',(req,res)=>{
  res.status(200).json({
    welcome:"Welcome to ASE's Quiz API",
    endpoints:{
      freeEndpoints:[
        {endpoint:"/questions/random/20",job:"Get random 20 questions"},
      ],
      premiumEndpoints:[
        {endpoint:"/questions/random/50",job:"Get random 50 questions"},
        {endpoint:"/questions/random/category/{categoryId}",job:"Get random 20 questions by category"},
        {endpoint:"/questions/random/difficulty/{difficultyId}",job:"Get random 20 questions by difficulty"},
        {endpoint:"/categories",job:"Get all categories"},
        {endpoint:"/difficulties",job:"Get all difficulties"}
      ],
      ultimateEndpoints:[
        {endpoint:"/questions",job:"Get all questions (without pagination)"},
        {endpoint:"/questions/{id}",job:"Get question by id"},
        {endpoint:"/questions/category/{categoryId}",job:"Get questions by category"},
        {endpoint:"/questions/difficulty/{difficultyId}",job:"Get questions by difficulty"},
        {endpoint:"/questions/random/100}",job:"Get random 100 questions"},
        {endpoint:"/questions/random/category/{categoryId}",job:"Get random 20 questions by category"},
        {endpoint:"/questions/random/difficulty/{difficultyId",job:"Get random 20 questions by difficulty"},
        {endpoint:"/categories",job:"Get all categories"},
        {endpoint:"/difficulties",job:"Get all difficulties"}
      ]
    }
  });
});
app.use('/categories',categoryRoutes);
app.use('/difficulties',difficultyRoutes);
app.use('/questions',questionRoutes);

// DATABASE CONNECTION
mongoose.connect(process.env.MONGODB_CONNECTION_STRING, () => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}.`);
  });
});
