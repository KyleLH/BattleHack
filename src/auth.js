var passport = require('passport'),
    VenmoStrategy = require('passport-venmo').Strategy,
    models = require('./models')();

passport.use(new VenmoStrategy({
    clientID: '1879',
    clientSecret: 'JW3td7LWy85KkYge9agsXaeTL77DRuza',
    callbackURL: 'http://localhost/auth/venmo/callback'
}, function(accessToken, refreshToken, profile, done) {
    models.User.findOrCreate({
        VenmoId: profile.id,
        name: profile.display_name,
        profilePictureURL: profile.profile_picture_url
    }, function(err, user) {
        return done(err, user);
    });
}));