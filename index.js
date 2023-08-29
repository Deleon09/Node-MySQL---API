import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import { pool } from './db.js';

const app = express();

app.get('/ping', async(req, res) => {
    const [result] = await pool.query('SELECT "pong" AS result');
    res.json(result[0]);
});

app.get('/employees', (req, res) => res.send('Getting employees'));

app.post('/employees', (req, res) => res.send('Creating employees'));

app.put('/employees', (req, res) => res.send('Updating employees'));

app.delete('/employees', (req, res) => res.send('Deleting employees'));

app.listen(3000);
console.log('Server on port', 3000);