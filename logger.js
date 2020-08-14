const EventEmitter =  require("events");
const uuid = require('uuid');

// console.log(uuid.v4())

class Logger extends EventEmitter{
    log(msg){
        // call event
        this.emit('message', {'id': uuid.v4(), 'msg': msg})
    }

}

// module.exports = Logger
const logger1 = new Logger()

logger1.on('message', (data) => {
    console.log('called listener ', data)
})

logger1.log("Hello world")

