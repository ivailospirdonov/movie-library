const mongoose = require('mongoose');


const movieScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    genres: {
        type: Object,
        required: true
    },
    runtime: {
        type: Number,
        required: true
    },
    premiered:{
        type: String,
        required: true
    },
    officialSite:{
        type: String,
        required: true,
    },
    image: {
        type: Object,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    favorite: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 0
    },
    note: {
        type: String,
        default: ''
    }
});

module.exports = mongoose.model('Movie', movieScheme);