import express from 'express';
// import session from 'express-session';
import {
  FederalDist, Region, Municipal, Initiative, User, Level,
} from '../../db/models';
import authCheck from '../middlewares/authCheck';

const router = express.Router();

router.get('/', async (req, res) => {
  const federalDists = await FederalDist.findAll();
  const levels = await Level.findAll();
  const regions = await Region.findAll();
  const municipals = await Municipal.findAll();
  // const allInitiatives = await Initiative.findAll();
  const allInitiatives = await Initiative.findAll({
    include: [
      { model: User, attributes: ['name'] },
      { model: Level, attributes: ['name'] },
    ],
    raw: true,
  });
  const initState = {
    federalDists, regions, municipals, allInitiatives, levels,
  };
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

// router.get('/initiative', (req, res) => {
//   res.render('Layout');
// });

router.get('/initiatives/:id', async (req, res) => {
  const allInitiatives = await Initiative.findAll();
  const initiative = await Initiative.findOne({
    include: [
      { model: User, attributes: ['name'] },
      { model: Level, attributes: ['name'] },
    ],
    where: { id: req.params.id },
    raw: true,
  });
  // console.log('initiative___________', initiative);
  const initState = { initiative, allInitiatives };
  res.render('Layout', initState);
});

router.get('/initiatives/:authorId/author', async (req, res) => {
  const allInitiatives = await Initiative.findAll();
  const authorInitiatives = await Initiative.findAll({
    include: [
      { model: User, attributes: ['name'] },
      { model: Level, attributes: ['name'] },
    ],
    where: { user_id: req.params.authorId },
    raw: true,
  });
  // console.log(initiative);
  const initState = { authorInitiatives, allInitiatives };
  res.render('Layout', initState);
});

router.post('/initiatives/:id/voteFor', authCheck, async (req, res) => {
  const findInitiative = await Initiative.findOne({ where: { id: req.params.id } });
  await findInitiative.increment('vote_for', { by: 1 });
  res.json({ findInitiative });
});

router.post('/initiatives/:id/voteAgainst', authCheck, async (req, res) => {
  const findInitiative = await Initiative.findOne({ where: { id: req.params.id } });
  await findInitiative.increment('vote_against', { by: 1 });
  res.json({ findInitiative });
});

router.route('/newInitiative')
  .get(async (req, res) => {
    const federalDists = await FederalDist.findAll();
    const levels = await Level.findAll();
    const regions = await Region.findAll();
    const municipals = await Municipal.findAll();
    // const allInitiatives = await Initiative.findAll();
    const allInitiatives = await Initiative.findAll({
      include: [
        { model: User, attributes: ['name'] },
        { model: Level, attributes: ['name'] },
      ],
      raw: true,
    });
    const initState = {
      federalDists, regions, municipals, allInitiatives, levels,
    };
    res.render('Layout', initState);
  })
  .post(authCheck, async (req, res) => {
    // console.log(req.body);
    const {
      name, description, term, level,
    } = req.body;
    if (!name || !description || !term || !level) return res.status(400).json({ message: 'Все поля должны быть заполнены' });
    const newInitiative = await Initiative.create({
      name,
      description,
      user_id: req.session.user.id,
      term,
      level_id: Number(level),
    });
    res.json(newInitiative);
  });

export default router;
