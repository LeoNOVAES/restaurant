'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("revenue",{

      id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER
      },
      
      title:{
        allowNull:false,
        type: DataTypes.STRING,
        unique:true
      },

      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },

    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("revenue");
  }
};
