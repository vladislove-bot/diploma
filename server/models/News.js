const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
      type: String,
      require: true
  },
})

module.exports = mongoose.model('News', Schema)
