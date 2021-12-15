'use strict';

var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 5050;

var router = require('./router/main')(app);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

io.on('connection', (socket) => {
    console.log('connect');
    //모든 클라이언트에 전송
    //io.emit('event_name', msg);
    //해당 클라이언트에 전송
    //socket.emit('event_name', msg);
    //해당 클라이언트 제외 모든 클라이언트에 전송
    //socket.broadcast.emit('event_name', msg);
    //특정 클라이언트에게 전송
    //io.to(id).emit('event_name', msg);

    //JSON Data
    socket.on('hello', (recv) => {
        console.log(recv.data);
    });

    socket.on('connect', (recv) => {
        console.log(recv);
    });
});
server.listen(port, () => {
    console.log("Express listen [" + port + "]");
});


