const mongoose = require('mongoose');
const { Schema } = mongoose;

let userSchema = new Schema(
    {
        userName: {type: String},
        password: {type: String},
        fullName: {type: String},
        idNumber: {type: String},
        email:    {type: String},
        phoneNumber: {type: String},
        rol: {type: String},
        listOfVehicles: {type: Object},
    }
)

module.exports = mongoose.model('user', userSchema);