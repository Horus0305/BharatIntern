const mongo = require('mongoose');
const regSchema = new mongo.Schema({
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const regColl = new mongo.model('userCollection', regSchema);
module.exports = regColl;