const mongoose = require('mongoose');
 
const ShowSchema = new mongoose.Schema({
    name: {type: String},
    genre: {type: String},
    release_year: {type: Number},
}, {timestamps: true});
 
const Show = mongoose.model('show', ShowSchema);
 
module.exports = Show;