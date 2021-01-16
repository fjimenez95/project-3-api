// REQUIRE MODULES
const User = require('../models/user');
const SECRET = process.env.SECRET;
const jwt = require('jsonwebtoken');

// HANDLE EXPORTS
module.exports = {
    signup,
    login,
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

async function login(req, res) {
try {
    // Find the user by email in mongodb
    // findOne returns an OBJECT - that is why we are using it
    const user = await User.findOne({ email: req.body.email });
    // If user found - move on to check password
    // If !user found - send back a 401 "bad credentials"
    if(!user) return res.status(401).json({ err: 'bad credentials' });
    // Check password using an instance method we need to define in user model
    user.comparePassword(req.body.password, (err, isMatch) => {
        if(isMatch) {
            // If password matched, send back a 200 response (OK)
            const token = createJWT(user);
            res.json({ token });
        } else {
            // However, if !password matched, send back a 401 "bad credentials"
            return  res.status(401).json({ err: 'bad credentials' });
        }
    });
} catch (error) {
    return res.status(400).json(err);
}
}

function index(req, res) {
    return User.findOne
}
  