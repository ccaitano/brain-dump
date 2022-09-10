const sequalize = require('../config/connection');
const {User, Responses} = require('../models');

const userData = [
    {
        username: 'musaliyah',
        email: 'asmusaliar@gmail.com',
        password: 'inlandEmpire',
        user_id: 1
    },
    {
        username: 'walterWhite123',
        email: 'walterwhite@hotmail.com',
        password: 'HeisenbergLives!',
        user_id: 2
    },
    {
        username: 'jessePinkman123',
        email: 'jessepinkman@aol.com',
        password: '123456780',
        user_id: 3
    },
    {
        username: 'teddyfreddy',
        email: 'tfreddy@yahoo.com',
        password: 'kibble123',
        user_id: 4
    }
]

const seedUser = () => User.bulkCreate(userData);
module.exports = seedUser;