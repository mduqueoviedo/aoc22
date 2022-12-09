const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')
  .split('\n')
  .map((item) => item.split(' '))

let headPos = [0, 0]
let tailPos = [0, 0]

const isAdjacent = () =>
  Math.abs(headPos[0] - tailPos[0]) <= 1
  && Math.abs(headPos[1] - tailPos[1]) <= 1

let tailCount = ['00']

input.forEach((instruction) => {
  const direction = instruction[0]
  const distance = instruction[1]

  for (let i = 0; i < distance; i++) {
    switch (direction) {
      case 'U':
        headPos[1]++
        break
      case 'D':
        headPos[1]--
        break
      case 'L':
        headPos[0]--
        break
      case 'R':
        headPos[0]++
        break
    }

    if (!isAdjacent()) {
      if (headPos[0] === tailPos[0]) {
        // Same vertical line
        tailPos[1] += (1 * headPos[1] > tailPos[1] ? 1 : -1)
      } else if (headPos[1] === tailPos[1]) {
        // Same horizontal line
        tailPos[0] += (1 * headPos[0] > tailPos[0] ? 1 : -1)
      } else {
        // diagonal
        tailPos[0] += (1 * headPos[0] > tailPos[0] ? 1 : -1)
        tailPos[1] += (1 * headPos[1] > tailPos[1] ? 1 : -1)
      }

      tailCount.push(`${tailPos[0]}${tailPos[1]}`)
    }
  }
})

console.log("Total visits tail:", new Set(tailCount).size)