import { Response } from "express";
import { mongo } from "mongoose";

export default function handleError(
  res: Response,
  error: any,
  field?: "licensePlate" | "category" | "status"
) {
  if (error instanceof mongo.MongoError) {
    if (error.code === 11000) {
      let message;
      switch (field) {
        case "licensePlate":
          message = "Já existe outro automóvel cadastrado com essa placa.";
          break;
        case "category":
          message = "Já existe outra finalidade cadastrada com esse nome.";
          break;
        case "status":
          message = "Já existe outro status cadastradocom esse nome.";
          break;
        default:
          message = "Já existe essa informação cadastrada no sistema.";
          break;
      }

      return res.status(400).json({
        message,
        details: error.message,
      });
    }
  }

  return res.status(500).json({
    message: "Internal server error",
    details: "An unknown error occurred",
  });
}
