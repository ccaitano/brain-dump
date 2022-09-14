// const sequelize = require('../config/connection');
const { Moods } = require('../models');

const moodData = [
  {
    id: 1,
    mood_name: 'happy',
    count: 1
  },
  {
    id: 2,
    mood_name: 'sad',
    count: 1
  },
  {
    id: 3,
    mood_name: 'angry',
    count: 1
  },
  {
    id: 4,
    mood_name: 'introspective',
    count: 1
  },
  {
    id: 5,
    mood_name: 'silly',
    count: 1
  },
  {
    id: 6,
    mood_name: 'random',
    count: 1
  }
];

const seedMoods = () => Moods.bulkCreate(moodData);
module.exports = seedMoods;