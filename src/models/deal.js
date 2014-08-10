var mongoose = require('mongoose');

module.exports = function() {
    var DealSchema = mongoose.Schema({
        address: String,
        latitude: Number,
        longitude: Number,
        details: String
    });

    return mongoose.models.Deal ? mongoose.models.Deal : mongoose.model('Deal', DealSchema);
};