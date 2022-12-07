const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')
  .split('\n')

const dirTree = [{
  nodeId: 0,
  name: '/',
  type: 'dir',
  parent: 0,
  children: []
}]

const printTree = () => JSON.stringify(dirTree[0])

let currentId = 1
const createTreeNode = (isDir, itemName, parent, size) => ({
  nodeId: currentId,
  name: itemName,
  type: isDir ? 'dir' : 'file',
  parent,
  size,
  children: []
})

const findNode = (fromNode, nodeId) => {
  if (fromNode.nodeId === nodeId) {
    return fromNode
  } else if (fromNode.children.length) {
    for (let child of fromNode.children.filter((node) => node.type === 'dir')) {
      const foundNode = findNode(child, nodeId)
      if (foundNode) {
        return foundNode
      }
    }
  }
}

const sizeLimit = 100000
let totalDirs = 0
// Calculate size of a dir in the tree
const dirSize = (fromNode = dirTree[0]) => {
  if (fromNode.children.length) {
    // Get the size for the files in the current node
    let fileSize = fromNode.children
      .filter((item) => item.type !== 'dir')
      .reduce((total, curr) => total + Number(curr.size), 0)

    if (fromNode.children.some((item) => item.type === 'dir')) {
      for (let singleDir of fromNode.children.filter((item) => item.type === 'dir')) {
        fileSize += dirSize(singleDir)
      }
    }

    if (fileSize <= sizeLimit) {
      totalDirs += fileSize
    }
    return fileSize
  }
}

let commandCount = 0
let currentDir = dirTree[0]

while (commandCount < input.length) {
  const commandLine = input[commandCount]
  if (commandLine.startsWith('$')) {
    const command = commandLine.slice(2).trim()
    if (command.startsWith('cd')) {

      const arrayedCommand = command.split(' ')
      switch (arrayedCommand[1]) {
        case '..': {
          currentDir = currentDir.parent === '/' || currentDir.parent === null
            ? dirTree[0]
            : findNode(dirTree[0], currentDir.parent)

          if (!currentDir) {
            throw new Error("No such directory")
          }
        }
          break;
        case '/': {
          currentDir = dirTree[0]
        }
          break;
        default: {
          currentDir = currentDir.children.find((child) => child.name === arrayedCommand[1])
          if (!currentDir) {
            throw new Error("No such directory", arrayedCommand[1])
          }
        }
      }
    } else if (commandLine === 'ls') {
      // Do nothing (for now)
    }
  } else {
    // it's a listing
    const arrayedList = commandLine.split(' ')
    if (arrayedList[0] === 'dir') {
      currentDir.children.push(createTreeNode(true, arrayedList[1], currentDir.nodeId, null))
      currentId++
    } else {
      const size = Number(arrayedList[0])
      currentDir.children.push(createTreeNode(false, arrayedList[1], currentDir.nodeId, size))
      currentId++
    }
  }

  commandCount++
}

dirSize()
console.log("Total size", totalDirs)