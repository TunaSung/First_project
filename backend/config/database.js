require('dotenv').config();                // ← 載入 .env
const { Sequelize } = require('sequelize');

const sqlize = new Sequelize(
  process.env.DB_NAME,                     // 資料庫名稱
  process.env.DB_USER,                     // 使用者
  process.env.DB_PASS,                     // 密碼
  {
    host: process.env.DB_HOST,             // 主機（localhost 或 Railway Host）
    port: process.env.DB_PORT,             // 埠號
    dialect: process.env.DB_DIALECT,       // mysql
    logging: false,
    dialectOptions: { charset: 'utf8mb4' } // optional
  }
);

module.exports = sqlize;
