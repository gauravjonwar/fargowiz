const mongoose = require("mongoose") //module


const studentSchema = mongoose.Schema({
    name:String,
    email:String,
    phonenumber:Number
})

module.exports = mongoose.model('student',studentSchema);