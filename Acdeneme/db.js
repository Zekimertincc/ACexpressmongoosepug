const e = require("express");
const mongoose = require("mongoose");
const DATABASE_URL = "mongodb+srv://zekimertinc:<Gsl195565!>@ac.ll8ut9p.mongodb.net/?retryWrites=true&w=majority&appName=ac";

mongoose.connect(DATABASE_URL, {useNewUrlParser: true});


const UserSchema = new mongoose.Schema({   
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim : true
    },  
    password: {
        type: String,
        required: true
    } },{collection: 'users'});

    
exports.User = mongoose.model("User", UserSchema);
    