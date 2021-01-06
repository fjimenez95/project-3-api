const mongoose = require('mongoose');
const Schema = mongosee.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

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

userSchema.pre('save', function(next) {
    const user = this;
    // Accounts for when users change email or name only
    if(!user.isModified('password')) return next();
    bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
        if(err) return next(err);
        user.password = hash;
        next();
    }) 
});

module.exports = mongoose.model('User', userSchema);