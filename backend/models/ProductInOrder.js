const {Model, DataTypes} = require("sequelize");
const sqlize = require("../config/database");

class ProductInOrder extends Model{};

ProductInOrder.init({
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    amount: {type:DataTypes.INTEGER, allowNull:false},
    productId: {type: DataTypes.INTEGER, allowNull: false, references: {model: "products", key: "productId"}},
    orderId: {type: DataTypes.INTEGER, allowNull: false, references: {model: "orders", key: "orderId"}},
    status: { type: DataTypes.STRING, defaultValue: "pending" }
    },
    {sequelize: sqlize, modelName:'pio', tableName:'pios'}
);

module.exports = ProductInOrder;