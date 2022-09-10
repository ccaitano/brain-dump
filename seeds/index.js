// const sequelize = require('../config/connection');
// const { User, Mood, Questions, Responses } = require('../models');

// const userData = require('./userData');
// const moodData = require('./moodData');
// const questionData = require('./questionData');

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });

//   await mood.bulkCreate()

//   process.exit(0);
// };

// seedDatabase();


const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedMoods = require('./moodData');
const seedQuestions = require('./questionData');
const seedResponses = require('./responseData');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUser();
  await seedMoods();
  await seedQuestions();
  await seedResponses();
  process.exit(0);
};

seedAll();