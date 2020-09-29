'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class roomsuser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  roomsuser.init({
    user_id: DataTypes.INTEGER,
    room_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'roomsuser',
    underscored: true,
  });
  return roomsuser;
};