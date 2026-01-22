import getRandomNumber from '../../src/utils.js'

const getDescription = () => 'What number is missing in the progression?'

const getRoundData = () => {
  const progressionSize = getRandomNumber(5, 10)
  const progressionStep = getRandomNumber(1, 10)
  const progressionStart = getRandomNumber()
  const progression = [progressionStart]
  for (let i = 1; i < progressionSize; i += 1) {
    progression.push(progressionStart + progressionStep * i)
  }
  const missingItemIndex = getRandomNumber(0, progressionSize - 1)
  const answer = progression[missingItemIndex]
  progression[missingItemIndex] = '..'

  return [`Question: ${progression.join(' ')}`, String(answer)]
}

export default { getDescription, getRoundData }
