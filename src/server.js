var express = require('express'),
    app = express(),
    path = require('path'),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    uuid = require('node-uuid'),
    models = require('./models')();

app.use(express.static(path.join(__dirname, '../public')));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

require('./routes')(app);

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


http.listen(80, function() {
    console.log('Listening on 80');
});

function broadcast() {
    var coords = Object.keys(clients).map(function(id) {
        return clients[id].coordinates;
    });

    io.emit('coordinates', coords);
}


// Save a snapshot every five minutes.
setTimeout(function() {
    var snapshot = Object.keys(clients).map(function(id) {
        if (clients[id].coordinates) {
            return {
                latitude: clients[id].coordinates.latitude,
                longitude: clients[id].coordinates.longitude
            };
        } else {
            return undefined;
        }

    }).filter(function(element) { return element !== undefined });

    console.log(models.Snapshot.toString());

    console.dir(new models.Snapshot({
        timestamp: Date.now(),
        locations: snapshot
    }))
    .save(function(err) {
            if (err) console.error('Unable to save snapshot.', err);
        });

}, 5 * 60 * 1000);

