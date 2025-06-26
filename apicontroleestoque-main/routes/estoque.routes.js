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

/*
router.post("/create/", async (req, res) => {
    try {
        const novoEstoque = await Estoque.create(req.body);
        res.status(201).json({ message: "Estoque criado com sucesso!", data: novoEstoque });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao criar o estoque." });
    }
});

// Listar todos os estoques
router.get("/listAll/", async (req, res) => {
    try {
        const estoques = await Estoque.findAll({ include: Produto });
        res.status(200).json(estoques);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar estoques." });
    }
});

// Buscar estoque por ID
router.get("/listOne/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);
        const estoque = await Estoque.findByPk(id, { include: Produto });

        if (!estoque) {
            return res.status(404).json({ message: "Estoque não encontrado." });
        }

        res.status(200).json(estoque);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar o estoque." });
    }
});

// Atualizar estoque
router.put("/update/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);
        const estoque = await Estoque.findByPk(id);

        if (!estoque) {
            return res.status(404).json({ error: "Estoque não encontrado." });
        }

        await estoque.update(req.body);
        res.status(200).json({ message: "Estoque atualizado com sucesso!", data: estoque });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao atualizar o estoque." });
    }
});

router.put("/ativar/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);
        const estoque = await Estoque.findByPk(id);

        if (!estoque) {
            return res.status(404).json({ error: "Estoque não encontrado." });
        }

        estoque.ativo = true;
        await estoque.save();

        res.status(200).json({ message: "Estoque inativado com sucesso!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao inativar estoque." });
    }
});

router.put("/inativar/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);
        const estoque = await Estoque.findByPk(id);

        if (!estoque) {
            return res.status(404).json({ error: "Estoque não encontrado." });
        }

        estoque.ativo = false;
        await estoque.save();

        res.status(200).json({ message: "Estoque inativado com sucesso!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao inativar estoque." });
    }
});

module.exports = router;
*/