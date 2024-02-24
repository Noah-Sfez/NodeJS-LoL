import express from 'express';
import champion from './Routes/ChampionRoutes.js';
import importchampions from './Routes/ImportChampionsRoutes.js'

const router = express.Router();

router.use('/champions', champion);
router.use('/importchampions', importchampions);

export default router;