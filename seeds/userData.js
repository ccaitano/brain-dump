// const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
  {
    id: 1,
    username: 'musaliyah',
    email: 'asmusaliar@gmail.com',
    password: 'inlandEmpire',
  },
  {
    id: 2,
    username: 'walterWhite123',
    email: 'walterwhite@hotmail.com',
    password: 'HeisenbergLives!',
  },
  {
    id: 3,
    username: 'jessePinkman123',
    email: 'jessepinkman@aol.com',
    password: '123456780',
  },
  {
    id: 4,
    username: 'teddyfreddy',
    email: 'tfreddy@yahoo.com',
    password: 'kibble123',
  }
];

const seedUser = () => User.bulkCreate(userData);
module.exports = seedUser;