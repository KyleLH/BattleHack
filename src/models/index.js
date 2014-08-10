var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/floc');

module.exports = function() {
    return {
        Snapshot: require('./snapshot')(),
        Deal: require('./deal')(),
        User: require('./user')()
    }
};