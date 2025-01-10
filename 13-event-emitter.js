const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response',(name, id)=>{ // listen for an event called response, then log data recieved
    console.log(`data recieved user ${name} with id: ${id}`)
})

customEmitter.on('response',()=>{ // listen for an event called response, then log data recieved
    console.log(`some other logic here `)
})

customEmitter.emit('response', 'john', 34) // create event called response, need to listen for event first before emitting
                               // putting this before customEmitter.on will not work