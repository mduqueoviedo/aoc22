const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')
  .trim()
  .split('\n')

/*
The score for a single round is the score for the shape you 
selected (1 for Rock, 2 for Paper, and 3 for Scissors) plus 
the score for the outcome of the round (0 if you lost, 
  3 if the round was a draw, and 6 if you won).

  A for Rock, B for Paper, and C for Scissors
  X for Rock, Y for Paper, and Z for Scissors
*/

const scoreDic = {
  A: { X: 4, Y: 8, Z: 3 },
  B: { X: 1, Y: 5, Z: 9 },
  C: { X: 7, Y: 2, Z: 6 },
}

let total = 0
input.forEach((game) => {
  const res = game.split(' ')
  total += scoreDic[res[0]][res[1]]
})

console.log("Score is", total)