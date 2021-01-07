// REQUIRE MODULES
const User = require('../models/user');

// HANDLE EXPORTS
module.exports = {
    signup,
};

// DEFINE A SIGNUP CONTROLLER ACTION
async function signup(req, res) {
    try {
        const user = new User.create(req.body);
        res.json({ user })
    } catch (err) {
        res.status(404).json(err);
    }
}