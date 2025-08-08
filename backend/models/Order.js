const {Model, DataTypes} = require("sequelize");
const sqlize = require("../config/database");

class Order extends Model{};

Order.init(
    {
    orderId: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status: { type: DataTypes.STRING, defaultValue: "pending" },
    merchantTradeNo: { type: DataTypes.STRING, unique: true },
    userId: {type: DataTypes.INTEGER, allowNull: false, references: {model: 'users', key: "userId"}}
    },
    {sequelize: sqlize, modelName:'order', tableName:'orders'}
);

module.exports = Order; 