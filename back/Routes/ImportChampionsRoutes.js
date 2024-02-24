// ImportChampionsRoutes.js
import express from "express";
import importChampions from "../Controller/importChampion.js";

const router = express.Router();

router.post("/", importChampions);

export default router;
