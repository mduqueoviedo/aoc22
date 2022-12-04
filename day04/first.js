const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')
  .trim()
  .split('\n')

let total = 0

input.forEach((line) => {
  const arrayedLine = line.trim().split(',')
  const firstAssignment = arrayedLine[0].trim().split('-').map((item) => Number(item))
  const secondAssignment = arrayedLine[1].trim().split('-').map((item) => Number(item))

  if (
    (firstAssignment[0] <= secondAssignment[0]
      && firstAssignment[1] >= secondAssignment[1])
    || (firstAssignment[0] >= secondAssignment[0]
      && firstAssignment[1] <= secondAssignment[1])
  ) {
    total++
  }
})

console.log("Total is", total)