const getRandomNumber = (length, amount) => {
  const numbers = Math.floor(Math.random() * (length - amount));
  return numbers;
};

module.exports=getRandomNumber;
