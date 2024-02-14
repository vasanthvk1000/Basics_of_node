const EventEmitter = require('events');
const myEmitter = new EventEmitter();



const sayHello = () =>{
    console.log('Hello User')
}

const sayHi = () => {
    console.log('Hi user')
}

const greetNewYear = () => {
    console.log('Happy New year!')
}

myEmitter.on('userJoined', sayHello);
myEmitter.on('userJoined', sayHi);
myEmitter.on('userJoined', greetNewYear);


myEmitter.emit('userJoined')