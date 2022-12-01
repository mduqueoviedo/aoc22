const fs = require('fs')
const elfInput = fs.readFileSync('./input.txt', 'utf-8')
  .trim()
  .split('\n\n')

let higher = 0

elfInput.forEach((input) => {
  const arrayedInput = input
    .trim()
    .split('\n')
    .map((item) => Number(item))

  const elfCalories = arrayedInput.reduce((acc, curr) => acc + curr, 0)

  if (elfCalories > higher) {
    higher = elfCalories
  }
})

console.log("Max calories is", higher)