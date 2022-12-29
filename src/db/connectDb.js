const mongoose = require('mongoose');

const connectDb = () => {
    mongoose.connect('mongodb://localhost:27017/e-commerce')
        .then(() => console.log("Db connection successfull."))
        .catch(err => console.log(err))
}

module.exports = connectDb;