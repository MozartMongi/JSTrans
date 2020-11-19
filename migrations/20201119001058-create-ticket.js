'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Departure: {
        type: Sequelize.STRING
      },
      DepartTime: {
        type: Sequelize.TIME
      },
      DepartPoint: {
        type: Sequelize.STRING
      },
      Arrival: {
        type: Sequelize.STRING
      },
      ArriveTime: {
        type: Sequelize.TIME
      },
      Seats: {
        type: Sequelize.INTEGER
      },
      Price: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tickets');
  }
};