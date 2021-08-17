'use strict';
module.exports = (sequelize, DataTypes) => {
const user=sequelize.define('user',{
    name: DataTypes.STRING,
    img: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    status_message: DataTypes.STRING
    },{
    underscored: true,
    });
    user.associate=function(models){
      user.hasMany(models.roomsuser,{foreignKey:'user_id'});
    };
  return user;
};

/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     // define association here