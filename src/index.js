import express from 'express';

import employeesRoutes from './routes/employes.js';
import indexRoutes from './routes/index.js';

import { PORT } from './config.js';

const app = express();

app.use(express.json());

app.use(indexRoutes);
app.use('/api', employeesRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not found' 
    });
});

app.listen(PORT);
console.log('Server running on port', PORT);