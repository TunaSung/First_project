const bcrypt = require("bcryptjs"); // bcryptjs 是一個用於加密和驗證密碼的庫
const jwt = require("jsonwebtoken");
const { User } = require("../models/Association");

// 註冊
exports.register = async (req, res) => {
    try {
        const {email, password} = req.body; // 取得使用者輸入的 email 和 password
        const hashedPassword = await bcrypt.hash(password, 10); // 使用 bcrypt 將密碼加密，10 是加密的強度
        const newUser = await User.create({email, password: hashedPassword}); //用 create 在 User 創建新的資料
        res.status(201).json({message: "註冊成功", user: newUser});
    } catch (error) {
        res.status(500).json({error: "註冊失敗", details: error.message});
    }
};

// 登入
exports.login = async (req, res) => {
    try {
        const {email, password} = req.body; // 取得使用者輸入的 email 和 password
        const user = await User.findOne({where: {email}}); // 用 findOne 在 User 資料庫中查找使用者的 email

        if (!user || !(await bcrypt.compare(password, user.password))) { // 如果使用者不存在或密碼不正確，則返回錯誤
            // bcrypt.compare 用於比較使用者輸入的密碼和資料庫中的加密密碼
            return res.status(401).json({error: "帳號或密碼錯誤" });

        }

        const token = jwt.sign({userId: user.userId}, "mysecret", {expiresIn: "3h"}); // 使用 jwt.sign 生成一個 token，包含使用者的 userId，並設定過期時間為 3 小時

        // const refreshToken = jwt.sign({ userId: user.userId }, 'mysecret', { expiresIn: '7d' });

        // await User.update({ refreshToken }, { where: { userId: user.userId } });

        res.json({message: `登入成功 token=${token}`, token}); // 返回登入成功的訊息和 token
    } catch (error) {
        res.status(500).json({error: "登入失敗", details: error.message});
    }
};
