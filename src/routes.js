var request = require('request'),
    models = require('./models')();

module.exports = function(app) {
    app.get('/partials/:template', function(req, res, next) {
        res.render('/partials/' + req.params.template);
    });

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
    });

    app.post('/deals', function(req, res) {
        req.body.deals.forEach(function(deal) {
            new models.Deal(deal).save(function(err) {
                if (error) {
                    console.error("Unable to save deal.");
                }
            });

            res.status(200);
        });
    });

    app.get('/deals', function(req, res) {
        models.Deal.find({}, function(err, deals) {
            if (err) {
                console.error("Unable to get deals from Mongo.");
                res.status(500);
            } else {
                res.json(deals);
            }
        });
    });
};