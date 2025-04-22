const { Model, DataTypes } = require("sequelize");
const sqlize = require("../config/database");
// const Order = require("../models/Order")

class User extends Model{};

User.init(
    {
    userId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, allowNull: false, unique: true},
    password: {type: DataTypes.STRING, allowNull: false}
    },
    {sequelize: sqlize, modelName:'user', tableName:'users'}
)


User.sync();

module.exports = User;