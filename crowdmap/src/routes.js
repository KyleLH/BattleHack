var request = require('request');

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.sendFile('index.html', { root: './public' });
    });

    app.get('/oauth', function(req, res) {

        request.post({
            url: 'https://api.venmo.com/v1/oauth/access_token',
            body: {
                code: req.query.code,
                client_id: '',
                client_secret: ''
            }
        }, function(err, response, body) {

        });
    });

    app.get('/login', function(req, res) {
        res.sendFile('login.html', { root: './public' });
    })
};