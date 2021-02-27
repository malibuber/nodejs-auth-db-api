const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        min: 6,
        max: 50
    },
    email:{
        type: String,
        required: true,
        min: 6,
        max: 50
    },
    password: {
        type: String,
        required: true,
        min:6,
        max: 10
    },
    date: {
        type: Date,
        default: Date.now

    }
})


module.exports =  mongoose.model('User', userSchema)