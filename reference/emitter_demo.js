const eventsEmitter = require("events")

class MyEmitter extends eventsEmitter{}

// init object
const myEmitter1 = new MyEmitter()

// Event listener
myEmitter1.on("event", () => console.log('Event fired'))

// trigger the event
myEmitter1.emit('event')
