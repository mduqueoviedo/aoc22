const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')
  .trim()
  .split('\n')

const groups = []
let single = []
let i = 0
input.forEach((line) => {
  single.push(line)

  if (i === 2) {
    groups.push(single)
    single = []
    i = 0
  } else {
    i++
  }
})

const getPrio = (letter) =>
  letter === letter.toLowerCase()
    ? letter.charCodeAt(0) - 96
    : letter.charCodeAt(0) - 65 + 27

let total = 0

groups.forEach((group) => {
  const first = group[0]
  const second = group[1]
  const third = group[2]

  let common = first.split('').filter((letter) => second.includes(letter))
  if (common.length > 1) {
    common = common.filter((letter) => third.includes(letter))

    if (common.length > 1) {
      common = common.filter((letter) => first.includes(letter))[0]
    } else {
      common = common[0]
    }
  } else {
    common = common[0]
  }

  total += getPrio(common)
})

console.log("Total is", total)