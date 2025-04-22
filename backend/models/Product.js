const {Model, DataTypes} = require('sequelize');
const sqlize = require("../config/database");
// const ProductInOrder = require("../models/ProductInOrder");

class Product extends Model{};

Product.init(
    {
    productId: {type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    name: {type:DataTypes.STRING, allowNull:false},
    description: {type:DataTypes.STRING},
    price: {type:DataTypes.INTEGER, allowNull:false},
    stock: {type:DataTypes.INTEGER, allowNull:false},
    imageUrl: { type: DataTypes.STRING },
    category: {type:DataTypes.STRING,allowNull:false}
    },
    {sequelize: sqlize, modelName:'product', tableName:'products'}
)

Product.sync();

module.exports = Product;