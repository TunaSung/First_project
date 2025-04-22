import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; // 你的後端 API 路徑


// 在其他請求中附加 token
export const setAuthHeader = () => {
    const token = localStorage.getItem('token'); // 從 localStorage 取出 token

    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; // 設定 Authorization 標頭
    }
};

// 登入
export const login = async (email, password) => { // 後端需要什麼就跟前端要相應的變數
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password }); 

        if (response.data.token) {
            localStorage.setItem('token', response.data.token); // 儲存 token
            setAuthHeader();
        }

        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Login failed";
    }
};

// 註冊
export const register = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/register`, { email, password });
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Registration failed";
    }
};

export const logout = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization']; // 刪除全域的 Authorization 標頭
};
