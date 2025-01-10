// npm - global command, comes with node
// npm --version

// local dependency - I can only use it only in this particular project, have to install again in others
// npm i <packageName> to install

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info abot project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// npm i nodemon -D to install deve dependencies


const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
console.log(items)
console.log('hello people')

