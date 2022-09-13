const router = require('express').Router();
const { User, Responses, Questions, Moods } = require('../../models');

router.get('/', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  User.findOne({
    attributes: { exclude: ['password']},
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Questions,
        attributes: ['id', 'question', "question_type"]
      },
      {
        model: Responses,
        attributes: ['id', 'response', 'question_id', 'user_id'],
        include: {
          model: Moods,
          attributes: ['mood_name']
        }
        
      }
    ]
  }) 
  .then(dbUserData => {
    if(!dbUserData) {
      res.status(404).json({message: 'No user matches this id'});
      return;
    }
    res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

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
      // req.session.username = dbUserData.username;
      // req.session.id = dbUserData.id;
      // req.session.loggedIn = true;

      res.json(dbUserData);
    });
  });
});

router.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
  .then(dbUserData => {
    if(!dbUserData) {
      res.status(400).json({ message: 'No user in our system with that email address.'})
      return;
    }

    const verifyPassword = dbUserData.checkPassword(req.body.password);
    if(!verifyPassword) { 
      res.status(400).json({ message: 'Wrong password'});
      return;
    }

    req.session.id = dbUserData.id;
    // req.session.email = dbUserData.email;
    
    req.session.save(() => {
      req.session.loggedIn = true;
      res.json({ user: dbUserData, message: 'Welcome'});
    });
  });
});


router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    })
  }
  else {
    res.status(404).end();
  }
});

router.put('/:id', (req, res) => {
  User.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then (dbUserData => {
    if (!dbUserData[0]) {
      res.status(404).json({ message: 'No user found with this id'});
      return;
    }
    res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  User.detroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({
        message: 'No user with matching ID'
      });
      return;
    }
    res.json(dbUserData);
  })
  .catch (err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req,res) => {
  User.destroy({
    wjere: {
      id: req.params.id
    }
  })
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'No user with matching with this id'});
      return;
    }
    res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
// CREATE new user
// router.post('/', async (req, res) => {
//   try {
//     const dbUserData = await User.create({
//       username: req.body.username,
//       email: req.body.email,
//       password: req.body.password,
//     });

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;

//       res.status(200).json(dbUserData);
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// router.post('/login', async (req, res) => {
//   try {
//     // TODO: Add a comment describing the functionality of this expression
//     const userData = await User.findOne({ where: { email: req.body.email } });

//     if (!userData) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password, please try again' });
//       return;
//     }

//     // TODO: Add a comment describing the functionality of this expression
//     const validPassword = await userData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password, please try again' });
//       return;
//     }

//     // TODO: Add a comment describing the functionality of this method
//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;

//       res.json({ user: userData, message: 'You are now logged in!' });
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.post('/logout', (req, res) => {
//   if (req.session.logged_in) {
//     // TODO: Add a comment describing the functionality of this method
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });

// module.exports = router;
