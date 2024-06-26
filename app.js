require("dotenv").config()

const express = require("express")
const app = express()
const port = process.env.PORT

const conn = require("./db/conn")
conn()

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log(`Listening on port:${port}`)
}) 