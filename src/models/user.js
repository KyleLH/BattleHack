var mongoose = require('mongoose');

module.exports = function() {
    var UserSchema = mongoose.Schema({
        VenmoId: String,
        name: String,
        profilePictureURL: String
    });

    return mongoose.models.User ? mongoose.models.User : mongoose.model('User', UserSchema);
};