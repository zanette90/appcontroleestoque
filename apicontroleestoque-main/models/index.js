const Produto = require("./Produto");
const Estoque = require("./Estoque");

Produto.hasMany(Estoque, { foreignKey: "produtoId", onDelete: "RESTRICT", onUpdate: "CASCADE" });
Estoque.belongsTo(Produto, { foreignKey: "produtoId" });

module.exports = {
  Produto,
  Estoque,
};
