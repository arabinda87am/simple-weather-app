const Sequelize = require('sequelize');
const { db } = require('../config/database');

// const Model = Sequelize.Model;
// class WeatherHistory extends Model { }
// WeatherHistory.init({
//     // attributes
//     cityName: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     latitude: {
//         type: Sequelize.DECIMAL
//     },
//     longitude: {
//         type: Sequelize.DECIMAL
//     },
//     temperature: {
//         type: Sequelize.DECIMAL
//     },
//     units: {
//         type: Sequelize.STRING
//     }
// }, {
//     sequelize: db,
//     modelName: 'weather_history',
//     freezeTableName: true,
//     timestamps: true
// });

const WeatherHistory = db.define('weather_history', {
    cityName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    latitude: {
        type: Sequelize.DECIMAL
    },
    longitude: {
        type: Sequelize.DECIMAL
    },
    temperature: {
        type: Sequelize.DECIMAL
    },
    units: {
        type: Sequelize.STRING
    }
}, {
        freezeTableName: true,
        timestamps: true
});

exports.WeatherHistory = WeatherHistory;