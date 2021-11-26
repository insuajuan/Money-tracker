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
    static associate( {Operation} ) {
      // define association here
      this.hasMany(Operation, { foreignKey: 'userId', as: 'operation' })
    }

    toJSON(){
      return { ...this.get(), id: undefined }
    }
  };
  User.init({
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
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
  }
  }, {
    sequelize,
    tableName: 'users',
    modelName: 'User',
  });
  return User;
};