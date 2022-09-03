const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BuildingSchema = new Schema({
    name: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    postal: { type: String },
    plans: [{
        monthsFree: Number,
        label: String,
        price: String
    }]
});

module.exports = mongoose.model('building', BuildingSchema);