# # -------- 1. 前端建置階段 --------
# FROM node:18-alpine AS frontend-builder
# WORKDIR /app/frontend

# # 只複製前端相依定義，加速快取
# COPY frontend/package*.json ./
# RUN npm ci

# # 複製 entire 前端程式，並打包
# COPY frontend .
# RUN npm run build

# # -------- 2. 後端+佈署階段 --------
# FROM node:18-alpine
# WORKDIR /app/backend

# # 複製後端相依定義，安裝 production 相依
# COPY backend/package*.json ./

# # package.json 裡有 dependencies 和 devDependencies
# # dependencies 是生產環境需要的相依
# # devDependencies 是開發環境需要的相依
# # --only=production 只安裝 dependencies
# # 這樣可以避免安裝 devDependencies，讓 image 更小
# RUN npm ci --only=production

# # 複製後端程式碼
# COPY backend .

# # 把前面 build 出來的前端靜態資源放到後端 public 目錄
# # --from=frontend-builder
# # 指向第一階段的暱稱（AS frontend-builder），讓你可以跨階段複製檔案

# # /app/frontend/dist
# # 這是前端執行 npm run build 後輸出的資料夾（打包後的 HTML/CSS/JS）

# # ./public
# # 後端的靜態路徑（因爲 app.use(express.static('public'))），Express 會自動把 public 裡的檔案當靜態資源 serve
# COPY --from=frontend-builder /app/frontend/dist ./public

# # 支援 Railway 或 Heroku 輸入的動態 PORT
# ENV PORT=8080
# EXPOSE 8080

# # 啟動指令，請務必在 package.json 裡有 "start": "node server.js"
# CMD ["npm", "start"]

# 1) Build 前端
FROM node:18-alpine AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm ci
COPY frontend ./
RUN npm run build

# 2) 安裝後端相依（production）
FROM node:18-alpine AS backend-deps
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm ci --only=production

# 3) 最終映像
FROM node:18-alpine
WORKDIR /app

# 複製後端程式 & node_modules
COPY --from=backend-deps /app/backend/node_modules ./backend/node_modules
COPY backend ./backend

# **重點：把前端 dist 複製到 /app/frontend/dist**
COPY --from=frontend-builder /app/frontend/dist ./frontend/dist

ENV PORT=8080
EXPOSE 8080

# 啟動後端
CMD ["node", "backend/server.js"]

