const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/carros', (req, res) => {
    db.query('SELECT * FROM carros', (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
});

app.post('/carros', (req, res) => {
    const { modelo, marca, ano, cor, preco } = req.body;
    if (!modelo || !marca) return res.status(400).json({ error: "Dados incompletos" }); // Validação [cite: 14]
    
    const sql = 'INSERT INTO carros (modelo, marca, ano, cor, preco) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [modelo, marca, ano, cor, preco], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ id: result.insertId, ...req.body });
    });
});

app.put('/carros/:id', (req, res) => {
    const { id } = req.params;
    const { modelo, marca, ano, cor, preco } = req.body;
    const sql = 'UPDATE carros SET modelo=?, marca=?, ano=?, cor=?, preco=? WHERE id=?';
    db.query(sql, [modelo, marca, ano, cor, preco, id], (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Atualizado com sucesso" });
    });
});

app.delete('/carros/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM carros WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Excluído com sucesso" });
    });
});

app.listen(3001, () => console.log("Backend rodando na porta 3001"));