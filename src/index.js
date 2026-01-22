import readlineSync from 'readline-sync'

const ROUNDS_AMOUNT = 3

const runGame = (gameRules) => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}`)
  console.log(gameRules.getDescription())
  for (let i = 0; i < ROUNDS_AMOUNT; i += 1) {
    const [question, answer] = gameRules.getRoundData()
    console.log(question)
    const userAnswer = readlineSync.question('Your answer: ')
    if (userAnswer === answer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}

export default runGame
