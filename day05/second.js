const fs = require('fs')
const rawInput = fs.readFileSync('./input.txt', 'utf-8')
  .split('\n\n')

// Proccess stacks input first
const rawStacks = rawInput[0]
const charLines = rawStacks.split('\n').reverse()[0]

// Get the positions where the actual letters are
const letterPositions = []
charLines.split('').forEach((char, index) => {
  if (char !== ' ') {
    letterPositions.push(index)
  }
})

const cleanStacks = rawStacks.split('\n').reverse()
cleanStacks.shift()

// Use the positions to create real stacks 
const stacks = []
cleanStacks.forEach((stackLine) => {
  letterPositions.forEach((letterPosition, index) => {
    if (stackLine.charAt(letterPosition) !== ' ') {
      if (!stacks[index]) {
        stacks[index] = []
      }
      stacks[index].push(stackLine.charAt(letterPosition))
    }
  })
})

const movements = rawInput[1]

movements.split('\n').forEach((movement) => {
  const arrayedMovement = movement.split(' ')
  const moveAmount = arrayedMovement[1]
  const moveOrigin = arrayedMovement[3]
  const moveDestination = arrayedMovement[5]

  const partialStack = stacks[moveOrigin - 1].slice(-moveAmount)

  for (let i = 0; i < moveAmount; i++) {
    stacks[moveOrigin - 1].pop()
  }

  stacks[moveDestination - 1].push(...partialStack)
})

let finalStack = ''
stacks.forEach((singleStack) => {
  finalStack += singleStack.at(-1)
})

console.log(finalStack)

