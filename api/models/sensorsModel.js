const mongoose = require('mongoose');
const Place = require('./placesModel');
const Schema = mongoose.Schema;

const SensorSchema = new Schema ({
    name: {
        type: String,
        required: 'Enter the new name of the sensor'
    },
    description: {
        type: String,
        required: 'Enter the description for the sensor'
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    place: {
        type: Schema.Types.ObjectId,
        ref: 'Place',
        required: 'Enter the place id'
    }
});

module.exports = mongoose.model('Sensor', SensorSchema);