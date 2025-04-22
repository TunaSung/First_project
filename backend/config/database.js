const { Sequelize } = require("sequelize");

// 要給 server 的隱密資訊
const sqlize = new Sequelize("first_project", "root", "20011107ryan", { 
    host: "localhost",
    dialect: "mysql",
    logging: false
});

module.exports = sqlize;