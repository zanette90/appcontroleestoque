// models/Estoque.js
const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Estoque = sequelize.define("Estoque", {
    marca: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0
        }
    },
    precoCompra: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            min: 0.01
        }
    },
    lucro: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0
        },
        defaultValue: 0
    },
    precoVenda: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            min: 0.01
        }
    },
    foto: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    ativo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true 
    },
    produtoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "Produtos", key: "id" },
    },
});

module.exports = Estoque;

