const express = require("express");
const cors = require("cors");
require('dotenv').config();
const bodyParser = require('body-parser');
const sqlize = require("./config/database");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const eventRoutes = require("./routes/eventRoutes");
const path = require("path");

const app = express();

const origins = (process.env.CORS_ORIGINS || "http://localhost:5173")
  .split(",");

// 2. 設定 cors options
const corsOptions = {
  origin: origins,
  credentials: true,           // ← 這行會讓 res header 帶上 Access-Control-Allow-Credentials: true
};
app.use(cors(corsOptions));     // 全域套用
app.options("*", cors(corsOptions)); // preflight 也套一次

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

if (process.env.NODE_ENV === "production") {
  const staticPath = path.join(__dirname, "../frontend/dist");
  console.log("🔍 會從這裡 serve 靜態檔案：", staticPath);
  app.use(express.static(staticPath));
  app.get("*", (req, res) =>
    res.sendFile(path.join(staticPath, "index.html"))
  );
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, "0.0.0.0" , () => {
    console.log(`🚀 伺服器運行在 http://localhost:${PORT}`);
});
