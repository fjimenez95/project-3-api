// REQUIRE MODULES
const express = require('express');

// SET UP ROUTER OBJECT
const router = express.Router();

// REQUIRE THE CONTROLLER
const todosCtrl = require('../controllers/todos');

// DEFINE THE SIGNUP ROUTE
router.get('/', todosCtrl.index);
router.post('/create', todosCtrl.create);
router.get('/:id', todosCtrl.edit);

// EXPORT YOUR ROUTER
module.exports = router;