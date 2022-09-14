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