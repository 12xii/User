const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    return sequelize.define("User", {
        userID: {
            type: DataTypes.INTEGER(),
            primaryKey: true,
            autoIncrement: true,
        },
        userPW: {
            type: DataTypes.STRING(),
            allowNull: false,
        },
        userName: {
            type: DataTypes.STRING(),
            allowNull: false,
        },
        userEmail: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true,
        },
        accessToken: {
            type: DataTypes.STRING(),
            allowNull: true,
        },
        salt: {
            type: DataTypes.STRING(),
            allowNull: true,
        }
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
        timestmaps: false
    });
};