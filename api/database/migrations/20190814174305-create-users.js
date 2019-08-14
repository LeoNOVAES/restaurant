'use strict';

module.exports = {
  up: (queryInterface,  DataTypes) => {
    return queryInterface.createTable("users",{

    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  }
};
