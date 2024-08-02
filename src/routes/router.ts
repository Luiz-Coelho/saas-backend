import customersRouter from "../routes/customers.route";
import categoriesRouter from "../routes/categories.route";
import tracksRouter from "../routes/tracks.route";
import automobileRouter from "./automobiles.route";
import { Router } from "express";

const router = Router();

router.use("/customers", customersRouter);
router.use("/categories", categoriesRouter);
router.use("/tracks", tracksRouter);
router.use("/automobiles", automobileRouter);

export default router;
