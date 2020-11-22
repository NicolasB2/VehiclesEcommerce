const mongoose = require('mongoose');
const { Schema } = mongoose;

let userSchema = new Schema(
    {
        userName: {type: String, required: true},
        password: {type: String, required: true},
        fullName: {type: String, required: true},
        idNumber: {type: String, required: true},
        email:    {type: String, required: true},
        phoneNumber: {type: String, required:true},
        rol: {type: String, required:true},
    }
)

module.exports = mongoose.model('user', userSchema);