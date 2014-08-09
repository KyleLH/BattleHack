var app = require('express')(),
    http = require('http').Server(app),
    io = require('socket.io')(http);


io.on('connection', function(socket) {

});