// JSONWebToken Library
const jwt = require('jsonwebtoken');

// SECRET
const SECRET = process.env.SECRET;

// DEFINE AN EXPORT OUr AUTH MIDDLEWARE
module.exports = function(req, res, next) {
    // 1) GRAB THE AUTHORIZATION HEADER VALUE FROM THE REQUEST
    let token = req.get('Authorization');
    // 2) TAKE JUST THE TOKEN PORTION FROM THAT VALUE 
    if(token) {
        token = token.replace('Bearer ', '');
        if(token != 'null') {
            // 3) VERIFY AND DECODE THE TOKEN
            jwt.verify(token, SECRET, function(err, decodedToken) {
                // 4) GRAB THE USER PORTION FROM THE TOKEN PAYLOAD AND ADD THEM TO THE REQUEST OBJECT
                if(err) {
                    next(err);
                } else {
                    req.user = decodedToken.user;
                    next();
                }
            })
        }
    } else {
        next();
    }

}

