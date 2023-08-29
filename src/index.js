import express, { Router } from 'express';
import dotenv from 'dotenv';
dotenv.config();

import employeesRoutes from './routes/employes.js';
import indexRoutes from './routes/index.js';

const app = express();

app.use(indexRoutes);
app.use(employeesRoutes);

app.listen(3000);
console.log('Server on port', 3000);