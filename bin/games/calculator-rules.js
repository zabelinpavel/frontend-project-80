import getRandomNumber from '../../src/utils.js';

const getRandomOperation = () => {
  const randomNumber = getRandomNumber(1, 3);
  switch (randomNumber) {
    case 1:
      return '+';
    case 2:
      return '-';
    case 3:
      return '*';
    default:
      return '+';
  }
};

const getCorrectAnswer = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return number1 + number2;
  }
};

const getDescription = () => 'What is the result of the expression?';

const getRoundData = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const operation = getRandomOperation();
  const correctAnswer = getCorrectAnswer(number1, number2, operation);
  return [
    `Question: ${number1} ${operation} ${number2}`,
    String(correctAnswer),
  ];
};

export default { getDescription, getRoundData };
