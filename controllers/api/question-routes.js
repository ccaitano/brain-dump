const router = require('express').Router();
const { User, Responses, Questions, Moods } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:id', async (req, res) => {
  try {
    const questionData = await Questions.findByPk(req.params.id, {
      attributes: ['id', 'question', 'mood_id']
    });
    console.log(questionData);
    if (!questionData) {
      res.status(404).json({ message: 'No Question Found :(' });
      return;
    }

    const question = (questionData).get({ plain: true });
    console.log(question);
    res.render('view_question', { question });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;