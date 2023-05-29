import { Router } from "express";
import IncidentsRoute from "./incidents/incidents.controller";

const router = Router();
const entryPoint = `/api/`;

router.use("/healthcheck", require("express-healthcheck")());
router.use(`${entryPoint}incidents`, IncidentsRoute);

export default router;
