const mongoose = require("mongoose");
const { Schema } = mongoose;

const createCart = new Schema({
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

const cartModel = mongoose.model('cart', createCart);
module.exports = cartModel;