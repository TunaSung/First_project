const express = require("express");
const cors = require("cors");
require('dotenv').config();
const bodyParser = require('body-parser');
const sqlize = require("./config/database");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes")
const cartRoutes = require("./routes/cartRoutes")
const paymentRoutes = require("./routes/paymentRoutes")
const eventRoutes = require("./routes/eventRoutes")
const path = require("path");

const app = express();

const allowedOrigins = (process.env.CORS_ORIGINS || "http://localhost:5173")
  .split(",");
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));


app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/product", productRoutes);

app.use("/api/cart", cartRoutes);

app.use("/api/event", eventRoutes);

app.use('/api/payment', bodyParser.urlencoded({ extended: true }));
app.use('/api/payment', bodyParser.json());
app.use('/api/payment', paymentRoutes);

sqlize.sync().then(() => {
    console.log("📦 資料庫已同步");
});

// —— 1. 靜態檔案：把前端 build 好的 dist 夾當靜態資源 —— 
//    __dirname 是指到 backend 資料夾，所以要往上一層再進 frontend/dist
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// —— 2. Catch‑all：其餘路由都返回 index.html 給前端 Router 用 —— 
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

const PORT =  5000;
app.listen(PORT, () => {
    console.log(`🚀 伺服器運行在 http://localhost:${PORT}`);
});
