import express, { Router } from 'express';
import dotenv from 'dotenv';
dotenv.config();

import employeesRoutes from './routes/employes.js';
import indexRoutes from './routes/index.js';

const app = express();

app.use(express.json());

app.use(indexRoutes);
app.use('/api', employeesRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not found' 
    });
});

app.listen(3000);
console.log('Server on port', 3000);