const express = require('express');
const logger = require('morgan');
const methodOverride = require('method-override');


const port = process.env.PORT || 3002;

const app = express();

require('dotenv').config();
require('./config/database');

// MOUNT MIDDLEWARE
app.use(methodOverride('_method'));
app.use(express.json());
app.use(logger('dev'));
app.use(require('cors')());


// MOUNT ROUTES
app.use('/api/users', require('./routes/api/users'));
app.use('/todos', require('./routes/todos'));

// TELL APP TO LISTEN
app.listen(port, function() {
    console.log(`Express is listening on ${port}...`);
})