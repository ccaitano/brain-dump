const { Moods } = require('../models');

const moodData = [
  {
    id: 1,
    mood_name: 'happy',
    count: 0,
    emoji_id: '😀'
  },
  {
    id: 2,
    mood_name: 'sad',
    count: 0,
    emoji_id: '😭'
  },
  {
    id: 3,
    mood_name: 'angry',
    count: 0,
    emoji_id: '🤬'
  },
  {
    id: 4,
    mood_name: 'introspective',
    count: 0,
    emoji_id: '🤯'
  },
  {
    id: 5,
    mood_name: 'silly',
    count: 0,
    emoji_id: '😱'
  },
  {
    id: 6,
    mood_name: 'random',
    count: 0,
    emoji_id: '😵'
  }
];

const seedMoods = () => Moods.bulkCreate(moodData);
module.exports = seedMoods;