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

const getScenicViewUp = (posY, posX) => {
  const markedTree = forestGrid[posY][posX]

  let flag = true
  let scenicUp = 0

  const preY = forestGrid.slice(0, posY).map((y) => y[posX]).reverse()

  for (let preYTree of preY) {
    if (flag) {
      scenicUp++
    }

    if (preYTree >= markedTree) {
      flag = false
    }
  }

  return scenicUp
}

const getScenicViewDown = (posY, posX) => {
  const markedTree = forestGrid[posY][posX]

  let flag = true
  let scenicDown = 0

  const postY = forestGrid.slice(posY + 1).map((y) => y[posX])

  for (let postYTree of postY) {
    if (flag) {
      scenicDown++
    }

    if (postYTree >= markedTree) {
      flag = false
    }
  }

  return scenicDown
}

const getScenicViewLeft = (posY, posX) => {
  const markedTree = forestGrid[posY][posX]

  let flag = true
  let scenicLeft = 0

  const preX = forestGrid[posY].slice(0, posX).reverse()

  for (let preXTree of preX) {
    if (flag) {
      scenicLeft++
    }

    if (preXTree >= markedTree) {
      flag = false
    }
  }

  return scenicLeft
}

const getScenicViewRight = (posY, posX) => {
  const markedTree = forestGrid[posY][posX]

  let flag = true
  let scenicRight = 0

  const postX = forestGrid[posY].slice(posX + 1)

  for (let postXTree of postX) {
    if (flag) {
      scenicRight++
    }

    if (postXTree >= markedTree) {
      flag = false
    }
  }

  return scenicRight
}

let maxScenicView = 0

for (let yTree = 0; yTree < forestGrid.length; yTree++) {
  for (let xTree = 0; xTree < forestGrid[0].length; xTree++) {
    if (!isBorder(yTree, xTree)) {
      const scenicView = getScenicViewDown(yTree, xTree)
        * getScenicViewLeft(yTree, xTree)
        * getScenicViewRight(yTree, xTree)
        * getScenicViewUp(yTree, xTree)

      if (scenicView > maxScenicView) {
        maxScenicView = scenicView
      }
    }
  }
}

console.log("Best scenic view:", maxScenicView)