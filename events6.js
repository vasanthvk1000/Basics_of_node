const EventEmitter = require('events')
const myEmitter = new EventEmitter()

const sayHi = () => {
    console.log('Hi User')
}

const sayHello = () => {
    console.log('Hello user')
}

myEmitter.on('userJoined', sayHi)
myEmitter.on('userJoined', sayHello)
myEmitter.emit('userJoined')

