const questionSelector = (questions, amount) => {
  const questionArray = [];
  const questionNumbers = [];

  // Getting random numbers
  for (; questionNumbers.length < amount; ) {
    var randomNumber = Math.floor(Math.random() * questions.length);
    if (!questionNumbers.includes(randomNumber)) {
      questionNumbers.push(randomNumber);
    }
  }

  // Selecting questions
  for (let i = 0; i < amount; i++) {
    questionArray.push(questions[questionNumbers[i]]);
  }
  return questionArray;
};

module.exports = questionSelector;
