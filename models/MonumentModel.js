const mongoose = require('mongoose');

const monumentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    place:{
        type: String,
        required: true
    },
    Snumber : {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    info: {
        type: String,
        required: true
    },
});

const Monument = new mongoose.model('Monument', monumentSchema);

module.exports = Monument;