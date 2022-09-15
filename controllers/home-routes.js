const router = require('express').Router();
const { User, Moods, Questions } = require('../models');
const withAuth = require('../utils/auth');

// GET Home Page
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] }
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      layout: 'main',
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET Login Form
router.get('/login', (req, res) => {

  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// GET Dashboard
router.get('/dashboard', withAuth, (req, res) => {
  Moods.findAll({
    attributes: ['id','mood_name','count']
  })
    .then(moodData => {
      const moods = moodData.map((mood) => mood.get({ plain: true }));
      res.render('dashboard', { moods, logged_in: true });
    })
    .catch (err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET Find Your Vibe
router.get('/findyourvibe', withAuth, (req, res) => {
  Moods.findAll({
    attributes: ['id','mood_name','count', 'emoji_id']
  })
    .then(moodData => {
      const moods = moodData.map((mood) => mood.get({ plain: true }));
      res.render('findyourvibe', { moods, logged_in: true });
    })
    .catch (err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET Question for the Day
router.get('/findyourvibe/question/:id', withAuth, (req, res) => {
  const questionNum = Math.floor((Math.random()* 17) + 1);
  console.log(req.params.id);
  console.log(questionNum);
  // Questions.findByPk(questionNum, {
  //   attributes: ['id','mood_id','question'],
  //   where: {
  //     mood_id: req.params.id
  //   },
  // })
  //   .then(dbQuestionData => {
  //     const questions = dbQuestionData.get({ plain: true });
  //     res.render('response', { questions, logged_in: true });
  //   })
  Questions.findAll({
    attributes: ['id','mood_id','question'],
    where: {
      mood_id: req.params.id
    },
  })
    .then(questionData => {
      const questions = questionData.map((question) => question.get({ plain: true }));
      res.render('response', { questions, logged_in: true });
    })
    .catch (err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;