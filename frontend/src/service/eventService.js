import api from "./api";

export const fetchEvent = async () => {
    try {
        const response = await api.get(`/event/events`);
        return response.data;
    } catch (error) {
        throw new Error("獲取商品失敗：" + error.message);
    }
};