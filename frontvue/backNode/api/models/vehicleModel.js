const mongoose = require('mongoose');
const { Schema } = mongoose;

let vehicleSchema = new Schema(
    {
        car: {type: String, required: true},
        price: {type: Number, required: true},
        body: {type: String, required: true},
        mileage: {type: Number, required: true},
        engV: {type: Number, required: true},
        engType: {type: String, required:true},
        registration: {type: String, required:true},
        year: {type: String, required:true},
        model: {type: String, required:true},
        drive: {type: String, required:true},
        state: {type: String, requiered:true}

    }
)

module.exports = mongoose.model('vehicle', vehicleSchema);