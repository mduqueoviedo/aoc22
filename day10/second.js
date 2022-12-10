const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')
  .split('\n')
  .map((item) => item.split(' '))

let currentValue = 1
let cycleNumber = 1

let screen = ['', '', '', '', '', '']

const screenDraw = () => {
  const screenLine = Math.trunc((cycleNumber - 1) / 40)
  const screenRow = (cycleNumber - 1) % 40

  Math.abs(currentValue - screenRow) <= 1
    ? screen[screenLine] += '#'
    : screen[screenLine] += '.'
}

input.forEach((instructionLine) => {
  screenDraw()
  if (instructionLine[0] === 'addx') {
    cycleNumber++
    screenDraw()
    cycleNumber++
    currentValue += Number(instructionLine[1])
  } else {
    // noop
    cycleNumber++
  }
})

console.log(screen)