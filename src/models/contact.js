const mongoose = require("mongoose");
const { Schema } = mongoose;

const contact = new Schema({
    userId: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    msg: {
        type: String,
        required: true,
    }
});

const contactModel = mongoose.model('contact', contact);
module.exports = contactModel;