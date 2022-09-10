const sequalize = require('../config/connection');
const {User, Response} = require('../models');

const userData = [
    {
        username: 'musaliyah',
        email: 'asmusaliar@gmail.com',
        password: 'inlandEmpire'
    },
    {
        username: 'walterWhite123',
        email: 'walterwhite@hotmail.com',
        password: 'HeisenbergLives!'
    },
    {
        username: 'jessePinkman123',
        email: 'jessepinkman@aol.com',
        password: '123456780'
    },
    {
        username: 'teddyfreddy',
        email: 'tfreddy@yahoo.com',
        password: 'kibble123'
    }
]

const seedUser = () => User.bulkCreate(userdata);
module.exports = seedUser;