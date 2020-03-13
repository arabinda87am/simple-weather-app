'use strict';
module.exports = (sequelize, DataTypes) => {
  const WeatherHistory = sequelize.define('WeatherHistory', {
    cityName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    latitude: DataTypes.DECIMAL,
    longitude: DataTypes.DECIMAL,
    temperature: DataTypes.DECIMAL,
    units: DataTypes.STRING
  }, {
      tableName: "weather_history"
  });
  WeatherHistory.associate = function(models) {
    // associations can be defined here
  };
  return WeatherHistory;
};