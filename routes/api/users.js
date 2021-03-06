// REQUIRE MODULES
const express = require('express');

// SET UP ROUTER OBJECT
const router = express.Router();

// REQUIRE THE CONTROLLER
const usersCtrl = require('../../controllers/users');

// DEFINE THE SIGNUP ROUTE
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);

// EXPORT YOUR ROUTER
module.exports = router;