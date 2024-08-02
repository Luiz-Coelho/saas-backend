import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";

const validate =
  (schema: AnyZodObject, source: "body" | "query" | "params") =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req[source]);
      next();
    } catch (error: any) {
      return res.status(400).send(error);
    }
  };

export default validate;
