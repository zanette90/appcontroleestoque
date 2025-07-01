const express = require("express");
const sequelize = require("./database");
require('dotenv').config();
const cors = require('cors');

const autenticarToken = require("./middlewares/autenticarToken");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use(cors({
  origin: '*', 
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

sequelize.sync().then(() => {
    console.log("Banco de dados conectado!");
});

app.get("/", (req, res) => {
    res.send("Rota Principal");
});

const usuarioRoutes = require("./routes/usuario.routes");
const estoqueRoutes = require("./routes/estoque.routes")
const produtoRoutes = require("./routes/produto.routes");

app.use("/usuarios", usuarioRoutes);
app.use("/estoques", autenticarToken, estoqueRoutes);
app.use("/produtos", autenticarToken, produtoRoutes);


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});