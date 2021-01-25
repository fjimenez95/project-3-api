const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    text: {
        type: 'String'
    },
    user: {
        type: Schema.Types.ObjectId
    }
})


module.exports = mongoose.model('Todo', todoSchema);