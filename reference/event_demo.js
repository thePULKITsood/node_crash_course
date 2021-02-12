const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter {}


//  ! init means initiate 
// Init object
const myEmitter = new MyEmitter();
 //*  creating an object of MyEmmitter class which extends eventemitter 
//   * requires ('events")  

// Event listener
myEmitter.on('event', () => console.log('Event Fired!'));

// Init event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
