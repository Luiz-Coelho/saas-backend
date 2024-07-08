import express from "express"
import "./config/config"
import db from "./db/db"
import customersRouter from "./routes/customers.route"

const app = express()
app.use(express.json())

const PORT = process.env.PORT


app.listen(PORT, async () => {
  console.log(`Running on port ${PORT}`)
  await db()
  app.use("/customers", customersRouter)
})