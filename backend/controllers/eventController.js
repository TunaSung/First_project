const Event = require('../models/Event');

exports.getEvent = async (req, res) => {
    try {
        const event = await Event.findByPk(req.params.id);
        if(event){
            res.status(201).json({event});
        } else {
            res.status(404).json({ message: "活動未找到" });
        }
    } catch (error) {
        res.status(500).json({message: "獲取商品資料失敗", error});
    }
};