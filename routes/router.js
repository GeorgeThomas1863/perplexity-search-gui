import express from "express";
import requireAuth from "./auth-routes.js";

import { authControl } from "../controllers/auth-control.js";
import { getBackendValueControl } from "../controllers/data-control.js";
import { displayMain, display404, display500, display401 } from "../controllers/display-control.js";

import CONFIG from "../config/config.js";

const router = express.Router();

router.get("/401", display401);

//no auth required obv
router.post("/site-auth-route", authControl);

router.post("/get-backend-value-route", requireAuth, getBackendValueControl);

router.get("/", requireAuth, displayMain);

router.use(display404);

router.use(display500);

export default router;
