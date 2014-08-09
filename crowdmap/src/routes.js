module.exports = function(app) {
    app.get('/', function(req, res) {
        res.sendFile('index.html', { root: './public' });
    });

    app.get('/oauth', function(req, res) {

        request.post({
            url: 'https://api.venmo.com/v1/oauth/access_token',
            body: {
                code: req.query.code,
                client_id: '1879',
                client_secret: 'JW3td7LWy85KkYge9agsXaeTL77DRuza'
            }
        }, function(err, response, body) {

        });
    });

    app.get('/login', function(req, res) {
        res.sendFile('login.html', { root: './public' });
    })
};