const express = require("express");
const router = express.Router();

const {
    criarEstoque,
    listarTodosEstoques,
    listarEstoquePorId,
    atualizarEstoque,
    ativarEstoque,
    inativarEstoque
} = require("../controllers/estoqueController");

router.post("/create", criarEstoque);
router.get("/listAll", listarTodosEstoques);
router.get("/listOne/:id", listarEstoquePorId);
router.put("/update/:id", atualizarEstoque);
router.put("/ativar/:id", ativarEstoque);
router.put("/inativar/:id", inativarEstoque);

module.exports = router;
