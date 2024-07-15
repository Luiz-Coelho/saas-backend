import express from "express"
import "./config/config"
import db from "./db/db"
import customersRouter from "./routes/customers.route"
import cors from "cors"
import { corsOptions } from "./config/config"

const app = express()
app.use(cors(corsOptions))
app.use(express.json())


const PORT = process.env.PORT


app.listen(PORT, async () => {
  console.log(`Running on port ${PORT}`)
  await db()
  app.use("/customers", customersRouter)
})