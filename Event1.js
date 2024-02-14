
//import 'events' module and creating an instance of the EventEmitter class

const EventEmitter = require('events')
const myEmitter = new EventEmitter()

//Listner Function - welcomeUser()
const welcomeUser = () => {
    console.log("Hi there, Welcome to the server")

}

//Listening for the userJoined event using the on() method
myEmitter.on('user joined', welcomeUser)


//emitting the userjoined event using the emit()method
myEmitter.emit('user joined')