const router = require('express').Router();
const { Responses } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/', withAuth, (req, res) => {
  if (req.session) {
    Responses.create({
      response: req.body.response,
      question_id: req.body.question_id,
      user_id: req.session.user_id
    })
      .then(dbResponseData => {
        console.log(dbResponseData);
        res.json(dbResponseData);
      })
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