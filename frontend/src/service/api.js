// frontend/src/service/api.js
import axios from "axios";

// VITE_API_URL 在開發時會是  http://localhost:8080  
// 在生產時我們留空，它就變成 "" → 走同一個 domain + /api
const BASE = import.meta.env.VITE_API_URL || "";

const api = axios.create({
  baseURL: BASE + "/api",  
  withCredentials: true,  
});

export default api;
