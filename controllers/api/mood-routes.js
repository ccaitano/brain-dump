const router = require('express').Router();
const { Moods } = require('../../models');
const withAuth = require('../../utils/auth');

// GET Mood data
router.get('/', (req, res) => {
  Moods.findAll({
    attributes: ['id','mood_name','count', 'emoji_id']
  })
    .then(moodData => {
      const moods = moodData.map((mood) => mood.get({ plain: true }));
      res.send({ moods });
    })
    .catch (err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// UPDATE Mood count
router.put('/:id', withAuth, (req, res) => {
  Moods.update({
    count: req.body.count
  }, {
    where: {
      id: req.params.id
    }
  })
    .then(dbMoodData => {
      if (!dbMoodData) {
        res.status(404).json({ message: 'No Mood Found with this ID' });
        return;
      }
      res.json(dbMoodData);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;
