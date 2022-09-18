const { Responses } = require('../models');

const responseData = [
  {
    id: 1,
    response: 'EXAMPLE: 1. Sail the Mediteranean, 2. Hike the Appalacian Trail, 3. See the Northern Lights from Iceland',
    question_id: 7,
    user_id: 2
  }
];

const seedResponses = () => Responses.bulkCreate(responseData);
module.exports = seedResponses;