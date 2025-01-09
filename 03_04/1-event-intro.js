const { EventEmitter } = require('node:events');

const myEvent = new EventEmitter();

myEvent.on('start', () => {
  console.log('Application is started ...')
});

myEvent.emit('start');





