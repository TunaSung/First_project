import api from "./api";

// 取得購物車內容
export const fetchCart = async () => {
    try {
        const response = await api.get(`/cart`); 
        
        return response.data;

    } catch (error) {
        console.error("錯誤發生", error);

        if (error.response) {
            console.error("API 錯誤響應: ", error.response.data); // 查看 API 的錯誤響應內容
            console.error("狀態碼:", error.response.status); // 查看狀態碼
        } else if (error.request) {
            console.error("請求未發送: ", error.request); // 如果請求沒發送
        } else {
            console.error("錯誤發生於設定請求: ", error.message); // 如果是其他錯誤
        } 
        throw error.response?.data?.message || "Get failed"; 
    }
};

// 加入商品到購物車
export const addToCart = async (productId, amount) => {
    try {
        const response = await api.post(`/cart/add`, { productId, amount });
        return response.data; 
    } catch (error) {
        console.error("加入購物車失敗", error.message);
        alert(error.response.data.message)
        throw error.response?.data?.message || "Add failed";
    }
};


// 更新購物車商品數量
export const updateCartItemQuantity = async (productId, stock) => {
    try {
        const response = await api.post(`/cart/update`, { productId, stock });
        return response.data;
    } catch (error) {
        console.error("更新購物車商品數量失敗", error.message);
        throw error.response?.data?.message || "Update failed";
    }
};

// 刪除購物車商品
export const removeCartItem = async (productId) => {
    try {
        const response = await api.delete(`/cart/remove`, { data: { productId } });
        return response.data; // 返回後端的回應
    } catch (error) {
        console.error("刪除購物車商品失敗", error.message);
        throw error; // 如果出現錯誤，將錯誤拋出
    }
};
