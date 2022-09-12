const logEvent = require('./logEvents')

const EventEmmiter = require('events')

class MyEmitter extends EventEmmiter { }

// * Initialize Object 
const myEmitter = new MyEmitter()

// * Add listener for the log event 
myEmitter.on('log', (msg) => logEvent(msg))

setTimeout(() => {
    // * Emit event 
    myEmitter.emit('log', 'Log event emitted !')
}, 3000)