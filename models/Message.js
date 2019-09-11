const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    User: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    content: {
        type: String,
    },
    
    Studio: {
        type: Schema.Types.ObjectId,
        ref: 'Studio'
    },

    create_date: {
        type: Date,
        default: Date.now,
    },
});

const Message = mongoose.model('Message', messageSchema); // collection name 

module.exports = Message;
