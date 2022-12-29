const mongoose = require("mongoose");
const { Schema } = mongoose;

const tokenSchema = new Schema({
    tokens: [
        {
            token: {
                type: String,
                required: true,
            }
        }
    ],
    userId: {
        type: String,
        required: true,
    }
});

const userToken = mongoose.model('token', tokenSchema);
module.exports = userToken;