'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addConstraint('PassengerTickets', {
      fields: ['PassengerId'],
      type: 'foreign key',
      name: 'passengerId-as-fk',
      references: { //Required field
        table: 'Passengers',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down:  (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.removeConstraint('PassengerTickets', 'PassengerId',{});
  }
};
