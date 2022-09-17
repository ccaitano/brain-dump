const router = require('express').Router();
const { Responses, Questions } = require('../../models');
const withAuth = require('../../utils/auth');
// // GET all responses
// router.get('/', withAuth, (req, res) => {
//   Responses.findAll({
//     attributes: ['id', 'response', 'question_id', 'user_id'],
//     include: [{model: Questions, attributes: ['id', 'question', 'mood_id']}],
//   })

//   .then(dbResponseData => 
//     {res.json(dbResponseData)
//       const responses = dbResponseData.map(response => response.get({plain: true}));
//       res.render('viewEntries', {responses})
//     })
//   .catch(err => {
//     console.log(err);
//         res.status(500).json(err)
//   });

// CREATE responses
//withAuth when login route is created
router.post('/', withAuth, (req, res) => {
  if (req.session) {
    Responses.create({
      response: req.body.response,
      question_id: req.body.question_id,
      user_id: req.session.user_id
    })
      .then(dbResponseData => res.json(dbResponseData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

router.get('/responses', (req, res) => {
  res.render('responses');
});
module.exports = router;