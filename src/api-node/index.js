require('dotenv').config();

const express = require('express');
const cors = require('cors');
const db = require('./db');
const bcrypt = require('bcrypt');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());


app.get('/usuarios', (req, res) => {
  const query = 'SELECT id, nome, email FROM usuarios';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao buscar usuários:', err);
      return res.status(500).json({ error: 'Erro no servidor' });
    }
    res.json(results);
  });
});


app.post('/usuarios', async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    const senhaHash = await bcrypt.hash(senha, 10);
    const query = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
    db.query(query, [nome, email, senhaHash], (err, result) => {
      if (err) {
        console.error('Erro ao inserir usuário:', err);
        return res.status(500).json({ error: 'Erro no servidor' });
      }
      res.status(201).json({ message: 'Usuário criado com sucesso', id: result.insertId });
    });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});


app.post('/login', (req, res) => {
  const { email, senha } = req.body;
  const query = 'SELECT * FROM usuarios WHERE email = ?';
  db.query(query, [email], async (err, results) => {
    if (err) {
      console.error('Erro ao buscar usuário:', err);
      return res.status(500).json({ error: 'Erro no servidor' });
    }
    const usuario = results[0];
    if (usuario && await bcrypt.compare(senha, usuario.senha)) {

      res.json({ id: usuario.id, nome: usuario.nome, email: usuario.email });
    } else {
      res.status(401).json({ error: 'Usuário ou senha inválidos' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});