var events = require('events');

var eventEmitter = new events.EventEmitter();

var myEventHandler = function(){
	console.log('i can hear dcp');
}

eventEmitter.on('dcp',myEventHandler);


eventEmitter.emit('dcp');







