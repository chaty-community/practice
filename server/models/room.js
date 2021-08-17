'use strict';
module.exports = (sequelize, DataTypes) => {
  const room=sequelize.define('room',{
  },{
    underscored:true,
  });
  room.associate=function(models){
    room.hasMany(models.roomsuser,{foreignKey:'room_id'});
    room.hasMany(models.message,{foreignKey:'room_id'});
  };
  return room;
};

/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     // define association here