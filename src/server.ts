import express, { response } from 'express';
import './database';

const app = express();

/**
 *  GET : buscas
 *  POST: criação
 *  PUT: alteração
 *  DELETE: apagar
 *  PATCH: alterar uma informação específica
 */

app.post('/', (req, res) => res.json({ message: 'usuario cadastrado' }));
app.get('/', (req, res) => res.json({ message: 'Olá, NLW 5' }));
app.listen(5000, () => console.log('Server is running on port 5000'));
