const router = require('express').Router();
const { User, Moods, Questions, Responses } = require('../models');
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

router.get('/signup', (req, res) => {
  if(req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});


// GET Dashboard
router.get('/dashboard', withAuth, (req, res) => {
  Moods.findAll({
    attributes: ['id','mood_name','count']
  })
    .then(moodData => {
      const moods = moodData.map((mood) => mood.get({ plain: true }));
      console.log(moods);
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
  console.log(req.params.id);

  Questions.findAll({
    attributes: ['id','mood_id','question'],
    where: {
      mood_id: req.params.id
    },
  })
    .then(questionData => {
      const questions = questionData.map((question) => question.get({ plain: true }));
      console.log(questions);
      const questionNum = Math.floor((Math.random()* questions.length));
      const question = questions[questionNum];
      res.render('response', { question, logged_in: true });
    })
    .catch (err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/credits', (req, res) => {
  res.render('credits');
});

// GET all responses
router.get('/viewall', withAuth, (req, res) => {
  Responses.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ['id', 'response', 'question_id', 'user_id'],
    include: [{model: Questions, attributes: ['id', 'question', 'mood_id']}],
  })

    .then(dbResponseData => {
      const responses = dbResponseData.map(response => response.get({plain: true}));
      console.log(responses);
      res.render('viewEntries', {responses});
    })



    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;