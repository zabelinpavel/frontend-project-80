import getRandomNumber from '../../src/utils.js';

const getDescription = () =>
  'Find the greatest common divisor of given numbers.';

const getGCD = (number1, number2) => {
  let a = number1;
  let b = number2;
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const getRoundData = () => {
  const number1 = getRandomNumber(1);
  const number2 = getRandomNumber(1);
  const correctAnswer = getGCD(number1, number2);
  return [`Question: ${number1} ${number2}`, String(correctAnswer)];
};

export default { getDescription, getRoundData };
