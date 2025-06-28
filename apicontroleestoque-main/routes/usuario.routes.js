const express = require("express");
const router = express.Router();
const autenticarToken = require("../middlewares/autenticarToken");
const Usuario = require("../models/Usuario");

const {
    logarUsuario,
    criarUsuario,
    listarUsuarios,
    listarUsuarioPorId,
    atualizarUsuario,
    ativarUsuario,
    inativarUsuario
} = require("../controllers/usuarioController");

router.post("/login", logarUsuario);
router.post("/create", criarUsuario);
router.get("/listAll", autenticarToken, listarUsuarios);
router.get("/listOne/:id", autenticarToken, listarUsuarioPorId);
router.put("/update/:id", autenticarToken, atualizarUsuario);
router.put("/ativar/:id", autenticarToken, ativarUsuario);
router.put("/inativar/:id", autenticarToken, inativarUsuario);

module.exports = router;
