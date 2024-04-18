const mongoose = require("mongoose")
require("dotenv").config();


const globalSetup = async () => {
    mongoose.connect(process.env.MONGODB_URI)
}


module.exports = globalSetup