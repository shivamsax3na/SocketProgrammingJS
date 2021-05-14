//Make connection

var socket = io.connect('http://localhost:4000');

//Query dom


var message = document.getElementById('message');
	handle = document.getElementById('handle'),
	btn  = document.getElementById('send'),
	output = document.getElementById('output');


//Emit events

btn.addEventListener('click', function(){
	socket.emit('chat', {
		message: message.value, 
		handle: handle.value
	})
})


//listen for events
socket.on('chat', function(data){
	output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';  
});


