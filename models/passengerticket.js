'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PassengerTicket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PassengerTicket.init({
    BookingCode: DataTypes.STRING,
    PassengerId: DataTypes.INTEGER,
    TicketId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PassengerTicket',
  });
  return PassengerTicket;
};