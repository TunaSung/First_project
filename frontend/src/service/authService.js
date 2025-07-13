import api from "./api"; // 引入 api.js 檔


// 儲存 token 並帶入 header，同時記錄 timestamp
export const saveToken = (token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("tokenSavedAt", Date.now().toString());
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  };
  
// 清除 token、timestamp、header
export const clearToken = () => {
localStorage.removeItem("token");
localStorage.removeItem("tokenSavedAt");
delete api.defaults.headers.common["Authorization"];
};

// 在其他 API 請求前呼叫，確保 header 裝載最新 token
export const setAuthHeader = () => {
const token = localStorage.getItem("token");
if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
};

// 登入
export const login = async (email, password) => { // 後端需要什麼就跟前端要相應的變數
    try {
        const response = await api.post(`/auth/login`, { email, password }); 

        if (response.data.token) {
            saveToken(response.data.token);
        }

        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Login failed";
    }
};

// 註冊
export const register = async (email, password) => {
    try {
        const response = await api.post(`/auth/register`, { email, password });
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Registration failed";
    }
};

export const logout = () => {
    localStorage.removeItem('token');
    delete api.defaults.headers.common['Authorization']; // 刪除全域的 Authorization 標頭
};
