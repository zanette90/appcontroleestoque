const { FLOAT } = require("sequelize");
const { Produto } = require("../models");

async function listarTodosProdutos(req, res) {
    try {
        const produtos = await Produto.findAll();
        if (produtos.length === 0) {
            return res.status(200).json({ message: "Nenhum produto encontrado.", data: [] });
        }
        res.status(200).json(produtos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar produtos." });
    }
}

async function listarProdutoPorId(req, res) {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) return res.status(400).json({ error: "ID inválido." });

        const produto = await Produto.findByPk(id);
        if (!produto) return res.status(404).json({ message: "Produto não encontrado." });

        res.status(200).json(produto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar o produto." });
    }
}

async function criarProduto(req, res) {
    try {
        const { descricao, preco, quantidadeMinima, ativo } = req.body;
        console.log(req.body);
        if (!descricao || !Number.isInteger(quantidadeMinima) || isNaN(preco)) {
            return res.status(400).json({ error: "Dados inválidos." });
        }

        const novoProduto = await Produto.create(req.body);

        res.status(201).json({ message: "Produto criado com sucesso!", data: novoProduto });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao criar produto." });
    }
}

async function atualizarProduto(req, res) {
    try {
        const id = Number(req.params.id);
        const {descricao, quantidadeMinima, preco, ativo } = req.body;

        if (!descricao || !Number.isInteger(quantidadeMinima) || !preco) {
            return res.status(400).json({ error: "Dados inválidos." });
        }

        console.log(req.body);
        
        const produto = await Produto.findByPk(id);
        if (!produto) return res.status(404).json({ error: "Produto não encontrado." });

        await produto.update(req.body);
        res.status(200).json({ message: "Produto atualizado com sucesso!", data: produto });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao atualizar produto." });
    }
}

async function inativarProduto(req, res) {
    try {
        const id = parseInt(req.params.id);
        const produto = await Produto.findByPk(id);
        if (!produto) return res.status(404).json({ error: "Produto não encontrado." });


        produto.ativo = !produto.ativo;
        await produto.save();

        res.status(200).json({ message: "Produto inativado com sucesso!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao inativar produto." });
    }
}


module.exports = {
    listarTodosProdutos,
    listarProdutoPorId,
    criarProduto,
    atualizarProduto,
    inativarProduto,
};
