'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ticket.belongsToMany(models.Passenger, { through: 'PassengerTicket' });
    }
  };
  Ticket.init({
    Departure: DataTypes.STRING,
    DepartTime: DataTypes.TIME,
    DepartPoint: DataTypes.STRING,
    Arrival: DataTypes.STRING,
    ArriveTime: DataTypes.TIME,
    Seats: DataTypes.INTEGER,
    Price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};