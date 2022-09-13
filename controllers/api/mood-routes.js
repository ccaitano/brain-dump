const router = require('express').Router();
const { Moods } = require('../../models');


router.get('/', (req, res) => {
    Moods.findAll({})
    .then(dbMoodData => res.json(dbMoodData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    if(req.session) {
        Moods.create({
            id: req.body.id,
            user_id: req.session.user_id,
            mood_name: req.body.mood_name
        })
        .then(dbMoodData => res.json(dbMoodData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
});

router.delete('/:id', (req,res) => {
    Moods.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbMoodData => {
        if(!dbMoodData) {
            res.status(404).json({ message: 'No mood with this matching id'});
            return;
        }
        res.json(dbMoodData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router; 
