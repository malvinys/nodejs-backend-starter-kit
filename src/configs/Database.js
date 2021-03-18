import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const host = process.env.DB_HOST || 'localhost';
const user = process.env.DB_USER || 'root';
const password = process.env.DB_PASS || '';
const dbName = process.env.DB_NAME || 'starter_kit';

const Database = new Sequelize(
  dbName,
  user,
  password,
  {
    host,
    dialect: 'mysql',
  },
);

export default Database;
