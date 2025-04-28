const Product = require('../models/Product');
const ProductInOrder= require('../models/ProductInOrder');
const Order = require('../models/Order');
const authenticate = require('../middleware/JWT') // 引入驗證中介軟體，這樣才可以用 req.user

//加入購物車
exports.addToCart =[authenticate,  async (req, res) => {
        try {
            const { productId, amount } = req.body; 
            const userId = req.user.userId
            // userId = req.user?.userId || 1

            const product = await Product.findByPk(productId);
            console.log("查詢商品的 ID:", productId);
            if (!product) {
                return res.status(404).json({ message: `哈哈商品不存在 ${product}` });
            }

            if (product.stock > amount) {
                product.stock -= amount; // 減少庫存
                await product.save(); // 儲存庫存變更
            } else {
                return res.status(400).json({ message: `庫存不足` });
            }

    
            // 查詢是否有未完成的訂單
            let order = await Order.findOne({
                where: {
                    userId: userId,
                    status: "pending",
                    merchantTradeNo: null
                }
            });
            
            // 如果沒有未完成的訂單，則創建一個新的訂單
            if (!order) {
                order = await Order.create({
                    userId: userId,
                    status: "pending",
                    merchantTradeNo: null
                });
            }
    
            // 檢查此商品是否已經在購物車中
            let productInOrder = await ProductInOrder.findOne({
                where: {
                    orderId: order.orderId,
                    productId: productId
                }
            });
    
            if (productInOrder) {
                // 如果商品已經在購物車，更新數量
                productInOrder.amount += amount;
                await productInOrder.save();
            } else {
                // 如果商品不在購物車，則新增商品
                await ProductInOrder.create({
                    orderId: order.orderId,
                    productId: productId,
                    amount: amount
                });
            }
    
            res.status(200).json({ message: "商品已加入購物車"});
        } catch (error) {
            res.status(500).json({ message: `商品加入失敗`})
        }
    }
]

// 獲取購物車商品 (用於購物車頁)
exports.getCart = [authenticate, async (req, res) => {
        try {
            const userId = req.user.userId;
            // const userId = req.user?.userId || 1;
    
            const order = await Order.findOne({
                where: { userId: userId, status: "pending", merchantTradeNo: null },
                include: [
                    {
                        model: ProductInOrder,
                        attributes: ['id', 'amount'],  // 只返回所需欄位
                        include: [
                            {
                                model: Product,
                                attributes: ['productId', 'name', 'price', 'imageUrl']  // 只返回必要的 Product 資料
                            }
                        ]
                    }
                ]
            });

            //回傳的資料會長這樣
            // order: {
            //     orderId: 1,
            //     userId: 1,
            //     status: 'pending',
            //     merchantTradeNo: null,
            //     ProductInOrders: [
            //         {
            //             id: 1,
            //             amount: 2,
            //             Product: {
            //                 productId: 1,
            //                 name: 'Product 1',
            //                 price: 100,
            //                 imageUrl: 'http://example.com/image1.jpg'
            //             }
            //         },
            //         {
            //             id: 2,
            //             amount: 1,
            //             .....

    
            if (!order) {
                return res.status(404).json({ message: "購物車為空" });
            } else {
                return res.status(200).json({ message: `order讀取成功`, order }); // 這裡的 order 包含了 ProductInOrder 和 Product 的資料
            }

        } catch (err) {
            res.status(500).json({ message: "伺服器錯誤", error: err.message });
        }
    }
]

// 更新購物車商品數量
exports.updateCartItem = [authenticate, async (req, res) => {
        try {
            const { productId, amount } = req.body;
            const userId = req.user.userId;
    
            // 查詢未完成的訂單
            const order = await Order.findOne({
                where: {
                    userId: userId,
                    status: "pending",
                    merchantTradeNo: null
                }
            });
    
            if (!order) {
                return res.status(404).json({ message: "購物車為空" });
            }
    
            // 查詢是否有這個商品在購物車中
            const productInOrder = await ProductInOrder.findOne({
                where: {
                    orderId: order.orderId,
                    productId: productId
                }
            });
    
            if (!productInOrder) {
                return res.status(404).json({ message: "商品不在購物車中" });
            }
    
            // 更新庫存數量
            const product = await Product.findByPk(productId);
            if (productInOrder.amount > amount) {
                product.stock += (productInOrder.amount - amount); // 增加庫存
            } else if (productInOrder.amount < amount) {
                product.stock -= (amount - productInOrder.amount); // 減少庫存
            } 
            await product.save(); 

            // 更新商品數量
            productInOrder.amount = amount;
            await productInOrder.save();
    
            res.status(200).json({ message: "商品數量已更新" });
        } catch (err) {
            res.status(500).json({ message: "伺服器錯誤", error: err.message });
        }
    }
] 


exports.removeFromCart = [authenticate, async (req, res) => {
        try {
            const { productId } = req.body;
            const userId = req.user.userId;
    
            // 查詢未完成的訂單
            const order = await Order.findOne({
                where: {
                    userId: userId,
                    status: "pending",
                    MerchantTradeNo: null
                }
            });
    
            if (!order) {
                return res.status(404).json({ message: "購物車為空" });
            }
    
            // 查詢是否有這個商品在購物車中
            const productInOrder = await ProductInOrder.findOne({
                where: {
                    orderId: order.orderId,
                    productId: productId
                }
            });
    
            if (!productInOrder) {
                return res.status(404).json({ message: "商品不在購物車中" });
            }

            // 更新庫存數量
            const product = await Product.findByPk(productId);
            product.stock += productInOrder.amount; // 恢復庫存
            await product.save();
    
            // 刪除商品
            await productInOrder.destroy();
    
            res.status(200).json({ message: "商品已從購物車移除" });
        } catch (err) {
            // console.error("刪除商品時發生錯誤: ", err);
            res.status(500).json({ message: "伺服器錯誤", error: err.message });
        }
    }
]