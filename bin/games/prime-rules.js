import getRandomNumber from '../../src/utils.js';

const getDescription = () =>
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  for (let i = 2; i <= n / 2; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

const getRoundData = () => {
  const number = getRandomNumber();
  let answer = '';
  if (isPrime(number)) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return [`Question: ${number}`, answer];
};

export default { getDescription, getRoundData };
