'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Operation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // define association here
      this.belongsTo(User, { foreignKey: 'userId', as: 'user'})
    };
    toJSON(){
      return { ...this.get(), id: undefined, userId: undefined }
    };
  };
  Operation.init({
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
  },
    expense: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
  }, 
    description: {
      type: DataTypes.STRING
  },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
  },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
  }
  }, {
    sequelize,
    tableName: 'operations',
    modelName: 'Operation',
  });
  return Operation;
};