import express from 'express';
import { hash, compare } from 'bcrypt';
import {
  User, FederalDist, Region, Municipal,
} from '../../db/models';

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).json({ message: 'email или пароль указаны неверно' });

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ message: 'email не найден' });

    const isPassValid = await compare(password, user.password);
    if (!isPassValid) return res.status(400).json({ message: 'password is invalid' });
    req.session.user = { id: user.id, name: user.name, email: user.email };
    res.json({ id: user.id, name: user.name, email: user.email });
  } catch (err) {
    console.error(err);
  }
});

router.post('/reg', async (req, res) => {
  const {
    name, email, password, federalDist, region, municipal,
  } = req.body;
  if (!name || !email || !password || !federalDist || !region) return res.status(400).json({ message: 'Все поля должны быть заполнены' });

  const hashPassword = await hash(password, 10);

  try {
    if (await User.findOne({ where: { email } })) return res.status(400).json({ message: 'Ну указанный адрес электронной почты уже есть зарегистрированный пользователь' });
    const newUser = await User.create({
      name, email, password: hashPassword, federalDist_id: federalDist, region_id: region, municipal_id: municipal,
    });
    req.session.user = { id: newUser.id, name: newUser.name, email: newUser.email };
    res.json({ id: newUser.id, name: newUser.name, email: newUser.email });
  } catch (err) {
    console.error(err);
  }
});
router.get('/account', async (req, res) => {
  const user = await User.findOne({
    include: { all: true },
    where: { id: req.session.user.id },
    raw: true,
  });
  // console.log(user);
  const initState = { user };
  res.render('Layout', initState);
});


router.get('/logout', (req, res) => {
  res.clearCookie('user_sid'); // удалить куку
  req.session.destroy(); // завершить сессию
  res.redirect('/');
});

export default router;
