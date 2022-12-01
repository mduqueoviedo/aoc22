const fs = require('fs')
const elfInput = fs.readFileSync('./input.txt', 'utf-8')
  .trim()
  .split('\n\n')

const totals = []

elfInput.forEach((input) => {
  const arrayedInput = input
    .trim()
    .split('\n')
    .map((item) => Number(item))

  const elfCalories = arrayedInput.reduce((acc, curr) => acc + curr, 0)

  totals.push(elfCalories)
})

totals.sort((a, b) => b - a)

console.log("Total calories is", totals[0] + totals[1] + totals[2])