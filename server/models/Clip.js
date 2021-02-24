const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    url: {
        type: String,
        require: true
    },
})

module.exports = mongoose.model('Clips', Schema)
