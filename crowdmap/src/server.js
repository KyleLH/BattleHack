var app = require('express')(),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    uuid = require('node-uuid');


var clients = {};

io.on('connection', function(socket) {
    //console.log(require('util').inspect(socket, { depth: null, colors: true }));



    var id = uuid.v4();

    clients[id] = socket;

    console.log('connected clients:' + Object.keys(clients).length);
    //console.dir(clients);

    socket.emit('log', 'Connected clients: ' + Object.keys(clients).length);

    socket.on('coordinates', function(coordinates) {
        console.log('got coordinates');
        socket.coordinates = coordinates;

        broadcast();
    });

    console.log('a user connected.');

    socket.on('disconnect', function() {
        delete clients[id];
        console.log('user disconnected');
        broadcast();
    });
});

app.get('/', function(req, res) {
    res.sendFile('index.html', { root: './public' });
});

http.listen(80, function() {
    console.log('Listening on 80');
});

function broadcast() {
    var coords = Object.keys(clients).map(function(id) {
        return clients[id].coordinates;
    });

    io.emit('coordinates', coords);

}