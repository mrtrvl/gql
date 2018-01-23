const mongoose = require('mongoose');
const Sensor = require('./sensorsModel');
const Schema = mongoose.Schema;

const TemperatureSchema = new Schema ({
    sensor: {
        type: Schema.Types.ObjectId,
        ref: 'Sensor',
        required: 'Enter the sensor id'
    },
    temperature: {
        type: Number,
        required: 'Enter the temperature for sensor'
    },
    measuredDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Temperature', TemperatureSchema);