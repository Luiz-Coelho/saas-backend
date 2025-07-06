import customersRouter from "../routes/customers.route";
import categoriesRouter from "../routes/categories.route";
import tracksRouter from "../routes/tracks.route";
import automobileRouter from "./automobiles.route";
import statusRouter from "./status.route";
import { Router } from "express";

const router = Router();

router.use("/customers", customersRouter);
router.use("/categories", categoriesRouter);
router.use("/tracks", tracksRouter);
router.use("/automobiles", automobileRouter);
router.use("/status", statusRouter);

export default router;
