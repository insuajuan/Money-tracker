'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Operation }) {
      // define association here
      this.hasMany(Operation, { foreignKey: 'userId', as: 'operations' })
    }
  };
  User.init({
    uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
  },
    password: {
      type: DataTypes.STRING,
      allowNull: false 
  },
    thumbnail: {
      type: DataTypes.STRING,
  },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
  },}, 
  {
    sequelize,
    tableName: 'user',
    modelName: 'User',
  });
  return User;
};