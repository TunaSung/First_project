const Product = require("../models/Product")

// 這裡是商品的控制器，負責處理商品相關的請求

// 獲取所有商品
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(201).json({products});
    } catch (error) {
        res.status(500).json({message: "獲取商品資料失敗", error});
    }
};

// 獲取單一商品
exports.getProductId = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if(product){
            res.status(201).json({product});
        } else {
            res.status(404).json({ message: "商品未找到" });
        }
    } catch (error) {
        res.status(500).json({message: "獲取商品資料失敗", error});
    }
};

//
exports.getHotItems = async (req, res) => {
    try {
        const products = await Product.findAll({
            order: [['sales', 'DESC']], // 根據銷售量降序排列
            limit: 4 
        });
        res.status(201).json({products});
    } catch (error) {
        res.status(500).json({message: "獲取熱門商品資料失敗", error});
    }
}

