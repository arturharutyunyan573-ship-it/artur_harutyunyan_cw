import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const db = new Sequelize(
    process.env.MY_SQL_DATABASE,
    process.env.MY_SQL_USER,
    process.env.MY_SQL_PASSWORD,
    {
        host: process.env.MY_SQL_HOST,
        port: process.env.MY_SQL_PORT,
        dialect: 'mysql',
        logging: false,
    }
);

export default db;