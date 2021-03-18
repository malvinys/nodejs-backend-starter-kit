import express from 'express';
import cors from 'cors';

import Database from './src/configs/Database.js';
import Routes from './src/routes/Routes.js';

const app = express();
app.use(express.json());
app.use(cors());

try {
  Database.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.use(Routes);
app.listen(3000, () => { console.log('Server Running at http://localhost:3000'); });
