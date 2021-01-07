const express = require('express');
const logger = require('morgan');


const port = process.env.PORT || 3002;

const app = express();

require('dotenv').config();
require('./config/database');

// MOUNT MIDDLEWARE
app.use(express.json());
app.use(logger('dev'));
app.use(require('cors')());


// MOUNT ROUTES
app.use('/api/users', require('./routes/api/users'));

// TELL APP TO LISTEN
app.listen(port, function() {
    console.log(`Express is listening on ${port}...`);
})