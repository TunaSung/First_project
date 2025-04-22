const {Model, DataTypes} = require("sequelize");
const sqlize = require("../config/database");
const Product = require("../models/Product");
const Order = require("../models/Order");

class ProductInOrder extends Model{};

ProductInOrder.init({
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    amount: {type:DataTypes.INTEGER, allowNull:false},
    status: { type: DataTypes.STRING, defaultValue: "pending" }
    },
    {sequelize: sqlize, modelName:'pio', tableName:'pios'}
);

// 一個商品可以出現在多個訂單中
ProductInOrder.belongsTo(Order, { foreignKey: "orderId", onDelete: "CASCADE" });
Order.hasMany(ProductInOrder, { foreignKey: "orderId" });
ProductInOrder.belongsTo(Product, { foreignKey: "productId", onDelete: "CASCADE" });
Product.hasMany(ProductInOrder, { foreignKey: "productId" });

module.exports = ProductInOrder;