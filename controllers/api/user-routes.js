const router = require('express').Router();
const { User, Responses, Questions, Moods } = require('../../models');

// CREATE a new user
router.post('/', (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
    .then(dbUserData => {
      req.session.username = dbUserData.username;
      req.session.id = dbUserData.id;
      req.session.loggedIn = true;
      req.session.save(() => {
        res.json(dbUserData);
      });
    });
});

// LOGIN with email and password
router.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(dbUserData => {
      if(!dbUserData) {
        res.status(400).json({ message: 'No user in our system with that email address.'});
        return;
      }
      // Need to get this to work
      const verifyPassword = dbUserData.checkPassword(req.body.password);
      if(!verifyPassword) {
        console.log("Wrong password");
        console.log(dbUserData.password);
        console.log(req.body.password);
        res.status(400).json({ message: 'Wrong password'});
        return;
      }
      req.session.user_id = dbUserData.id;
      req.session.email = dbUserData.email;
      req.session.logged_in = true;

      req.session.save(() => {
        res.json({ user: dbUserData, message: 'Welcome'});
      });
    });
});

// LOGOUT user
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;