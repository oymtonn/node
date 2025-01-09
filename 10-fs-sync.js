const {readFileSync, writeFileSync} = require('fs');
console.log('start')
// same as
// const fs = require('fs')
// fs.read
// fs.write

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

// console.log(first, second)

writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`, 
    {flag: 'a'} //if u want to add, instead of replace whats in the file
)

console.log('done with this task')
console.log('starting the next one')