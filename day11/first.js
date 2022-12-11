const fs = require('fs')
const monkeyInput = fs.readFileSync('./input.txt', 'utf-8')
  .split('\n\n')
  .map((monkeyLines) => monkeyLines.split('\n'))

const monkeys = []
const monkeyItems = []

const createMonkey = (monkeyId, operation, test, whenTrue, whenFalse) => ({
  monkeyId, operation, test, whenTrue, whenFalse,
})

monkeyInput.forEach((monkey) => {
  const id = Number(monkey[0].split(' ')[1].replace(':', ''))
  monkeyItems[id] = monkey[1].substring(monkey[1].indexOf('Starting items:') + 15).trim().split(',').map((item) => Number(item))
  const operation = [monkey[2].split(' ')[6], monkey[2].split(' ')[7].trim()]
  const test = Number(monkey[3].split(' ')[5])
  const whenTrue = Number(monkey[4].split(' ')[9])
  const whenFalse = Number(monkey[5].split(' ')[9])

  monkeys.push(createMonkey(id, operation, test, whenTrue, whenFalse))
})

const monkeyInspects = Array(monkeys.length).fill(0)

let roundNumber = 1

const getNewItemValue = (item, monkey) => {
  const boredomIndex = 3
  const operator = monkey.operation[1] === 'old' ? item : Number(monkey.operation[1])

  const newValue = monkey.operation[0] === '*'
    ? Math.trunc((item * operator) / boredomIndex)
    : Math.trunc((item + operator) / boredomIndex)

  newValue % monkey.test === 0
    ? monkeyItems[monkey.whenTrue].push(newValue)
    : monkeyItems[monkey.whenFalse].push(newValue)
}

while (roundNumber <= 20) {
  monkeys.forEach((monkey, monkeyIndex) => {
    const currentMonkeyItems = monkeyItems[monkeyIndex]
    monkeyItems[monkeyIndex] = []

    currentMonkeyItems.forEach((monkeyItem) => {
      monkeyInspects[monkeyIndex]++
      getNewItemValue(monkeyItem, monkey)
    })
  })

  roundNumber++
}

monkeyInspects.sort((a, b) => a - b)

console.log("Monkey business", monkeyInspects.at(-1) * monkeyInspects.at(-2))