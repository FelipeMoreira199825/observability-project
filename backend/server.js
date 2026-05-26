
// server.js
require('./tracing.js');
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'password',
  port: 5433,
});

async function initDatabase() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL
      )
    `);

    console.log('Banco conectado');
  } catch (error) {
    console.error(error);
  }
}

initDatabase();

app.get('/', (req, res) => {
  res.send('API funcionando');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/metrics/latencies', (req, res) => {
  
  setTimeout(() => {
    res.json({ 
      status: 'ok', 
      metrics: 'Latências processadas em milissegundos' 
    });
  }, 25); 
});
// ====================================================================

app.get('/users', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM users ORDER BY id'
    );

    res.json(result.rows);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

app.post('/users', async (req, res) => {
  try {
    const result = await pool.query(
      'INSERT INTO users(name) VALUES($1) RETURNING *',
      [req.body.name]
    );

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});