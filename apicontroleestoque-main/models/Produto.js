// models/Produto.js
const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Produto = sequelize.define("Produto", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    
    descricao: { 
        type: DataTypes.STRING, 
        allowNull: true 
    },
    preco: {
        type: DataTypes.FLOAT,
        validate: {min: 0.01}
    },
    quantidadeMinima: { 
        type: DataTypes.INTEGER, 
        allowNull: false, 
        validate: { min: 0 } 
    },
    ativo: { 
        type: DataTypes.BOOLEAN, 
        allowNull: false, 
        defaultValue: true 
    }
});

module.exports = Produto;
