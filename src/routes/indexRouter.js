import express from 'express';
import { FederalDist, Region, Municipal } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const federalDists = await FederalDist.findAll();
  const regions = await Region.findAll();
  const municipals = await Municipal.findAll();
  const initState = { federalDists, regions, municipals };
  res.render('Layout', initState);
});

router.get('/reg', async (req, res) => {
  const federalDists = await FederalDist.findAll();
  const regions = await Region.findAll();
  const municipals = await Municipal.findAll();
  const initState = { federalDists, regions, municipals };
  res.render('Layout', initState);
});

router.get('/auth', (req, res) => {
  res.render('Layout');
});

router.get('/initiative', (req, res) => {
  res.render('Layout');
});

export default router;
