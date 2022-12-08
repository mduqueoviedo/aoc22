const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')
  .split('\n')

const forestGrid = []

input.forEach((inputLine) => {
  forestGrid.push(inputLine.split('').map((item) => Number(item)))
})

const isBorder = (posY, posX) =>
  posY === 0
  || posX === 0
  || posY === forestGrid.length - 1
  || posX === forestGrid[0].length - 1

const isVisible = (posY, posX) => {
  let visibleFlag = false

  const markedTree = forestGrid[posY][posX]

  const preY = forestGrid.slice(0, posY).map((y) => y[posX])
  const postY = forestGrid.slice(posY + 1).map((y) => y[posX])
  const preX = forestGrid[posY].slice(0, posX)
  const postX = forestGrid[posY].slice(posX + 1)

  if (preY.every((tree) => tree < markedTree)) {
    visibleFlag = true
  }

  if (postY.every((tree) => tree < markedTree)) {
    visibleFlag = true
  }

  if (preX.every((tree) => tree < markedTree)) {
    visibleFlag = true
  }

  if (postX.every((tree) => tree < markedTree)) {
    visibleFlag = true
  }

  return visibleFlag
}

let totalVisible = 0

for (let yTree = 0; yTree < forestGrid.length; yTree++) {
  for (let xTree = 0; xTree < forestGrid[0].length; xTree++) {
    if (isBorder(yTree, xTree)) {
      totalVisible++
    } else {
      if (isVisible(yTree, xTree)) {
        totalVisible++
      }
    }
  }
}

console.log("Visible trees:", totalVisible)