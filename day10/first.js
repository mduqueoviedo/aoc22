const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')
  .split('\n')
  .map((item) => item.split(' '))

const keyCycles = [20, 60, 100, 140, 180, 220]

let currentValue = 1
let registerSum = 0
let cycleNumber = 1

const cycleCheck = () => {
  if (keyCycles.includes(cycleNumber)) {
    registerSum += cycleNumber * currentValue
  }
}

input.forEach((instructionLine) => {
  cycleCheck()

  if (instructionLine[0] === 'addx') {
    cycleNumber++
    cycleCheck()
    cycleNumber++

    currentValue += Number(instructionLine[1])
  } else {
    // noop
    cycleNumber++
  }
})

console.log("Value is", registerSum)