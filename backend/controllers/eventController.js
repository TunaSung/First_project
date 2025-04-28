const Event = require('../models/Event');
const { Op } = require('sequelize');

exports.getLastThreeEvents = async (req, res) => {
    try {
        const now = new Date();
        const events = await Event.findAll({
            where: {
                startDate: { [Op.lte]: now }, // 開始時間小於等於現在
                endDate:   { [Op.gt]:  now } // 結束時間大於現在
            },
            order: [['endDate', 'ASC']], // 依結束時間排序近到遠(ASC 生冪排列) //反過來是 DESC 降冪排列 
            attributes: ['eventId', 'title','description','imageUrl','startDate','endDate'],
            limit: 3,
        });
        res.status(200).json({ events });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "獲取活動資料失敗", error });
    }
  };

