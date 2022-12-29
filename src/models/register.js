const mongoose = require("mongoose");
const { Schema } = mongoose;

const registerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    profile: {
        type: String,
    }
});

const registerUser = mongoose.model('user', registerSchema);
module.exports = registerUser;