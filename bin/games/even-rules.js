import getRandomNumber from '../../src/utils.js'

const getCorrectAnswer = (n) => {
  if (n % 2 === 0) {
    return 'yes'
  }
  return 'no'
}

const getDescription = () =>
  'Answer "yes" if the number is even, otherwise answer "no".'

const getRoundData = () => {
  const number = getRandomNumber()
  const correctAnswer = getCorrectAnswer(number)
  return [`Question: ${number}`, correctAnswer]
}

export default { getDescription, getRoundData }
