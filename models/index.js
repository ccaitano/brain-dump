const User = require('./User');
const Moods = require('./Moods');
const Questions = require('./Questions');
const Responses = require('./Responses');

// Create associations
User.hasMany(Responses, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Responses.belongTo(User, {
    foreignKey: 'user_id'
});

Responses.belongTo(Questions, {
    foreignKey: 'question_id'
});

Questions.belongTo(Moods, {
    foreignKey: 'mood_id'
});



module.exports = { User, Moods, Questions, Responses };
