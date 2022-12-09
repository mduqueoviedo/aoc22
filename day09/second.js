const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')
  .split('\n')
  .map((item) => item.split(' '))

const rope = Array.from({ length: 10 }, e => Array(2).fill(0));

const isAdjacent = (first, second) => {
  return Math.abs(first[0] - second[0]) <= 1
    && Math.abs(first[1] - second[1]) <= 1
}

let tailCount = ['00']

input.forEach((instruction, index) => {
  const direction = instruction[0]
  const distance = instruction[1]

  for (let i = 0; i < distance; i++) {
    switch (direction) {
      case 'U':
        rope[0][1] += 1
        break
      case 'D':
        rope[0][1] -= 1
        break
      case 'L':
        rope[0][0] -= 1
        break
      case 'R':
        rope[0][0] += 1
        break
    }

    for (let j = 1; j <= 9; j++) {
      if (!isAdjacent(rope[j - 1], rope[j])) {
        if (rope[j - 1][0] === rope[j][0]) {
          // Same vertical line
          rope[j][1] += (1 * rope[j - 1][1] > rope[j][1] ? 1 : -1)
        } else if (rope[j - 1][1] === rope[j][1]) {
          // Same horizontal line
          rope[j][0] += (1 * rope[j - 1][0] > rope[j][0] ? 1 : -1)
        } else {
          // diagonal
          rope[j][0] += (1 * rope[j - 1][0] > rope[j][0] ? 1 : -1)
          rope[j][1] += (1 * rope[j - 1][1] > rope[j][1] ? 1 : -1)
        }
      }
    }

    tailCount.push(`${rope[9][0]}${rope[9][1]}`)
  }
})

console.log("Total visits tail:", new Set(tailCount).size)