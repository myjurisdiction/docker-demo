const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    name : String,
    age : Number
}, {
    timestamps : true
})

module.exports = mongoose.model('persons', PersonSchema);