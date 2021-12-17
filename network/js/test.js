var socket = io();
socket.connect("http://localhost:5050/");
socket.on('connection', (data) => {
    socket.emit('default', 'connect');
});