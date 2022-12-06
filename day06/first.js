const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8').trim()

const windowLength = 4
let marker = 0

input.split('').forEach((char, index) => {
  if (index >= windowLength - 1 && !marker) {
    const packet = input.slice(index, index + windowLength)

    if (packet.length === new Set([...packet]).size) {
      marker = index + windowLength
    }
  }
})

console.log("Marker is", marker)