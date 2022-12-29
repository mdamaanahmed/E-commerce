const mongoose = require("mongoose");
const { Schema } = mongoose;

const createBuy = new Schema({
    userId: {
        type: String,
        required: true,
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: "products"
    },
    qty: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    }
});

const buyModel = mongoose.model('buy', createBuy);
module.exports = buyModel;