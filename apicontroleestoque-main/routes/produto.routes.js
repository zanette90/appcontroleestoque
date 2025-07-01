const express = require("express");
const router = express.Router();
const autenticarToken = require("../middlewares/autenticarToken");

const {
    listarTodosProdutos,
    listarProdutoPorId,
    criarProduto,
    atualizarProduto,
    inativarProduto,
} = require("../controllers/produtoController");

router.get("/listAll",autenticarToken, listarTodosProdutos);
router.get("/listOne/:id",autenticarToken, listarProdutoPorId);
router.post("/create",autenticarToken, criarProduto);
router.put("/update/:id",autenticarToken, atualizarProduto);
router.put("/inativar/:id",autenticarToken, inativarProduto);

module.exports = router;
