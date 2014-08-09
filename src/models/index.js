var mongoose = require('mongoose');

mongoose.connect('localhost');

module.exports = function() {
    return {
        Snapshot: require('./snapshot')()
    }
};