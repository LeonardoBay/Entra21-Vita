// app.js
const express = require('express');
const path = require('path');
const app = express();
const porta = 3000;

// Configura o Express para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint 1
app.get('/', (req, res) => {
  res.redirect('/Login/index.html');
});

// Endpoint 2
app.get('/api/mensagem', (req, res) => {
  res.json({ mensagem: 'Esta é a resposta do segundo endpoint!' });
});

app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});