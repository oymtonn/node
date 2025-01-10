const http = require('http')

// const server = http.createServer((req, res) => {
//     res.end('Welcome')    
// })

// Using Event Emitter API
const server = http.createServer()
// emmits request event
// subscribe to it / listen to it / respond to it
server.on('request', (req, res) => { // listen for request event from server
    res.end('Welcome')
})

server.listen(5000)