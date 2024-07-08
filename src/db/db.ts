import { connect } from "mongoose";

const url = process.env.DB_URL

export default async function main() {
  if(!url) {
    throw new Error("No DB_URL env defined")
  }

  try {
    await connect(url)
    console.log("Connected to Database!")
  } catch (error) {
    console.log(error)
  }
}
