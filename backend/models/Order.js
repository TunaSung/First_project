const {Model, DataTypes} = require("sequelize");
const sqlize = require("../config/database");
const User = require("../models/User");
// const ProductInOrder = require("../models/ProductInOrder");

class Order extends Model{};

Order.init(
    {
    orderId: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status: { type: DataTypes.STRING, defaultValue: "pending" },
    merchantTradeNo: { type: DataTypes.STRING, unique: true }
    },
    {sequelize: sqlize, modelName:'order', tableName:'orders'}
);

// 一個訂單屬於一個顧客 設定foreign key
Order.belongsTo(User, {foreignKey: "userId", onDelete: "CASCADE"});
User.hasMany(Order, {foreignKey: "userId"});

module.exports = Order; 