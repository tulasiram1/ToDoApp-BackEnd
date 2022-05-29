const mongoose = require('mongoose');


const Schema = mongoose.Schema({
    name: {
        type: String,
        maxLength: 25
    }
});


const model = mongoose.model('tasks', Schema);
module.exports = model;