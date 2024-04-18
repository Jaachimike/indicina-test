const mongoose = require("mongoose")


const globalTeardown = async () => {
    mongoose.connection.close()
}


module.exports = globalTeardown