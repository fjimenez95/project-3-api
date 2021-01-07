// REQUIRE MODULES
const User = require('../models/user');
const SECRET = process.env.SECRET;
const jwt = require('jsonwebtoken');

// HANDLE EXPORTS
module.exports = {
    signup,
};

// DEFINE A SIGNUP CONTROLLER ACTION
async function signup(req, res) {
    try {
        const user = await User.create(req.body);
        const token = createJWT(user);
        res.json({ token });
    } catch (err) {
        res.status(404).json(err);
    }
}

// HELPER FUNCTION FOR GENERATING JWTs
function createJWT(user) {
    return jwt.sign(
      {user: user}, 
      SECRET, 
      {expiresIn: '24h'},
    );
    // If the key value pair is the same value as above, you only need to do { user }
  }