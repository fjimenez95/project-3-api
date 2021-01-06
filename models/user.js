const mongoose = require('mongoose');
const Schema = mongosee.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        // Lowercases value before going into database
        lowercase: true, 
    },
    password: {
        type: String,
    },
}, { timestamps: true })