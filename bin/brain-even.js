#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandomNumber = (min = 0, max = 100) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const parseYesNo = (input) => {
  if (input === 'yes') return true;
  if (input === 'no') return false;

  return null;
};

const getCorrectAnswer = (n) => {
  if (n % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const playEvenGame = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const Number = getRandomNumber();
    const correctAnswer = getCorrectAnswer(Number);
    console.log(`Question: ${Number}`);
    const answer = readlineSync.question('Your answer: ');
    const result = parseYesNo(answer);

    if (result === null || answer !== correctAnswer) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

playEvenGame();
