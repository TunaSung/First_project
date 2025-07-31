const User = require('./User')
const Order = require('./Order')
const Product = require('./Product')
const ProductInOrder = require('./ProductInOrder')
const Event = require('./Event')

// user & order
User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });

// user & product
User.hasMany(Product, { foreignKey: 'sellerId', as: 'productsOnSale' });
Product.belongsTo(User, { foreignKey: 'sellerId', as: 'seller' });

// product & pio & order
Product.hasMany(ProductInOrder, { foreignKey: 'productId' });
ProductInOrder.belongsTo(Product, { foreignKey: 'productId' });
Order.hasMany(ProductInOrder, { foreignKey: 'orderId' });
ProductInOrder.belongsTo(Order, { foreignKey: 'orderId' });

module.exports = {User, Product, Order, ProductInOrder, Event}