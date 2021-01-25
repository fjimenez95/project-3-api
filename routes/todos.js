// REQUIRE MODULES
const express = require('express');

// SET UP ROUTER OBJECT
const router = express.Router();

// REQUIRE THE CONTROLLER
const todosCtrl = require('../controllers/todos');

// DEFINE THE SIGNUP ROUTE
// AUTHORIZATION MIDDLEWARE - this creates req.user from the authorization headers we sent from react
router.use(require('../config/auth'));
router.get('/', checkAuth, todosCtrl.index);
router.delete('/delete/:id', todosCtrl.delete);
router.post('/create', todosCtrl.create);
router.get('/:id', todosCtrl.show);
router.post('/:id', todosCtrl.edit)

function checkAuth(req, res, next) {
    console.log(req.user);
    // Do we have req.user?
    if(req.user) return next();
    return res.status(401).json({msg: 'Not Authorized!'});
}

// EXPORT YOUR ROUTER
module.exports = router;