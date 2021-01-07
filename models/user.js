const mongoose = require('mongoose');
const Schema = mongoose.Schema;
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

userSchema.set('toJSON', {
    transform: function(doc, ret) {
        delete ret.password;
        return ret;
    }
})

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