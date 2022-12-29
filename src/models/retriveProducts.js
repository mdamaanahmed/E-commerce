const mongoose = require("mongoose");
const { Schema } = mongoose;

const retriveProducts = new Schema({
    name: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    reviews: {
        type: Number,
        required: true
    },
    stars: {
        type: Number,
        required: true
    },
    discount: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
});

const retriveProductsModel = mongoose.model('products', retriveProducts);
module.exports = retriveProductsModel;