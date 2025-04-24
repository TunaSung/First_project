import api from "./api";

export const products = async () => {
    try {
        const response = await api.get(`/product/products`);
        return response.data;
    } catch (error) {
        throw new Error("獲取商品失敗：" + error.message);
    }
};

export const productById = async (id) => {
    try {
        const response = await api.get(`/product/product/${id}`);
        return response.data;
    } catch (error) {
        throw new Error("獲取商品詳情失敗：" + error.message);
    }
};