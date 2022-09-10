const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Moods extends Model {}

Moods.init(
  {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    mood_name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'moods',
  }
);

module.exports = Moods;