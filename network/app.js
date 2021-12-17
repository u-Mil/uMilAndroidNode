'use strict';

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 5050;

var router = require('./router/main')(app);
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/assets', express.static(__dirname + '/assets'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

io.on('connection', (socket) => {
    console.log('on-connection');
    //��� Ŭ���̾�Ʈ�� ����
    //io.emit('event_name', msg);
    //�ش� Ŭ���̾�Ʈ�� ����
    //socket.emit('event_name', msg);
    //�ش� Ŭ���̾�Ʈ ���� ��� Ŭ���̾�Ʈ�� ����
    //socket.broadcast.emit('event_name', msg);
    //Ư�� Ŭ���̾�Ʈ���� ����
    //io.to(id).emit('event_name', msg);

    //JSON Data
    socket.on('hello', (recv) => {
        console.log(recv.data);
    });

    socket.on('connect', (recv) => {
        console.log(recv);
    });

    socket.on('hi_btn_emit', (recv) => {
        console.log(recv);
    });
});
server.listen(port, () => {
    console.log("Express listen [" + port + "]");
});


