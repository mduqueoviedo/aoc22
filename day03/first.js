const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')
  .trim()
  .split('\n')

const getPrio = (letter) =>
  letter === letter.toLowerCase()
    ? letter.charCodeAt(0) - 96
    : letter.charCodeAt(0) - 65 + 27

let total = 0

input.forEach((line) => {
  const first = line.slice(0, line.length / 2)
  const second = line.slice(line.length / 2)

  const common = first.split('').find((letter) => second.includes(letter))

  total += getPrio(common)
})

console.log("Total is", total)