'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('operations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      uuid: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
    },
      userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('operations');
  }
};