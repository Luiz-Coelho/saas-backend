const mongoose = require("mongoose")
require("dotenv").config()

async function main() {
    try {    
        await mongoose.connect(process.env.DB_URI)
        console.log("Conectado ao Banco de Dados")
    } catch (error) {
        console.log(`Error ${error}`)
    }
}

module.exports = main