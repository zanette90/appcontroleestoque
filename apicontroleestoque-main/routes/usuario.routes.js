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




/*
const express = require("express");
const router = express.Router();
const Usuario = require("../models/Usuario");

const bcrypt = require("bcrypt");
const autenticarToken = require("../middlewares/autenticarToken.js")

router.post("/create/", async (req, res) => {
    const { email } = req.body;

    try {
        const usuario = await Usuario.findOne({ where: { email } })

        if (usuario)
            return res.status(409).json({ erro: "Usuário já cadastrado" })
        
        const salto = 10;
        const senhaHash = await bcrypt.hash(req.body.senha, salto);
        req.body.senha = senhaHash;

        const novoUsuario = await Usuario.create(req.body);
        const { senha, ...usuarioSeguro } = novoUsuario.toJSON();
        res.status(201).json(
            { 
                message: "Usuário criado com sucesso!", 
                data: usuarioSeguro,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao criar o usuário." });
    }
});

// Listar todos os usuários
router.get("/listAll", autenticarToken, async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();

        const usuariosSemSenha = usuarios.map(usuario => {
            const { senha, ...dados } = usuario.toJSON();
            return dados;
        });
        res.status(200).json({
            message: "Lista de usuários recuperada com sucesso!",
            data: usuariosSemSenha
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar usuários." });
    }
});

// Buscar usuário por ID
router.get("/listOne/:id", autenticarToken, async (req, res) => {
    try {
        const id = Number(req.params.id);
        const usuario = await Usuario.findByPk(id);

        if (!usuario) {
            return res.status(404).json({ message: "Usuário não encontrado." });
        }

        // Remover o campo 'senha' antes de retornar
        const { senha, ...usuarioSeguro } = usuario.toJSON();

        res.status(200).json({
            message: "Usuário recuperado com sucesso!",
            data: usuarioSeguro
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar o usuário." });
    }
});

router.put("/update/:id", autenticarToken, async (req, res) => {
    try {
        const id = Number(req.params.id);
        const usuario = await Usuario.findByPk(id);

        if (!usuario) {
            return res.status(404).json({ error: "Usuário não encontrado." });
        }

        // Se estiver atualizando a senha, aplicar o hash
        if (req.body.senha) {
            const salto = 10;
            req.body.senha = await bcrypt.hash(req.body.senha, salto);
        }

        await usuario.update(req.body);

        const { senha, ...usuarioSeguro } = usuario.toJSON();

        res.status(200).json({
            message: "Usuário atualizado com sucesso!",
            data: usuarioSeguro
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao atualizar o usuário." });
    }
});

router.put("/ativar/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);
        const usuario = await Usuario.findByPk(id);

        if (!usuario) {
            return res.status(404).json({ error: "Usuário não encontrado." });
        }

        usuario.ativo = true;
        await usuario.save();

        res.status(200).json({ message: "Usuário ativado com sucesso!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao ativar o usuário." });
    }
});

router.put("/inativar/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);
        const usuario = await Usuario.findByPk(id);

        if (!usuario) {
            return res.status(404).json({ error: "Usuário não encontrado." });
        }

        usuario.ativo = false;
        await usuario.save();

        res.status(200).json({ message: "Usuário inativado com sucesso!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao inativar o usuário." });
    }
});

module.exports = router;
*/