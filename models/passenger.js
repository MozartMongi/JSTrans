'use strict';
const {
  Model
} = require('sequelize');
const passengerticket = require('./passengerticket');
const {hashPassword}=require('../helpers/functionHelper')
module.exports = (sequelize, DataTypes) => {
  class Passenger extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Passenger.belongsToMany(models.Ticket, { through: 'PassengerTicket' });
    }
  };
  Passenger.init({
    Email: DataTypes.STRING,
    Fullname: DataTypes.STRING,
    Phone: DataTypes.STRING,
    Password: DataTypes.STRING
  }, {
    hooks:{
      beforeCreate:(instance, option)=>{
        instance.Password= hashPassword(instance.Password)
      }
    },
    sequelize,
    modelName: 'Passenger',
    
  });
  return Passenger;
};