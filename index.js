var express = require('express')
const port = 4000

var socket = require('socket.io')

//App setup
var app = express();
var server = app.listen(port , function() {
	console.log('server is running on ', port)
});

// Static files
app.use(express.static('public'));


//Socket setup
var io = socket(server);

io.on('connection', function(socket){
	console.log('connection done', socket.id);

	socket.on('chat', function(data){
		io.sockets.emit('chat', data);		
	})

});


 