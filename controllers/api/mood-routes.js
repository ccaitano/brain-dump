const router = require('express').Router();
const { Moods } = require('../../models');
const withAuth = require('../../utils/auth');

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
