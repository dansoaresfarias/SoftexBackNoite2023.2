const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Pedido = sequelize.define('Pedido', {
        cliente: {
            type : DataTypes.STRING,
            allowNull : false
        },
        data: {
            type : DataTypes.DATE,
            allowNull : false
        },
        produto: {
            type : DataTypes.STRING,
            allowNull : false
        },
        valor: {
            type : DataTypes.DECIMAL(7,2),
            allowNull : false
        }
    });

    return Pedido;
};