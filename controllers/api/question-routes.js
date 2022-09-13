const router = require('express').Router();
const { User, Responses, Questions, Moods } = require('../../models');

// router.get('/', async (req, res) => {
//   try {
//     const questionData = await User.findAll();
//     res.status(200).json(questionData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


router.get('/:id', withAuth, async (req, res) => {
  try {
    const questionData = await Questions.findByPk(req.params.id, {
      attributes: ['id', 'question', 'mood_id'], include: [{ model: User, attributes: ['username']}]
    });

    if (!questionData) {
      res.status(404).json({ message: 'No Question Found :(' });
      return;
    }

    const question = (await dbQuestionData).get({ plain: true });
    res.render('view_question', {question, logged_in: true});
  } catch (err) {
    res.status(500).json(err);
  }
});

// // CREATE a location
// router.post('/', async (req, res) => {
//   try {
//     const questionData = await Question.create(req.body);
//     res.status(200).json(questionData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// // DELETE a location
// router.delete('/:id', async (req, res) => {
//   try {
//     const questionData = await question.destroy({
//       where: {
//         id: req.params.id
//       }
//     });

//     if (!questionData) {
//       res.status(404).json({ message: '___________________' });
//       return;
//     }

//     res.status(200).json(questionData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;