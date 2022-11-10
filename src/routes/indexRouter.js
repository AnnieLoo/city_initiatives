import express from 'express';
import session from 'express-session';
import {
  FederalDist, Region, Municipal, Initiative,
} from '../../db/models';

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

router.route('/newInitiative')
  .get((req, res) => {
    res.render('Layout');
  })
  .post(async (req, res) => {
    const {
      name, description, term,
    } = req.body;
    if (!name || !description || !term) return res.send(400);
    await Initiative.create({
      name,
      description,
      user_id: 1,
      term,
    });
    res.send(200);
  });

export default router;
