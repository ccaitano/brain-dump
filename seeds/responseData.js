// const sequelize = require('../config/connection');
const { Responses } = require('../models');

const responseData = [
  {
    id: 1,
    response: '1. Sail the Meditteranean, 2. Hike the Appalacian Trail, 3. See the Northern Lights from Iceland',
    question_id: 7,
    user_id: 2
  },
  {
    id: 2,
    response: '1. Galapagos Islands, 2. New Zealand, 3. Atacama Desert',
    question_id: 8,
    user_id: 4
  }
];

const seedResponses = () => Responses.bulkCreate(responseData);
module.exports = seedResponses;