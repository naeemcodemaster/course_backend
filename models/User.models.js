const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true});

const model = mongoose.model("user", Schema);
module.exports = model;
