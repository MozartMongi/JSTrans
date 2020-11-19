'use strict';
const {
  Model
} = require('sequelize');
const passengerticket = require('./passengerticket');
const bcrypt=require('bcryptjs')
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
        const salt=bcrypt.genSaltSync(12);
        const hash=bcrypt.hashSync(instance.Password,salt);

        instance.Password = hash;
      }
    },
    sequelize,
    modelName: 'Passenger',
    
  });
  return Passenger;
};