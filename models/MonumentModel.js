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
    Snumber: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    streetview : {
        type: String,
        required: true,
        default: "",
    },
    quiz : {
        type: Array,
        required : true,
        default: []
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
    ytUrl: {
        type: String,
        required: false,
    }
});

const Monument = new mongoose.model('Monument', monumentSchema);

module.exports = Monument;