'use strict';
module.exports = (sequelize, DataTypes) => {
  const roomsuser=sequelize.define('roomsuser',{
    user_id: DataTypes.INTEGER,
    room_id: DataTypes.INTEGER
  },{
    underscored: true,
  });
  roomsuser.associate=function(models){
    roomsuser.belongsTo(models.room,{foreignKey:'room_id'});
    roomsuser.belongsTo(models.user,{foreignKey:'user_id'});
  };
  return roomsuser;
};

/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     // define association here